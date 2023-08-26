// import React, { useEffect, useRef } from 'react';

// const ParticleCanvas = () => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const context = canvas.getContext('2d');
//     if (!context) return;

//     let particles: Particle[] = [];

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     class Particle {
//       x: number;
//       y: number;
//       size: number;
//       speedX: number;
//       speedY: number;

//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 5 + 1;
//         this.speedX = Math.random() * 3 - 1.5;
//         this.speedY = Math.random() * 3 - 1.5;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x > canvas.width) this.x = 0;
//         if (this.x < 0) this.x = canvas.width;
//         if (this.y > canvas.height) this.y = 0;
//         if (this.y < 0) this.y = canvas.height;

//         if (this.size > 0.2) this.size -= 0.1;
//       }

//       draw() {
//         context.fillStyle = 'white';
//         context.beginPath();
//         context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         context.fill();
//       }
//     }

//     function createParticles() {
//       for (let i = 0; i < 300; i++) {
//         particles.push(new Particle());
//       }
//     }

//     function animate() {
//       context.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((particle) => {
//         particle.update();
//         particle.draw();
//       });
//       requestAnimationFrame(animate);
//     }

//     createParticles();
//     animate();

//     const handleResize = () => {
//       if (!canvas) return;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       particles = [];
//       createParticles();
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const canvasStyle = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100vw',
//     height: '100vh',
//     zIndex: -1,
//   };
  
//   return <canvas ref={canvasRef} className="particle-canvas" style={canvasStyle} />;
// };

// export default ParticleCanvas;
