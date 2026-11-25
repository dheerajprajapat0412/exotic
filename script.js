/* ============ EDIT THESE ============ */
const EMAIL = 'exoticailabs@gmail.com';

// Video list. File names go in public/videos/<file>.mp4
// Optional cover image goes in public/images/<file>.jpg
// ori: 'v' = vertical, 'h' = horizontal
const WORKS = [
  { cat:'jewellery',   ori:'h', file:'jewellery-1',   text:'A diamond necklace glowing under studio light, shot with cinematic precision, zero physical set required.' },
  { cat:'jewellery',   ori:'h', file:'jewellery-2',   text:'Gold bangles rotating in slow motion, every reflection crafted to feel unmistakably luxurious.' },
  { cat:'jewellery',   ori:'v', file:'jewellery-3',   text:'A bridal jewellery story told vertically, made to stop the scroll instantly.' },
  { cat:'jewellery',   ori:'h', file:'jewellery-4',   text:'A bridal jewellery story told vertically, made to stop the scroll instantly.' },
  { cat:'jewellery',   ori:'v', file:'jewellery-5',   text:'A bridal jewellery story told vertically, made to stop the scroll instantly.' },
  { cat:'cosmetics',   ori:'v', file:'cosmetics-1',   text:'A lipstick launch film with liquid-smooth textures and flawless, magazine-grade close-ups.' },
  { cat:'cosmetics',   ori:'v', file:'cosmetics-2',   text:'Skincare serum droplets in macro detail, fresh, glowing and instantly believable.' },
  { cat:'fashion', ori:'v', file:'fashion-1', text:'Sizzling dishes, rising steam and glossy sauces, styled to make appetites react instantly.' },
  { cat:'fashion', ori:'v', file:'fashion-2', text:'A fashionbrand film with warm ambience, crafted without a single day of shooting.' },
  { cat:'fashion', ori:'v', file:'fashion-3', text:'Signature cocktail pour in slow motion, perfect for menu launches and weekend promotions.' },
  { cat:'fashion', ori:'v', file:'fashion-4', text:'Signature cocktail pour in slow motion, perfect for menu launches and weekend promotions.' },
  { cat:'fashion', ori:'v', file:'fashion-5', text:'Signature cocktail pour in slow motion, perfect for menu launches and weekend promotions.' },
  { cat:'fashion', ori:'v', file:'fashion-6', text:'Signature cocktail pour in slow motion, perfect for menu launches and weekend promotions.' },
  { cat:'restaurants', ori:'v', file:'restaurants-1', text:'Signature cocktail pour in slow motion, perfect for menu launches and weekend promotions.' },
  { cat:'Randomproducts', ori:'v', file:'randomproducts-1', text:'Signature cocktail pour in slow motion, perfect for menu launches and weekend promotions.' },
  { cat:'Randomproducts', ori:'v', file:'randomproducts-2', text:'Signature cocktail pour in slow motion, perfect for menu launches and weekend promotions.' },
  { cat:'Randomproducts', ori:'v', file:'randomproducts-3', text:'Signature cocktail pour in slow motion, perfect for menu launches and weekend promotions.' },
  { cat:'Randomproducts', ori:'v', file:'randomproducts-4', text:'Signature cocktail pour in slow motion, perfect for menu launches and weekend promotions.' },
  { cat:'Randomproducts', ori:'v', file:'randomproducts-5', text:'Signature cocktail pour in slow motion, perfect for menu launches and weekend promotions.' },
  { cat:'creativePosters', ori:'h', type:'img', file:'creative-posters-1', text:'Eye-catching creative posters that stand out in any environment.' },
{ cat:'creativePosters', ori:'v', type:'img', file:'creative-posters-2', text:'Eye-catching creative posters that stand out in any environment.' },
{ cat:'creativePosters', ori:'v', type:'img', file:'creative-posters-3', text:'Eye-catching creative posters that stand out in any environment.' },
{ cat:'creativePosters', ori:'v', type:'img', file:'creative-posters-4', text:'Eye-catching creative posters that stand out in any environment.' },
{ cat:'creativePosters', ori:'v', type:'img', file:'creative-posters-5', text:'Eye-catching creative posters that stand out in any environment.' },
{ cat:'creativePosters', ori:'v', type:'img', file:'creative-posters-6', text:'Eye-catching creative posters that stand out in any environment.' },
{ cat:'creativePosters', ori:'v', type:'img', file:'creative-posters-7', text:'Eye-catching creative posters that stand out in any environment.' },
{ cat:'creativePosters', ori:'v', type:'img', file:'creative-posters-8', text:'Eye-catching creative posters that stand out in any environment.' },
{ cat:'creativePosters', ori:'v', type:'img', file:'creative-posters-9', text:'Eye-catching creative posters that stand out in any environment.' },
{ cat:'creativePosters', ori:'v', type:'img', file:'creative-posters-10', text:'Eye-catching creative posters that stand out in any environment.' },

];    

const LABEL = { jewellery:'Jewellery', cosmetics:'Cosmetics', realestate:'Real Estate', fashion:'Fashion', restaurants:'Restaurants', Randomproducts:'Random Products', creativePosters:'Creative Posters' };
/* ==================================== */

