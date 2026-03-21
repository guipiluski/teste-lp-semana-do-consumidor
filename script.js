const PRODUCTS = [
  {
    id:"laranja-6", name:"Noway Laranja Proteico", qty:"6 unidades",
    badge:{label:"Voltou!",type:"badge-volt"}, featured:false,
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FNowayFresh6Un-%2FNowayFresh6Un-1%2F1529baee29afc3504cd9ed1986e92bcfc358d6c46ed02b5d9880ffe9d1ed879f&w=640&q=75",
    priceFrom:null, priceTo:"R$99,99", priceUnit:"R$16,66/un", discount:null,
    installment:"ou 3x de R$33,33 sem juros",
    reviewScore:"4.9", reviewCount:"127 avaliações",
    pdpUrl:"https://nowayco.com.br/produto/Noway-Laranja-Proteico-6-unidades", ctaLabel:"Ver produto →"
  },
  {
    id:"laranja-12", name:"Noway Laranja Proteico", qty:"12 unidades",
    badge:{label:"Voltou!",type:"badge-volt"}, featured:false,
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FNowayFresh16Un%2FNowayFresh12Un-1%2Fe5427ae361b5038362de0fe592b57d9e028fe8e51b3facf52c7c78a95f10ccf3&w=640&q=75",
    priceFrom:"R$203,98", priceTo:"R$191,40", priceUnit:"R$15,95/un", discount:"6% OFF",
    installment:"ou 3x de R$63,80 sem juros",
    reviewScore:"4.9", reviewCount:"127 avaliações",
    pdpUrl:"https://nowayco.com.br/produto/Noway-Laranja-Proteico-12-unidades", ctaLabel:"Ver produto →"
  },
  {
    id:"laranja-24", name:"Noway Laranja Proteico", qty:"24 unidades",
    badge:{label:"Melhor preço",type:"badge-best"}, featured:false,
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FNowayFresh24Un%2FNowayFresh24Un-1%2F7f8878e2c0003c591aca2ea6d1ec086537d336fe5c36836721fd83b1300e5efe&w=640&q=75",
    priceFrom:"R$407,76", priceTo:"R$370,80", priceUnit:"R$15,45/un", discount:"9% OFF",
    installment:"ou 3x de R$123,60 sem juros",
    reviewScore:"4.9", reviewCount:"127 avaliações",
    pdpUrl:"https://nowayco.com.br/produto/Noway-Laranja-Proteico-24-unidades", ctaLabel:"Ver produto →"
  },
  {
    id:"combo-12", name:"Combo Noway", qty:"6 Pink Lemonade + 6 Laranja",
    badge:{label:"Lançamento",type:"badge-new"}, featured:false,
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FComboNowayP%2FComboNoway%2F5c4763a23322ebe4fe02f080db81ed42e46dbbd0a12c8e2a742ce929e9c9d6be&w=640&q=75",
    priceFrom:null, priceTo:"R$191,40", priceUnit:"R$15,95/un", discount:"6% OFF",
    installment:"ou 3x de R$63,80 sem juros",
    reviewScore:"4.9", reviewCount:"45 avaliações",
    pdpUrl:"https://nowayco.com.br/produto/Combo-Noway:-6-pink-lemonade-Proteico-+-6-Laranja-Proteico", ctaLabel:"Ver produto →"
  },
  {
    id:"pink-6", name:"Pink Lemonade Proteico", qty:"6 unidades",
    badge:{label:"Lançamento",type:"badge-new"}, featured:false,
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FNPL300MLP6UN%2FNPL300ML6UN%2F5dd4fa5a6c96e33923b0777c6211c88d4333422b6111402588aec560bdac7b52&w=640&q=75",
    priceFrom:null, priceTo:"R$99,99", priceUnit:"R$16,99/un", discount:null,
    installment:"ou 3x de R$33,33 sem juros",
    reviewScore:"4.9", reviewCount:"45 avaliações",
    pdpUrl:"https://nowayco.com.br/produto/Pink-Lemonade-Proteico-6-unidades", ctaLabel:"Ver produto →"
  },
  {
    id:"pink-12", name:"Pink Lemonade Proteico", qty:"12 unidades",
    badge:{label:"Lançamento",type:"badge-new"}, featured:false,
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FNPL300MLP12UN%2FNPL300ML12UN%2F8b0409e4e1c9304366fa6db60b8dd74620f9f621d340c478353648d486e34144&w=640&q=75",
    priceFrom:"R$203,98", priceTo:"R$191,40", priceUnit:"R$15,95/un", discount:"6% OFF",
    installment:"ou 3x de R$63,80 sem juros",
    reviewScore:"4.9", reviewCount:"45 avaliações",
    pdpUrl:"https://nowayco.com.br/produto/Pink-Lemonade-Proteico-12-unidades", ctaLabel:"Ver produto →"
  },
  {
    id:"pink-24", name:"Pink Lemonade Proteico", qty:"24 unidades",
    badge:{label:"Lançamento",type:"badge-new"}, featured:false,
    img:"https://nowayco.com.br/_next/image?url=https%3A%2F%2Funbox-customer-images-production.s3.amazonaws.com%2F6Cf3ogEqtTKRqAnHc%2Fproducts%2FNPL300MLP24UN%2FNPL300ML24UN%2Fb5859bef470d3b52b385597957ecd6fac4fb5ebfbab6df58aa6fa042b00af6a2&w=640&q=75",
    priceFrom:"R$407,76", priceTo:"R$370,80", priceUnit:"R$15,45/un", discount:"9% OFF",
    installment:"ou 3x de R$123,60 sem juros",
    reviewScore:"4.9", reviewCount:"45 avaliações",
    pdpUrl:"https://nowayco.com.br/produto/Pink-Lemonade-Proteico-24-unidades", ctaLabel:"Ver produto →"
  }
];
const PROMO_DEADLINE = new Date("2026-03-31T23:59:59");

/* PRODUCTS RENDER: FIX 5 (reviews above title) + FIX 6 (badges in body, not over image) */
function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = PRODUCTS.map(p => `
    <a href="${p.pdpUrl}" class="prod-card ${p.featured ? 'card-featured' : ''}" style="text-decoration:none;color:inherit">
      <div class="prod-card-img">
        <img src="${p.img}" alt="${p.name} ${p.qty}" loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.fontSize='2.5rem';this.parentElement.innerHTML='🧃'" />
      </div>
      <div class="prod-card-body">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;flex-wrap:wrap;min-height:22px">
          ${p.reviewScore
            ? `<div class="review-mini"><span class="stars stars-sm">★★★★★</span><span class="review-score">${p.reviewScore}</span><span class="review-count">(${p.reviewCount})</span></div>`
            : `<div></div>`}
          <span class="badge ${p.badge.type}">${p.badge.label}</span>
        </div>
        <div>
          <div class="prod-name">${p.name}</div>
          <div class="prod-qty-tag">${p.qty}</div>
        </div>
        <div>
          <div class="price-row">
            ${p.priceFrom ? `<span class="price-old">${p.priceFrom}</span>` : ''}
            <span class="price-new">${p.priceTo}</span>
            ${p.discount ? `<span class="badge badge-off">${p.discount}</span>` : ''}
          </div>
          ${p.priceUnit ? `<div style="margin-top:4px"><span class="tag">${p.priceUnit}</span></div>` : ''}
          <div class="price-install">${p.installment}</div>
        </div>
        <span class="prod-cta">${p.ctaLabel}</span>
      </div>
    </a>`).join('');
}
renderProducts();

/* COUNTDOWN: FIX 1+2 */
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