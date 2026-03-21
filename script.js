const PRODUCTS = [
  {
    id:"laranja-24", name:"Noway Laranja Proteico", qty:"24 unidades",
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FNowayFresh24Un%2FNowayFresh24Un-1%2F7f8878e2c0003c591aca2ea6d1ec086537d336fe5c36836721fd83b1300e5efe&w=640&q=75",
    priceFrom:"R$407,76", priceTo:"R$370,80", priceUnit:"R$15,45/un", discount:"9% OFF",
    installment:"ou 3x de R$123,60 sem juros",
    pdpUrl:"https://nowayco.com.br/produto/Noway-Laranja-Proteico-24-unidades", ctaLabel:"Ver produto →"
  },
  {
    id:"laranja-12", name:"Noway Laranja Proteico", qty:"12 unidades",
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FNowayFresh16Un%2FNowayFresh12Un-1%2Fe5427ae361b5038362de0fe592b57d9e028fe8e51b3facf52c7c78a95f10ccf3&w=640&q=75",
    priceFrom:"R$203,98", priceTo:"R$191,40", priceUnit:"R$15,95/un", discount:"6% OFF",
    installment:"ou 3x de R$63,80 sem juros",
    pdpUrl:"https://nowayco.com.br/produto/Noway-Laranja-Proteico-12-unidades", ctaLabel:"Ver produto →"
  },
  {
    id:"laranja-6", name:"Noway Laranja Proteico", qty:"6 unidades",
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FNowayFresh6Un-%2FNowayFresh6Un-1%2F1529baee29afc3504cd9ed1986e92bcfc358d6c46ed02b5d9880ffe9d1ed879f&w=640&q=75",
    priceFrom:null, priceTo:"R$99,99", priceUnit:"R$16,66/un", discount:null,
    installment:"ou 3x de R$33,33 sem juros",
    pdpUrl:"https://nowayco.com.br/produto/Noway-Laranja-Proteico-6-unidades", ctaLabel:"Ver produto →"
  },
  {
    id:"pink-24", name:"Pink Lemonade Proteico", qty:"24 unidades",
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FNPL300MLP24UN%2FNPL300ML24UN%2Fb5859bef470d3b52b385597957ecd6fac4fb5ebfbab6df58aa6fa042b00af6a2&w=640&q=75",
    priceFrom:"R$407,76", priceTo:"R$370,80", priceUnit:"R$15,45/un", discount:"9% OFF",
    installment:"ou 3x de R$123,60 sem juros",
    pdpUrl:"https://nowayco.com.br/produto/Pink-Lemonade-Proteico-24-unidades", ctaLabel:"Ver produto →"
  },
  {
    id:"pink-12", name:"Pink Lemonade Proteico", qty:"12 unidades",
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FNPL300MLP12UN%2FNPL300ML12UN%2F8b0409e4e1c9304366fa6db60b8dd74620f9f621d340c478353648d486e34144&w=640&q=75",
    priceFrom:"R$203,98", priceTo:"R$191,40", priceUnit:"R$15,95/un", discount:"6% OFF",
    installment:"ou 3x de R$63,80 sem juros",
    pdpUrl:"https://nowayco.com.br/produto/Pink-Lemonade-Proteico-12-unidades", ctaLabel:"Ver produto →"
  },
  {
    id:"pink-6", name:"Pink Lemonade Proteico", qty:"6 unidades",
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FNPL300MLP6UN%2FNPL300ML6UN%2F5dd4fa5a6c96e33923b0777c6211c88d4333422b6111402588aec560bdac7b52&w=640&q=75",
    priceFrom:null, priceTo:"R$99,99", priceUnit:"R$16,99/un", discount:null,
    installment:"ou 3x de R$33,33 sem juros",
    pdpUrl:"https://nowayco.com.br/produto/Pink-Lemonade-Proteico-6-unidades", ctaLabel:"Ver produto →"
  },
  {
    id:"combo-12", name:"Combo Noway", qty:"6 Pink Lemonade + 6 Laranja",
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FComboNowayP%2FComboNoway%2F5c4763a23322ebe4fe02f080db81ed42e46dbbd0a12c8e2a742ce929e9c9d6be&w=640&q=75",
    priceFrom:null, priceTo:"R$191,40", priceUnit:"R$15,95/un", discount:"6% OFF",
    installment:"ou 3x de R$63,80 sem juros",
    pdpUrl:"https://nowayco.com.br/produto/Combo-Noway:-6-pink-lemonade-Proteico-+-6-Laranja-Proteico", ctaLabel:"Ver produto →"
  }
];

