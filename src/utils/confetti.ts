export function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d')!;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#4361ee', '#06d6a0', '#f77f00', '#ef476f', '#7b2cbf', '#ffd60a', '#00b4d8'];
  const particles = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: -20,
    vy: 3 + Math.random() * 4,
    vx: (Math.random() - 0.5) * 3,
    rotation: Math.random() * 360,
    vr: (Math.random() - 0.5) * 8,
    width: 8 + Math.random() * 8,
    height: 4 + Math.random() * 6,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: 1,
  }));

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      p.y += p.vy;
      p.x += p.vx;
      p.rotation += p.vr;
      if (frame > 80) p.opacity -= 0.02;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
      ctx.restore();
    }

    frame++;
    if (frame < 150) {
      requestAnimationFrame(animate);
    } else {
      document.body.removeChild(canvas);
    }
  }

  animate();
}
