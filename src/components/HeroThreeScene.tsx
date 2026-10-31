import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x101d2b, 0.035);

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 8.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x8fa4b8, 0.9);
    scene.add(ambientLight);

    const mainDirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    mainDirLight.position.set(5, 8, 4);
    scene.add(mainDirLight);

    // Cinematic Copper Rim Light
    const copperRimLight = new THREE.PointLight(0xd97736, 4.5, 20);
    copperRimLight.position.set(-6, -2, 2);
    scene.add(copperRimLight);

    const steelBlueLight = new THREE.PointLight(0x4a709c, 3.0, 25);
    steelBlueLight.position.set(6, 4, -2);
    scene.add(steelBlueLight);

    // Materials
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x384554,
      metalness: 0.85,
      roughness: 0.28,
    });

    const darkBeamMat = new THREE.MeshStandardMaterial({
      color: 0x1b2733,
      metalness: 0.9,
      roughness: 0.35,
    });

    const copperAccentMat = new THREE.MeshStandardMaterial({
      color: 0xd97736,
      metalness: 0.75,
      roughness: 0.25,
    });

    const tmtBarMat = new THREE.MeshStandardMaterial({
      color: 0x546373,
      metalness: 0.82,
      roughness: 0.38,
    });

    const group = new THREE.Group();
    scene.add(group);

    // Procedural I-Beam generator
    function createIBeam(length: number, beamWidth: number, flangeHeight: number, thickness: number) {
      const beamGroup = new THREE.Group();
      // Web (center plate)
      const webGeo = new THREE.BoxGeometry(beamWidth - thickness * 2, thickness, length);
      const webMesh = new THREE.Mesh(webGeo, steelMat);
      beamGroup.add(webMesh);

      // Flanges (top & bottom caps)
      const flangeGeo = new THREE.BoxGeometry(thickness, flangeHeight, length);
      const leftFlange = new THREE.Mesh(flangeGeo, darkBeamMat);
      leftFlange.position.x = -(beamWidth / 2 - thickness / 2);
      beamGroup.add(leftFlange);

      const rightFlange = new THREE.Mesh(flangeGeo, darkBeamMat);
      rightFlange.position.x = beamWidth / 2 - thickness / 2;
      beamGroup.add(rightFlange);

      return beamGroup;
    }

    // Construct structural architectural framework
    const b1 = createIBeam(7.5, 0.7, 0.7, 0.08);
    b1.rotation.set(0.2, 0.5, 0.1);
    b1.position.set(1.5, 0.2, -1);
    group.add(b1);

    const b2 = createIBeam(6.5, 0.6, 0.6, 0.07);
    b2.rotation.set(-0.35, -0.6, 0.4);
    b2.position.set(-1.8, -0.5, 0.5);
    group.add(b2);

    const b3 = createIBeam(8.0, 0.55, 0.55, 0.06);
    b3.rotation.set(1.2, 0.3, -0.5);
    b3.position.set(0.8, -1.8, -0.8);
    group.add(b3);

    // TMT Bar bundles (ribbed cylindrical steel rebar)
    const tmtCount = 14;
    const tmtRadius = 0.07;
    const tmtLength = 7.0;
    const tmtGroup = new THREE.Group();

    for (let i = 0; i < tmtCount; i++) {
      const angle = (i / tmtCount) * Math.PI * 2;
      const radDist = 0.35 + (i % 2) * 0.12;
      const rebarGeo = new THREE.CylinderGeometry(tmtRadius, tmtRadius, tmtLength, 16);
      const rebar = new THREE.Mesh(rebarGeo, i % 4 === 0 ? copperAccentMat : tmtBarMat);
      rebar.position.set(Math.cos(angle) * radDist, (Math.random() - 0.5) * 0.2, Math.sin(angle) * radDist);
      tmtGroup.add(rebar);
    }
    tmtGroup.rotation.set(0.4, 0.8, -0.3);
    tmtGroup.position.set(2.4, -0.2, 1.2);
    group.add(tmtGroup);

    // Structural connector nodes
    const jointGeo = new THREE.BoxGeometry(0.85, 0.85, 0.85);
    const joint = new THREE.Mesh(jointGeo, copperAccentMat);
    joint.position.set(-0.6, 0.8, 0.4);
    joint.rotation.set(0.3, 0.4, 0.2);
    group.add(joint);

    // Architectural floating ambient particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 14;
      particlePos[i + 1] = (Math.random() - 0.5) * 10;
      particlePos[i + 2] = (Math.random() - 0.5) * 10;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd97736,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse parallax smooth interpolation
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = normX * 0.45;
      targetY = normY * 0.35;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Resize handling
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    const clock = new THREE.Clock();
    let reqId: number;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse inertia
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Subtle slow rotation
      group.rotation.y = elapsedTime * 0.08 + mouseX;
      group.rotation.x = Math.sin(elapsedTime * 0.05) * 0.05 + mouseY;

      // Particle ambient drift
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = Math.cos(elapsedTime * 0.03) * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      id="threejs-hero-canvas"
      className="absolute inset-0 w-full h-full pointer-events-auto bg-transparent opacity-65"
      aria-hidden="true"
    />
  );
};

