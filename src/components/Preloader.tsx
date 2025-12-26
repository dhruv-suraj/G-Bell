import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const CONFIG = {
  particleCount: 18000,
  silverPalette: ['#C0C0C0', '#D3D3D3', '#E5E4E2', '#848482', '#FFFFFF'],
  twinkleIntensity: 0.071,
  baseScale: 0.8,
  sphereRadius: 2.2,
  loadTime: 4000
};

interface PreloaderProps {
  onComplete?: () => void;
  brandText?: string;
}

export function Preloader({ onComplete, brandText = "G-Bell" }: PreloaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const brandRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(CONFIG.particleCount * 3);
    const targetPositions = new Float32Array(CONFIG.particleCount * 3);
    const colors = new Float32Array(CONFIG.particleCount * 3);

    // Initialize Silver Sphere
    const colorObj = new THREE.Color();
    for (let i = 0; i < CONFIG.particleCount; i++) {
      const i3 = i * 3;
      const phi = Math.acos(-1 + (2 * i) / CONFIG.particleCount);
      const theta = Math.sqrt(CONFIG.particleCount * Math.PI) * phi;

      positions[i3] = CONFIG.sphereRadius * Math.cos(theta) * Math.sin(phi);
      positions[i3 + 1] = CONFIG.sphereRadius * Math.sin(theta) * Math.sin(phi);
      positions[i3 + 2] = CONFIG.sphereRadius * Math.cos(phi);

      const hex = CONFIG.silverPalette[Math.floor(Math.random() * CONFIG.silverPalette.length)];
      colorObj.set(hex).multiplyScalar(0.7 + Math.random() * 0.5);
      colors[i3] = colorObj.r;
      colors[i3 + 1] = colorObj.g;
      colors[i3 + 2] = colorObj.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create particle texture
    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = 32;
    textureCanvas.height = 32;
    const ctx = textureCanvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.3)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    const particleTexture = new THREE.CanvasTexture(textureCanvas);

    const material = new THREE.PointsMaterial({
      size: 0.035,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      map: particleTexture,
      vertexColors: true,
      opacity: 0
    });

    const particleSystem = new THREE.Points(geometry, material);
    particleSystem.scale.set(CONFIG.baseScale, CONFIG.baseScale, CONFIG.baseScale);
    scene.add(particleSystem);

    // Initial Intro: Particles and Text Fade In
    gsap.to(material, { opacity: 0.8, duration: 2, ease: "power2.out" });
    if (brandRef.current) {
      gsap.to(brandRef.current, { opacity: 1, duration: 2.5, ease: "power1.inOut", delay: 0.5 });
    }

    // Explosion Function
    function triggerExplosion() {
      for (let i = 0; i < CONFIG.particleCount; i++) {
        const i3 = i * 3;
        const dist = 15 + Math.random() * 25;
        targetPositions[i3] = (Math.random() - 0.5) * dist;
        targetPositions[i3 + 1] = (Math.random() - 0.5) * dist;
        targetPositions[i3 + 2] = (Math.random() - 0.5) * dist;
      }

      const tl = gsap.timeline();

      // Explosive expansion
      tl.to(positions, {
        endArray: targetPositions,
        duration: 1.8,
        ease: "expo.out",
        onUpdate: () => {
          geometry.attributes.position.needsUpdate = true;
        }
      });

      // Text and Particle system fade away
      if (brandRef.current) {
        tl.to(brandRef.current, {
          opacity: 0,
          scale: 1.2,
          filter: "blur(10px)",
          duration: 1,
          ease: "power2.in"
        }, "-=1.5");
      }
      tl.to(material, { opacity: 0, duration: 1.2, ease: "power2.out" }, "-=1.2");

      // Final Cleanup
      if (containerRef.current) {
        tl.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          onComplete: () => {
            setIsComplete(true);
            onComplete?.();
          }
        });
      }
    }

    // Main Render Loop
    let time = 0;
    let animationId: number;

    function animate() {
      time += 0.01;
      animationId = requestAnimationFrame(animate);

      particleSystem.rotation.y += 0.0015;
      particleSystem.rotation.x += 0.0005;

      // Twinkle Logic
      material.size = 0.038 + Math.sin(time * 4) * (CONFIG.twinkleIntensity * 0.5);

      renderer.render(scene, camera);
    }

    animate();

    // Trigger explosion after loadTime
    const explosionTimeout = setTimeout(triggerExplosion, CONFIG.loadTime);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearTimeout(explosionTimeout);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
    };
  }, [onComplete]);

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        backgroundColor: '#050505',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 5,
          width: '100%'
        }}
      >
        <h1
          ref={brandRef}
          style={{
            color: '#E5E4E2',
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            fontWeight: 400,
            letterSpacing: '18px',
            textTransform: 'uppercase',
            margin: 0,
            opacity: 0,
            textShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
          }}
        >
          {brandText}
        </h1>
      </div>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
