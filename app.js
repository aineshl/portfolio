/* Mobile nav drawer */
(function () {
  var toggle = document.getElementById('navToggle');
  var drawer = document.getElementById('navDrawer');
  if (!toggle || !drawer) return;

  function setOpen(open) {
    drawer.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!drawer.classList.contains('open'));
  });

  drawer.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 700) setOpen(false);
  });
})();

/* Fade-in on scroll */
(function () {
  var targets = document.querySelectorAll('.proj-row, .stat');
  if (!targets.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function reveal(el) {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }

  if (!('IntersectionObserver' in window)) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.04 });

  targets.forEach(function (el, i) {
    var d = Math.min(i, 5) * 0.07;
    el.style.cssText += ';opacity:0;transform:translateY(12px);transition:opacity .4s ' + d + 's ease,transform .4s ' + d + 's ease';
    io.observe(el);
  });

  // Failsafe: never leave content permanently hidden if the observer does not fire.
  setTimeout(function () {
    targets.forEach(function (el) { reveal(el); io.unobserve(el); });
  }, 2000);
})();

/* Click to enlarge case study images */
(function () {
  var imgs = document.querySelectorAll('.cs-img img');
  if (!imgs.length) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML = '<button class="lightbox-close" aria-label="Close image">&times;</button><img alt=""/>';
  document.body.appendChild(box);
  var full = box.querySelector('img');

  function close() {
    box.classList.remove('open');
    document.body.style.overflow = '';
  }

  imgs.forEach(function (img) {
    img.addEventListener('click', function () {
      full.src = img.currentSrc || img.src;
      full.alt = img.alt;
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
