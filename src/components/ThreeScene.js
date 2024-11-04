"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import particleFire from 'three-particle-fire';

particleFire.install( { THREE: THREE } );


const ThreeScene = (props) => {
  const threeRef = useRef(null)

  useEffect(() => {
    // Initialize scene, camera, and renderer
    const clock = new THREE.Clock();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth/4.2, window.innerHeight/3);
    threeRef.current.appendChild(renderer.domElement);

    // Position the camera
    camera.position.z = 3;
    camera.position.y = 0.7;
 




    var fireRadius = 1;
    var fireHeight = 3;
    var particleCount = 800;
    var height = window.innerHeight;

    var geometry0 = new particleFire.Geometry( fireRadius, fireHeight, particleCount );
    var material0 = new particleFire.Material( { color: props.color } );
    material0.setPerspective( camera.fov, height );
    var particleFireMesh0 = new THREE.Points( geometry0, material0 );
    scene.add( particleFireMesh0 );








    function update () {

      var delta = clock.getDelta();
    
      requestAnimationFrame( update );
    
      particleFireMesh0.material.update( delta );
      renderer.render( scene, camera );
    
    }
    update()

    // Cleanup on unmount
    return () => {
      renderer.domElement.remove();
    };
  }, [props.color]);

  return (
      <div className='border renderer-container'>
        <div ref={threeRef}></div>
      </div>
  )
};


export default ThreeScene;