const UTM = "utm_source=lp-semana-consumidor&utm_medium=product-card&utm_campaign=semana-consumidor-2026";
const PROMO_DEADLINE = new Date("2026-03-31T23:59:59");

function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = PRODUCTS.map((p, idx) => {
    const url = `${p.pdpUrl}?${UTM}&utm_content=${p.id}`;
    /* First card = LCP element: eager + high priority; rest lazy */
    const imgAttrs = idx === 0
      ? 'fetchpriority="high"'
      : 'loading="lazy"';
    return `
    <a href="${url}" class="prod-card" style="text-decoration:none;color:inherit">
      <div class="prod-card-img">
        <img src="${p.img}" alt="${p.name} ${p.qty}" ${imgAttrs} width="400" height="400"
          onerror="this.style.display='none';this.parentElement.style.fontSize='2.5rem';this.parentElement.innerHTML='🧃'" />
      </div>
      <div class="prod-card-body">
        <div class="prod-name-block">
          <div class="prod-name">${p.name}</div>
          <div class="prod-qty-tag">${p.qty}</div>
        </div>
        <div class="prod-price-block">
          <div class="price-row">
            ${p.priceFrom ? `<span class="price-old">${p.priceFrom}</span>` : ''}
            <span class="price-new">${p.priceTo}</span>
          </div>
          <div class="price-install">${p.installment}</div>
        </div>
        <span class="prod-cta">${p.ctaLabel}</span>
      </div>
    </a>`;
  }).join('');
}
renderProducts();

/* COUNTDOWN */
function pad(n){return String(n).padStart(2,'0')}
function updateCountdown(){
  const diff = PROMO_DEADLINE - new Date();
  if(diff <= 0){
    ['b-d','b-h','b-m','b-s'].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent='00'});
    return;
  }
  const d = Math.floor(diff/86400000);
  const h = Math.floor((diff%86400000)/3600000);
  const m = Math.floor((diff%3600000)/60000);
  const s = Math.floor((diff%60000)/1000);
  const bd=document.getElementById('b-d');if(bd)bd.textContent=pad(d);
  const bh=document.getElementById('b-h');if(bh)bh.textContent=pad(h);
  const bm=document.getElementById('b-m');if(bm)bm.textContent=pad(m);
  const bs=document.getElementById('b-s');if(bs)bs.textContent=pad(s);
  const de=document.getElementById('cta-deadline');
  if(de)de.textContent=PROMO_DEADLINE.toLocaleDateString('pt-BR',{day:'2-digit',month:'long'})+'.';
}
updateCountdown();
setInterval(updateCountdown,1000);

/* FAQ */
function toggleAcc(btn){
  const item=btn.closest('.acc-item');
  const open=item.classList.contains('open');
  document.querySelectorAll('.acc-item').forEach(i=>i.classList.remove('open'));
  if(!open)item.classList.add('open');
}

