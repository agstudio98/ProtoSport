// ===== CURSOR =====
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

if (cursor && cursorRing) {
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovering'));
  });
}

// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

// ===== SCROLL ANIMATIONS =====
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
};

// ===== THREE.JS BACKGROUND =====
function initThree() {
  const canvas = document.getElementById('canvas-bg');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Color palette
  const colors = [0x3498db, 0x2980b9, 0x1a5276, 0x5dade2, 0x0d3460, 0x1e6091];

  // Floating particles
  const particles = [];
  const particleGeo = new THREE.SphereGeometry(0.06, 6, 6);

  for (let i = 0; i < 200; i++) {
    const mat = new THREE.MeshBasicMaterial({
      color: colors[Math.floor(Math.random() * colors.length)],
      transparent: true,
      opacity: Math.random() * 0.6 + 0.1
    });
    const mesh = new THREE.Mesh(particleGeo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 80,
      (Math.random() - 0.5) * 60,
      (Math.random() - 0.5) * 40
    );
    mesh.userData = {
      speedY: (Math.random() - 0.5) * 0.008,
      speedX: (Math.random() - 0.5) * 0.004,
      phase: Math.random() * Math.PI * 2,
      amp: Math.random() * 0.3
    };
    scene.add(mesh);
    particles.push(mesh);
  }

  // Geometric shapes
  const shapes = [];

  // Icosahedrons (ice-like)
  for (let i = 0; i < 8; i++) {
    const geo = new THREE.IcosahedronGeometry(Math.random() * 1.5 + 0.5, 0);
    const mat = new THREE.MeshBasicMaterial({
      color: colors[Math.floor(Math.random() * colors.length)],
      wireframe: true,
      transparent: true,
      opacity: Math.random() * 0.15 + 0.05
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 60,
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 20 - 10
    );
    mesh.userData = {
      rotX: (Math.random() - 0.5) * 0.005,
      rotY: (Math.random() - 0.5) * 0.008,
      rotZ: (Math.random() - 0.5) * 0.003,
      floatSpeed: Math.random() * 0.003 + 0.001,
      floatPhase: Math.random() * Math.PI * 2
    };
    scene.add(mesh);
    shapes.push(mesh);
  }

  // Torus knots (Y2K vibes)
  for (let i = 0; i < 4; i++) {
    const geo = new THREE.TorusKnotGeometry(
      Math.random() * 1.5 + 0.8,
      0.1,
      64,
      8,
      Math.floor(Math.random() * 3) + 2,
      Math.floor(Math.random() * 3) + 3
    );
    const mat = new THREE.MeshBasicMaterial({
      color: 0x3498db,
      wireframe: true,
      transparent: true,
      opacity: 0.06
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 15 - 5
    );
    mesh.userData = {
      rotX: (Math.random() - 0.5) * 0.003,
      rotY: (Math.random() - 0.5) * 0.005,
    };
    scene.add(mesh);
    shapes.push(mesh);
  }

  // Octahedrons
  for (let i = 0; i < 6; i++) {
    const geo = new THREE.OctahedronGeometry(Math.random() * 2 + 0.5, 0);
    const mat = new THREE.MeshBasicMaterial({
      color: colors[Math.floor(Math.random() * colors.length)],
      wireframe: true,
      transparent: true,
      opacity: Math.random() * 0.1 + 0.03
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 70,
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 20 - 5
    );
    mesh.userData = {
      rotX: (Math.random() - 0.5) * 0.006,
      rotY: (Math.random() - 0.5) * 0.004,
      rotZ: (Math.random() - 0.5) * 0.007,
    };
    scene.add(mesh);
    shapes.push(mesh);
  }

  // Connecting lines (constellation)
  const lineMat = new THREE.LineBasicMaterial({
    color: 0x3498db,
    transparent: true,
    opacity: 0.04
  });

  // Mouse parallax
  let mouseXNorm = 0, mouseYNorm = 0;
  document.addEventListener('mousemove', (e) => {
    mouseXNorm = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseYNorm = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  let time = 0;

  function animate() {
    requestAnimationFrame(animate);
    time += 0.01;

    // Animate particles
    particles.forEach((p) => {
      p.position.y += p.userData.speedY;
      p.position.x += p.userData.speedX;
      p.position.x += Math.sin(time + p.userData.phase) * p.userData.amp * 0.02;

      // Wrap around
      if (p.position.y > 35) p.position.y = -35;
      if (p.position.y < -35) p.position.y = 35;
      if (p.position.x > 45) p.position.x = -45;
      if (p.position.x < -45) p.position.x = 45;
    });

    // Animate shapes
    shapes.forEach((s) => {
      if (s.userData.rotX) s.rotation.x += s.userData.rotX;
      if (s.userData.rotY) s.rotation.y += s.userData.rotY;
      if (s.userData.rotZ) s.rotation.z += s.userData.rotZ;
      if (s.userData.floatSpeed) {
        s.position.y += Math.sin(time * s.userData.floatSpeed + s.userData.floatPhase) * 0.004;
      }
    });

    // Camera parallax
    camera.position.x += (mouseXNorm * 2 - camera.position.x) * 0.02;
    camera.position.y += (-mouseYNorm * 1.5 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = parseInt(el.dataset.counter);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = Date.now();
    
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  
  if (!hamburger || !mobileMenu) return;
  
  function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    mobileOverlay.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  }
  
  function closeMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  
  hamburger.addEventListener('click', toggleMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);
  
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  observeElements();
  initMobileMenu();

  if (typeof THREE !== 'undefined') initThree();

  // Counter observer
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        counterObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) counterObserver.observe(statsSection);
});