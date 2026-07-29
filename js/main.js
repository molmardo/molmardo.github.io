
/* GLOBAL SETUP */
document.getElementById('year').textContent = new Date().getFullYear();
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

/* NAVBAR */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive:true });

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});
document.querySelectorAll('[data-nav]').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
    navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

/* TERMINAL TYPING EFFECT */
const terminalLines = [
  { prompt:'mark@molmardo', path:'~', cmd:'whoami', out:'Mark Molnar — IT Student @ RMIT Vietnam' },
  { prompt:'mark@molmardo', path:'~', cmd:'cat certificates.txt', out:'Software Developer Cert (2025), ECDL IT Security' },
  { prompt:'mark@molmardo', path:'~', cmd:'ls freelance-builds/', out:'rdr2003.hu/  saigonandmore.hu/' },
  { prompt:'mark@molmardo', path:'~', cmd:'status', out:'Ready for Intern / Junior Software Developer roles' },
];

function typeTerminal(){
  const body = document.getElementById('terminalBody');
  body.innerHTML = '';
  let li = 0;

  function typeLine(){
    if (li >= terminalLines.length){
      const row = document.createElement('div');
      row.className = 'row';
      row.innerHTML = `<span class="prompt">mark@molmardo</span><span class="path">:~$</span> <span class="type-cursor"></span>`;
      body.appendChild(row);
      return;
    }
    const line = terminalLines[li];
    const row = document.createElement('div');
    row.className = 'row';
    const cmdSpan = document.createElement('span');
    row.innerHTML = `<span class="prompt">${line.prompt}</span><span class="path">:~$</span> `;
    row.appendChild(cmdSpan);
    body.appendChild(row);

    let i = 0;
    const speed = prefersReducedMotion ? 0 : 28;
    (function typeChar(){
      if (i <= line.cmd.length){
        cmdSpan.textContent = line.cmd.slice(0, i);
        i++;
        if (speed > 0) { setTimeout(typeChar, speed); return; }
      } else {
        const out = document.createElement('div');
        out.className = 'out';
        out.innerHTML = `<span class="dim">${line.out}</span>`;
        row.appendChild(out);
        li++;
        setTimeout(typeLine, prefersReducedMotion ? 0 : 380);
        return;
      }
      typeChar();
    })();
  }
  typeLine();
}

/* TILT EFFECT FOR CARDS */
if (!isTouch){
  document.querySelectorAll('.tilt-card').forEach(card => {
    let rect;
    card.addEventListener('mouseenter', () => { rect = card.getBoundingClientRect(); });
    card.addEventListener('mousemove', (e) => {
      if (!rect) rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotY = (x - 0.5) * 12;
      const rotX = (0.5 - y) * 12;
      card.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* GSAP ANIMATIONS */
gsap.registerPlugin(ScrollTrigger);

if (!prefersReducedMotion){
  const tl = gsap.timeline({ defaults:{ ease:'power3.out' } });
  tl.from('.hero-title .line span', { yPercent:120, duration:1, stagger:0.12 })
    .from('.eyebrow', { opacity:0, y:10, duration:0.6 }, '-=0.9')
    .from('.hero-desc', { opacity:0, y:16, duration:0.8 }, '-=0.6')
    .from('.hero-actions', { opacity:0, y:16, duration:0.8 }, '-=0.55')
    .from('.hero-meta-item', { opacity:0, y:12, duration:0.6, stagger:0.1 }, '-=0.5')
    .from('.profile-3d-card', { opacity:0, scale:0.9, duration:0.8 }, '-=0.6')
    .add(typeTerminal, '-=0.2');

  gsap.utils.toArray('.section-head').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 82%' },
      opacity:0, y:34, duration:0.9, ease:'power3.out'
    });
  });

  gsap.from('.about-text p', {
    scrollTrigger: { trigger: '.about-text', start: 'top 80%' },
    opacity:0, y:24, duration:0.8, stagger:0.15, ease:'power3.out'
  });
  gsap.from('.terminal', {
    scrollTrigger: { trigger: '.terminal', start: 'top 82%' },
    opacity:0, x:30, duration:0.9, ease:'power3.out'
  });

  gsap.from('.skill-card', {
    scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' },
    opacity:0, y:40, duration:0.8, stagger:0.12, ease:'power3.out'
  });

  gsap.utils.toArray('.project-card').forEach((card) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 84%' },
      opacity:0, y:50, duration:0.9, ease:'power3.out'
    });
  });

  gsap.from('.contact-panel', {
    scrollTrigger: { trigger: '.contact-panel', start: 'top 85%' },
    opacity:0, y:30, duration:0.9, ease:'power3.out'
  });
} else {
  typeTerminal();
}