/* UGC CAROUSEL — INFINITE LOOP */
(function () {
  var track = document.querySelector('.ugc-track');
  if (!track) return;

  /* ── 1. Coletar slides originais e clonar ── */
  var origSlides = Array.from(track.querySelectorAll('.ugc-slide'));
  var N = origSlides.length;
  if (N === 0) return;

  /* Clonar antes (prepend) */
  var frag = document.createDocumentFragment();
  origSlides.forEach(function (s) {
    var c = s.cloneNode(true);
    c.dataset.clone = 'before';
    frag.appendChild(c);
  });
  track.insertBefore(frag, track.firstChild);

  /* Clonar depois (append) */
  origSlides.forEach(function (s) {
    var c = s.cloneNode(true);
    c.dataset.clone = 'after';
    track.appendChild(c);
  });

  /* Layout: [N clones-before][N originais][N clones-after] */
  var all = Array.from(track.querySelectorAll('.ugc-slide'));
  var realActive = 0; /* índice real, 0-based dentro dos N originais */
  var busy = false;

  /* PERF: remove poster dos clones → evita carregar 14 imagens extras (~350KB) */
  all.forEach(function (slide) {
    if (slide.dataset.clone) {
      var v = slide.querySelector('video');
      if (v) v.removeAttribute('poster');
    }
  });

  function ri(idx) { return idx % N; }
  function vid(slide) { return slide.querySelector('video'); }
  function isClone(slide) { return !!slide.dataset.clone; }

  /* PERF: cache de posições → evita forced reflow ao ler offsetLeft no scroll */
  var posCache = [];
  function buildPosCache() {
    posCache = all.map(function (s) {
      return { left: s.offsetLeft, width: s.offsetWidth };
    });
  }

  /* Centraliza em slideIndex de `all` sem animação (usa cache) */
  function jumpTo(idx) {
    var pos = posCache[idx];
    if (!pos) return;
    var target = pos.left - track.clientWidth / 2 + pos.width / 2;
    busy = true;
    track.style.scrollSnapType = 'none';
    track.scrollLeft = target;
    requestAnimationFrame(function () {
      track.style.scrollSnapType = '';
      setTimeout(function () { busy = false; }, 80);
    });
  }

  /* Centraliza com scroll suave (usa cache) */
  function smoothTo(idx) {
    var pos = posCache[idx];
    if (!pos) return;
    var target = pos.left - track.clientWidth / 2 + pos.width / 2;
    busy = true;
    track.scrollTo({ left: target, behavior: 'smooth' });
    setTimeout(function () { busy = false; }, 700);
  }

  /* Instância de realIndex mais próxima do centro visível (usa cache) */
  function nearestOf(r) {
    var center = track.scrollLeft + track.clientWidth / 2;
    var best = N + r;
    var bestDist = Infinity;
    [r, N + r, 2 * N + r].forEach(function (i) {
      var pos = posCache[i];
      if (!pos) return;
      var d = Math.abs(pos.left + pos.width / 2 - center);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    return best;
  }

  /* Atualiza classes/vídeos.
     PERF: clones nunca carregam/tocam vídeo → elimina 3x de download (~13MB) */
  function setActive(r, doScroll) {
    realActive = r;
    all.forEach(function (slide, i) {
      var v = vid(slide);
      if (ri(i) === r) {
        slide.classList.add('active');
        /* Somente o original (não clone) carrega e toca */
        if (v && !isClone(slide)) {
          if (v.readyState === 0) v.load();
          v.play().catch(function () {});
        }
      } else {
        slide.classList.remove('active');
        if (v && !isClone(slide)) v.pause();
      }
    });
    if (doScroll !== false) smoothTo(N + r);
  }

  /* ── 2. Click em slide ── */
  all.forEach(function (slide, i) {
    slide.addEventListener('click', function (e) {
      if (e.target.closest('.ugc-mute-btn')) return;
      var r = ri(i);
      if (r === realActive) return;
      var ni = nearestOf(r);
      realActive = r;
      all.forEach(function (s, j) {
        var v = vid(s);
        if (ri(j) === r) {
          s.classList.add('active');
          if (v) { if (v.readyState === 0) v.load(); v.play().catch(function () {}); }
        } else {
          s.classList.remove('active');
          if (v) v.pause();
        }
      });
      busy = true;
      var posNi = posCache[ni];
      var target = posNi.left - track.clientWidth / 2 + posNi.width / 2;
      track.scrollTo({ left: target, behavior: 'smooth' });
      setTimeout(function () { busy = false; }, 700);
    });
  });

  /* ── 3. Mute — sincroniza todas as instâncias ── */
  track.addEventListener('click', function (e) {
    var btn = e.target.closest('.ugc-mute-btn');
    if (!btn) return;
    var parentSlide = btn.closest('.ugc-slide');
    var idx = all.indexOf(parentSlide);
    var r = ri(idx);
    var origVideo = vid(all[N + r]);
    var newMuted = origVideo ? !origVideo.muted : true;
    all.forEach(function (s, j) {
      if (ri(j) !== r) return;
      var v = vid(s);
      if (v) v.muted = newMuted;
      var im = s.querySelector('.ugc-icon-muted');
      var iu = s.querySelector('.ugc-icon-unmuted');
      if (im) im.style.display = newMuted ? '' : 'none';
      if (iu) iu.style.display = newMuted ? 'none' : '';
    });
  });

  /* ── 4. Scroll: detecta centro usando cache (sem forced reflow) ── */
  var scrollTimer;
  track.addEventListener('scroll', function () {
    if (busy) return;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      var center = track.scrollLeft + track.clientWidth / 2;
      var closest = 0, closestDist = Infinity;
      posCache.forEach(function (pos, i) {
        var d = Math.abs(pos.left + pos.width / 2 - center);
        if (d < closestDist) { closestDist = d; closest = i; }
      });
      var r = ri(closest);
      if (r !== realActive) setActive(r, false);
      /* Se está na zona de clone, salta para o original sem animação */
      if (closest < N || closest >= 2 * N) jumpTo(N + r);
    }, 150);
  });

  /* ── 5. Init: build cache (1 batch read), posiciona no primeiro original ── */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      buildPosCache(); /* lê todos offsetLeft de uma vez, antes de qualquer write */
      jumpTo(N);
      setActive(0, false);
    });
  });
})();
