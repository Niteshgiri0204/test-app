import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import * as THREE from "three";
import { resumeData } from "../data/resumeData";
import styles from "../styles/components/HeroSection.module.css";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
  setSectionRef: (node: HTMLElement | null, id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToSection,
  setSectionRef,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [displayedAboutText, setDisplayedAboutText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedAboutText(resumeData.aboutTextFull.substring(0, index));
      index++;
      if (index > resumeData.aboutTextFull.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      object: THREE.Mesh;
    let mouseX = 0,
      mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.DodecahedronGeometry(2, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00adb5,
      roughness: 0.5,
      metalness: 0.5,
    });
    object = new THREE.Mesh(geometry, material);
    scene.add(object);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    let initialRotation = 0;
    const initialRotationSpeed = 0.05;

    const animate = () => {
      requestAnimationFrame(animate);

      if (initialRotation < Math.PI * 2) {
        object.rotation.x += initialRotationSpeed;
        object.rotation.y += initialRotationSpeed;
        initialRotation += initialRotationSpeed;
      } else {
        object.rotation.x += 0.003;
        object.rotation.y += 0.003;
      }

      camera.position.x += (mouseX / 100 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY / 100 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onWindowResize = () => {
      if (mountRef.current) {
        camera.aspect =
          mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight
        );
      }
    };

    window.addEventListener("mousemove", onDocumentMouseMove);
    window.addEventListener("resize", onWindowResize);

    animate();

    return () => {
      window.removeEventListener("mousemove", onDocumentMouseMove);
      window.removeEventListener("resize", onWindowResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      scene.clear();
    };
  }, []);

  return (
    <header
      id="home"
      ref={(node) => setSectionRef(node, "home")}
      className={styles.heroSection}
    >
      <div ref={mountRef} className={styles.heroCanvasContainer}></div>

      <div className={styles.heroContent}>
        <h1
          className={styles.heroTitle}
          style={{ textShadow: "0 4px 8px rgba(0,0,0,0.5)" }}
        >
          {resumeData.name}
        </h1>
        <p
          className={styles.heroSubtitle}
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
        >
          {resumeData.title}
        </p>
        <p className={styles.heroAboutText}>{displayedAboutText}</p>
        <button
          onClick={() => scrollToSection("projects")}
          className={styles.heroButton}
        >
          View My Projects
          <ArrowRight size={20} style={{ marginLeft: "0.5rem" }} />
        </button>
      </div>
    </header>
  );
};

export default HeroSection;