/* THREE.JS BACKGROUND */
(function initNetwork(){
  const canvas = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.z = 260;

  const isMobile = window.innerWidth < 760;
  const COUNT = isMobile ? 55 : 120;
  const SPREAD = { x: 420, y: 260, z: 200 };
  const LINK_DIST = isMobile ? 70 : 95;

  function makeGlowTexture(){
    const size = 128;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.4, 'rgba(0,242,254,0.6)');
    g.addColorStop(1, 'rgba(0,242,254,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,size,size);
    return new THREE.CanvasTexture(c);
  }

  const nodes = [];
  for (let i=0; i<COUNT; i++){
    nodes.push({
      pos: new THREE.Vector3(
        (Math.random()-0.5) * SPREAD.x,
        (Math.random()-0.5) * SPREAD.y,
        (Math.random()-0.5) * SPREAD.z
      ),
      vel: new THREE.Vector3(
        (Math.random()-0.5) * 0.12,
        (Math.random()-0.5) * 0.12,
        (Math.random()-0.5) * 0.08
      )
    });
  }

  const posAttr = new Float32Array(COUNT * 3);
  const pointsGeo = new THREE.BufferGeometry();
  pointsGeo.setAttribute('position', new THREE.BufferAttribute(posAttr, 3));
  const pointsMat = new THREE.PointsMaterial({
    size: isMobile ? 5 : 6.5,
    map: makeGlowTexture(),
    transparent: true,
    depthWrite: false,
    color: new THREE.Color(0x8fdcff),
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(pointsGeo, pointsMat);
  scene.add(points);

  const MAX_LINES = COUNT * 6;
  const lineGeo = new THREE.BufferGeometry();
  const linePos = new Float32Array(MAX_LINES * 2 * 3);
  const lineColor = new Float32Array(MAX_LINES * 2 * 3);
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
  lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColor, 3));
  const lineMat = new THREE.LineBasicMaterial({
    vertexColors: true, transparent:true, opacity:0.45, blending: THREE.AdditiveBlending
  });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lines);

  const cCyan = new THREE.Color(0x00f2fe);
  const cPurple = new THREE.Color(0x6c5ce7);
  const tmpColor = new THREE.Color();

  const mouse = new THREE.Vector2(0,0);
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth - 0.5);
    mouse.y = (e.clientY / window.innerHeight - 0.5);
  }, { passive:true });

  function animate(){
    requestAnimationFrame(animate);

    for (let i=0; i<COUNT; i++){
      const n = nodes[i];
      n.pos.addScaledVector(n.vel, 1);

      if (n.pos.x > SPREAD.x/2 || n.pos.x < -SPREAD.x/2) n.vel.x *= -1;
      if (n.pos.y > SPREAD.y/2 || n.pos.y < -SPREAD.y/2) n.vel.y *= -1;
      if (n.pos.z > SPREAD.z/2 || n.pos.z < -SPREAD.z/2) n.vel.z *= -1;

      posAttr[i*3]   = n.pos.x;
      posAttr[i*3+1] = n.pos.y;
      posAttr[i*3+2] = n.pos.z;
    }
    pointsGeo.attributes.position.needsUpdate = true;

    let vi = 0;
    for (let i=0; i<COUNT && vi < MAX_LINES*2*3 - 6; i++){
      for (let j=i+1; j<COUNT; j++){
        const dx = nodes[i].pos.x - nodes[j].pos.x;
        const dy = nodes[i].pos.y - nodes[j].pos.y;
        const dz = nodes[i].pos.z - nodes[j].pos.z;
        const distSq = dx*dx + dy*dy + dz*dz;
        if (distSq < LINK_DIST*LINK_DIST){
          const dist = Math.sqrt(distSq);
          const alpha = 1 - dist / LINK_DIST;

          linePos[vi]   = nodes[i].pos.x; linePos[vi+1] = nodes[i].pos.y; linePos[vi+2] = nodes[i].pos.z;
          linePos[vi+3] = nodes[j].pos.x; linePos[vi+4] = nodes[j].pos.y; linePos[vi+5] = nodes[j].pos.z;

          tmpColor.copy(cCyan).lerp(cPurple, 1-alpha).multiplyScalar(alpha*0.8);
          lineColor[vi]=tmpColor.r; lineColor[vi+1]=tmpColor.g; lineColor[vi+2]=tmpColor.b;
          lineColor[vi+3]=tmpColor.r; lineColor[vi+4]=tmpColor.g; lineColor[vi+5]=tmpColor.b;

          vi += 6;
        }
      }
    }
    for (let k=vi; k<MAX_LINES*2*3; k++){ linePos[k] = 0; lineColor[k] = 0; }
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.attributes.color.needsUpdate = true;
    lineGeo.setDrawRange(0, vi/3);

    if (!prefersReducedMotion){
      camera.position.x += (mouse.x * 35 - camera.position.x) * 0.02;
      camera.position.y += (-mouse.y * 25 - camera.position.y) * 0.02;
      camera.lookAt(0,0,0);
    }

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
})();