const PAGES = [['index.html','Home'],['portfolio.html','Portfolio'],['pricing.html','Pricing'],['about.html','About']];
const here = location.pathname.split('/').pop() || 'index.html';

const P = {
  camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  wallet:'<path d="M3 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 7l12-3v3"/><circle cx="16.5" cy="13.5" r="1.2"/>',
  grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  star:'<path d="M12 3l2.6 5.4 5.9.9-4.3 4.1 1 5.9L12 16.6 6.8 19.3l1-5.9L3.5 9.3l5.9-.9z"/>',
  spark:'<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/>',
  pen:'<path d="M4 20l4-1 11-11-3-3L5 16z"/>',
  palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2s0-2 1.5-2h2a3 3 0 0 0 3-3c0-5-4-11-8-11z"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16" cy="10" r="1"/>',
  type:'<path d="M5 6V4h14v2M12 4v16M9 20h6"/>',
  chat:'<path d="M4 5h16v11H9l-5 4z"/>',
  layers:'<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"/>',
  box:'<path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/>',
  film:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.5v5l4.5-2.5z"/>',
  image:'<rect x="4" y="3" width="16" height="18" rx="3"/><circle cx="9" cy="9" r="1.8"/><path d="M5 18l5-5 3 3 3-3 3 3"/>',
  trend:'<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  insta:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/>'
};
const PLAY = '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>';

/* ---------- Inject shared parts (background, nav, footer) ---------- */
const logo = `
  <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
    <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#90E0EF"/><stop offset="1" stop-color="#0077B6"/></linearGradient></defs>
    <path d="M16 2 L29 9 V23 L16 30 L3 23 V9 Z" fill="none" stroke="url(#lg)" stroke-width="2.4"/>
    <path d="M12 11 L22 16 L12 21 Z" fill="url(#lg)"/>
  </svg><span>EXOTIC <b>AI LAB</b></span>`;

document.body.insertAdjacentHTML('afterbegin', `
  <div class="bg" aria-hidden="true"><span class="orb o1"></span><span class="orb o2"></span><span class="orb o3"></span><span class="grid"></span></div>
  <div class="cursor-glow" aria-hidden="true"></div>
  <header class="nav" id="nav">
    <a href="index.html" class="logo">${logo}</a>
    <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
    <nav class="links" id="links">
      ${PAGES.map(([u,t]) => `<a href="${u}" class="${u===here?'active':''}">${t}</a>`).join('')}
      <a href="contact.html" class="btn btn-sm">Get Started</a>
    </nav>
  </header>`);

document.body.insertAdjacentHTML('beforeend', `
  <footer class="footer">
    <div class="f-top">
      <div><a href="index.html" class="logo"><span>EXOTIC <b>AI LAB</b></span></a>
        <p class="f-note">Crafted by AI. Directed by imagination.</p></div>
      <nav class="f-links">
        ${PAGES.map(([u,t]) => `<a href="${u}">${t}</a>`).join('')}
        <a href="contact.html">Contact</a>
      </nav>
      <div class="f-mail"><span>Contact</span><p class="f-mail-text">${EMAIL}</p></div>
    </div>
    <p class="copy">&copy; 2026 Exotic AI Lab. All rights reserved.</p>
  </footer>`);

/* ---------- Icons ---------- */
document.querySelectorAll('[data-icon]').forEach(el => {
  el.innerHTML = `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${P[el.dataset.icon] || ''}</svg>`;
});
document.querySelectorAll('[data-email]').forEach(a => { a.textContent = EMAIL; a.href = 'mailto:' + EMAIL; });

/* ---------- Nav behaviour ---------- */
const nav = document.getElementById('nav');
const links = document.getElementById('links');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));
document.getElementById('burger').addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });

/* ---------- Video cards ---------- */
const card = w => {
  const isImg = w.type === 'img';
  const path = isImg ? `/images/${w.file}.png` : `/videos/${w.file}.mp4`;
  return `
  <article class="vcard ${w.ori === 'h' ? 'h' : 'v'}" data-cat="${w.cat}" data-type="${isImg ? 'img' : 'video'}" data-src="${path}">
    <div class="vframe ${w.ori === 'h' ? 'wide' : 'tall'} ${isImg ? 'is-img' : ''}">
      <div class="vph"><span>${LABEL[w.cat]}<br>Upload<br>${path}</span></div>
      ${isImg
        ? `<img class="vposter" src="${path}" alt="" loading="lazy">`
        : `<img class="vposter" src="/images/${w.file}.jpg" alt="" loading="lazy" onerror="this.remove()">
           <video muted loop playsinline preload="none" data-src="${path}"></video>
           <span class="vbadge">${PLAY}</span>`}
    </div>
    <p class="vcap">${w.text}</p>
  </article>`;
};
const grid = document.getElementById('works');
if (grid) {
  const pick = grid.dataset.pick;
  const list = pick ? pick.split(',').map(i => WORKS[+i]) : WORKS;
  grid.innerHTML = list.map(card).join('');
  // Poster images: mark ready once loaded
document.querySelectorAll('.vframe.is-img img').forEach(img => {
  const f = img.closest('.vframe');
  const ok = () => f.classList.add('ready');
  if (img.complete && img.naturalWidth) ok(); else img.addEventListener('load', ok);
});
}

