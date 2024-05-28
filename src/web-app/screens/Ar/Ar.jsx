/* global THREE, THREEx */
import React, { useEffect, useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ARComponent = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const initializeAR = () => {
      if (typeof window.THREE === 'undefined' || typeof window.THREEx === 'undefined') {
        console.error('THREE or THREEx is not defined');
        return;
      }

      const sceneEl = sceneRef.current;

      // Create a scene
      const scene = new THREE.Scene();

      // Create a camera
      const camera = new THREE.Camera();
      scene.add(camera);

      // Create a renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      sceneEl.appendChild(renderer.domElement);

      // Set up AR.js
      const arToolkitSource = new THREEx.ArToolkitSource({
        sourceType: 'webcam',
      });

      arToolkitSource.init(() => {
        arToolkitSource.onResizeElement();
        arToolkitSource.copyElementSizeTo(renderer.domElement);
        if (arToolkitContext.arController !== null) {
          arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
        }
      });

      const arToolkitContext = new THREEx.ArToolkitContext({
        cameraParametersUrl: 'https://cdn.rawgit.com/artoolkitx/artoolkit5/master/bin/Data/camera_para.dat',
        detectionMode: 'mono',
      });

      arToolkitContext.init(() => {
        camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
      });

      const onRenderFcts = [];
      onRenderFcts.push(() => {
        if (arToolkitSource.ready === false) return;
        arToolkitContext.update(arToolkitSource.domElement);
        scene.visible = camera.visible;
      });

      // Create a marker
      const markerRoot = new THREE.Group();
      scene.add(markerRoot);

        // const markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
        //   type: 'pattern',
        //   patternUrl: 'https://cdn.rawgit.com/artoolkitx/artoolkit5/master/bin/Data/patt.hiro',
        // });

      // Add a 3D object to the marker
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshNormalMaterial({
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geometry, material);
      markerRoot.add(mesh);

      // Render the scene
      onRenderFcts.push(() => {
        renderer.render(scene, camera);
      });

      const animate = () => {
        requestAnimationFrame(animate);
        onRenderFcts.forEach((onRenderFct) => {
          onRenderFct();
        });
      };
      animate();

      // Handle window resize
      window.addEventListener('resize', () => {
        arToolkitSource.onResize();
        arToolkitSource.copyElementSizeTo(renderer.domElement);
        if (arToolkitContext.arController !== null) {
          arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
        }
      });
    };

    const scriptLoaded = () => {
      if (window.THREE && window.THREEx) {
        initializeAR();
      } else {
        setTimeout(scriptLoaded, 100);
      }
    };

    scriptLoaded();
  }, []);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
          <script src="https://rawcdn.githack.com/jeromeetienne/AR.js/3.1.3/aframe/build/aframe-ar.js"></script>
        </Helmet>
        <div ref={sceneRef} />
      </div>
    </HelmetProvider>
  );
};

export default ARComponent;