// Lazy-load, auto-play when visible, pause when not
const vio = new IntersectionObserver(entries => {
  entries.forEach(({ target: v, isIntersecting }) => {
    if (isIntersecting) {
      if (!v.getAttribute('src') && v.dataset.src) { v.src = v.dataset.src; v.load(); }
      v.play().catch(() => {});
    } else v.pause();
  });
}, { threshold: 0.35 });

document.querySelectorAll('.vframe video').forEach(v => {
  const f = v.closest('.vframe');
  v.addEventListener('loadeddata', () => f.classList.add('ready'));
  v.addEventListener('error', () => f.classList.remove('ready'));
  vio.observe(v);
});

// Hero video fade-in
document.querySelectorAll('.screen video').forEach(v => {
  v.addEventListener('loadeddata', () => v.closest('.screen').classList.add('ready'));
});

/* ---------- Fullscreen player (video + image) ---------- */
const lb = document.createElement('div');
lb.className = 'lb';
lb.innerHTML = `<button class="lb-x" aria-label="Close"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
  <div class="lb-box"><img class="lb-img" alt=""><video controls playsinline></video><p class="lb-cap"></p></div>`;
document.body.appendChild(lb);

const lv = lb.querySelector('video');
const li = lb.querySelector('.lb-img');
let activeThumb = null;

const closeLb = () => {
  if (!lb.classList.contains('open')) return;
  lb.classList.remove('open', 'img-mode');
  lv.pause();
  lv.removeAttribute('src');
  lv.load();
  li.removeAttribute('src');
  if (activeThumb) {
    activeThumb.muted = true;
    activeThumb.play().catch(() => {});
    activeThumb = null;
  }
};

document.addEventListener('click', e => {
  const f = e.target.closest('.vframe');
  if (!f || !f.classList.contains('ready')) return;
  const c = f.closest('.vcard');
  lb.querySelector('.lb-cap').textContent = c.querySelector('.vcap').textContent;

  if (c.dataset.type === 'img') {
    li.src = f.querySelector('img').currentSrc || f.querySelector('img').src;
    lb.classList.add('open', 'img-mode');
    return;
  }

  activeThumb = f.querySelector('video');
  activeThumb.pause();
  lv.loop = false;
  lv.muted = false;
  lv.src = c.dataset.src;
  lv.currentTime = 0;
  lb.classList.add('open');
  lv.play().catch(() => {});
});

lv.addEventListener('ended', closeLb);
lb.addEventListener('click', e => { if (e.target !== lv && e.target !== li) closeLb(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });


/* ---------- Portfolio filter ---------- */
const chips = document.querySelectorAll('.chip');
chips.forEach(ch => ch.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('on'));
  ch.classList.add('on');
  const f = ch.dataset.filter;
  document.querySelectorAll('.vcard').forEach(c => {
    const show = f === 'all' || c.dataset.cat === f;
    c.classList.toggle('hide', !show);
    if (show) { c.style.animation = 'none'; void c.offsetWidth; c.style.animation = ''; }
  });
}));

/* ---------- Before / After sliders ---------- */
document.querySelectorAll('.ba').forEach(b => {
  const r = b.querySelector('input');
  const upd = () => b.style.setProperty('--pos', r.value + '%');
  r.addEventListener('input', upd); upd();
});

/* ---------- Contact form (Formspree) ---------- */
const FORMSPREE_URL = 'https://formspree.io/f/xyewnzao';   // <- अपना पता यहाँ डालें

const form = document.getElementById('contactForm');
if (form) {
  const status = document.getElementById('formStatus');
  const sendBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';
    status.className = 'form-status';
    status.textContent = '';

    const data = new FormData(form);
    data.append('_subject', 'New enquiry from Exotic AI Lab: ' + data.get('category'));

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.reset();
        status.classList.add('ok');
        status.textContent = 'Thank you! Your message has been sent. We will contact you shortly.';
      } else {
        throw new Error('Request failed');
      }
    } catch (err) {
      status.classList.add('err');
      status.textContent = 'Something went wrong. Please email us directly at ' + EMAIL;
    } finally {
      sendBtn.disabled = false;
      sendBtn.textContent = 'Send Message';
    }
  });
}

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach((en, i) => {
    if (en.isIntersecting) {
      setTimeout(() => en.target.classList.add('show'), i * 100);
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- Before/After videos: silent, continuous loop ---------- */
const baVideos = document.querySelectorAll('.ba-layer video');
const baObs = new IntersectionObserver(entries => {
  entries.forEach(({ target: v, isIntersecting }) => {
    if (isIntersecting) v.play().catch(() => {});
    else v.pause();
  });
}, { threshold: 0.2 });
baVideos.forEach(v => {
  v.muted = true;
  v.loop = true;
  baObs.observe(v);
});

