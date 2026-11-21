// =============================================
//  MENU DATA — أسعار بالدينار العراقي + صور حقيقية
// =============================================
const MENU_DATA = {
  pastries: {
    label: 'معجنات',
    icon: 'fas fa-bread-slice',
    items: [
      {
        id: 'p1', name: 'كرواسون زبدة فرنسي', price: 2500,
        desc: 'كرواسون طازج بالزبدة الفرنسية الأصيلة',
        img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&h=400&fit=crop&q=85',
        badge: 'الأكثر طلباً'
      },
      {
        id: 'p2', name: 'بيتزا ميني بالجبن', price: 3500,
        desc: 'عجينة هشة مع جبن موتزاريلا وصوص طماطم',
        img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop&q=85',
        badge: ''
      },
      {
        id: 'p3', name: 'سمبوسك بالجبنة', price: 2000,
        desc: 'سمبوسك مقرمش محشو بالجبنة والزعتر',
        img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=400&fit=crop&q=85',
        badge: ''
      },
      {
        id: 'p4', name: 'خبز الثوم بالجبن', price: 3000,
        desc: 'خبز طري بزبدة الثوم والجبن المذاب',
        img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=500&h=400&fit=crop&q=85',
        badge: 'جديد'
      },
      {
        id: 'p5', name: 'فطيرة دجاج', price: 4000,
        desc: 'فطيرة ذهبية محشوة بالدجاج والخضار',
        img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&h=400&fit=crop&q=85',
        badge: ''
      },
      {
        id: 'p6', name: 'مافن الجبنة والأعشاب', price: 2500,
        desc: 'مافن مالح بالجبن والأعشاب الإيطالية',
        img: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500&h=400&fit=crop&q=85',
        badge: ''
      },
    ]
  },
  oriental: {
    label: 'حلويات شرقية',
    icon: 'fas fa-moon',
    items: [
      {
        id: 'o1', name: 'كنافة بالقشطة', price: 5000,
        desc: 'كنافة ناعمة بالقشطة والقطر العثماني',
        img: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=500&h=400&fit=crop&q=85',
        badge: 'الأكثر طلباً'
      },
      {
        id: 'o2', name: 'بقلاوة مشكلة', price: 7500,
        desc: 'تشكيلة بقلاوة بالفستق والجوز',
        img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500&h=400&fit=crop&q=85',
        badge: ''
      },
      {
        id: 'o3', name: 'عوامة بالعسل', price: 3000,
        desc: 'عوامة ذهبية مقلية بالعسل والسمسم',
        img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&h=400&fit=crop&q=85',
        badge: 'مفضل'
      },
      {
        id: 'o4', name: 'قطايف بالجوز', price: 4500,
        desc: 'قطايف مقلية محشوة بالجوز وشراب السكر',
        img: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=500&h=400&fit=crop&q=85',
        badge: ''
      },
      {
        id: 'o5', name: 'مهلبية بالورد', price: 3500,
        desc: 'مهلبية ناعمة بماء الورد والفستق',
        img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=400&fit=crop&q=85',
        badge: ''
      },
      {
        id: 'o6', name: 'حلاوة الجبن', price: 4500,
        desc: 'حلاوة شامية بالجبن الأبيض والقطر',
        img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=400&fit=crop&q=85',
        badge: 'جديد'
      },
    ]
  },
  western: {
    label: 'حلويات غربية',
    icon: 'fas fa-birthday-cake',
    items: [
      {
        id: 'w1', name: 'تشيز كيك نيويورك', price: 9000,
        desc: 'تشيز كيك كريمي أصيل بصوص التوت',
        img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=400&fit=crop&q=85',
        badge: 'مميز'
      },
      {
        id: 'w2', name: 'براونيز شوكولاته', price: 5000,
        desc: 'براونيز فاخرة بالشوكولاته الداكنة والجوز',
        img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=400&fit=crop&q=85',
        badge: 'الأكثر طلباً'
      },
      {
        id: 'w3', name: 'ماكرون فرنسي', price: 7000,
        desc: 'ماكرون ملون بنكهات متنوعة كلاسيكية',
        img: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500&h=400&fit=crop&q=85',
        badge: ''
      },
      {
        id: 'w4', name: 'تيراميسو إيطالي', price: 8000,
        desc: 'تيراميسو أصيل بالقهوة والماسكاربوني',
        img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=400&fit=crop&q=85',
        badge: 'جديد'
      },
      {
        id: 'w5', name: 'كب كيك مزخرف', price: 4000,
        desc: 'كب كيك بكريمة الزبدة وزخارف يدوية',
        img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500&h=400&fit=crop&q=85',
        badge: ''
      },
      {
        id: 'w6', name: 'كريب نوتيلا', price: 4500,
        desc: 'كريب طري بالنوتيلا والموز والقشطة',
        img: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=500&h=400&fit=crop&q=85',
        badge: 'مفضل'
      },
      {
        id: 'w7', name: 'وافل بلجيكي', price: 5500,
        desc: 'وافل هش بالقشطة والفراولة والعسل',
        img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&h=400&fit=crop&q=85',
        badge: ''
      },
    ]
  },
  drinks: {
    label: 'مشروبات',
    icon: 'fas fa-coffee',
    items: [
      {
        id: 'd1', name: 'قهوة كابتشينو', price: 3000,
        desc: 'كابتشينو إيطالي بالحليب المخفوق',
        img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&h=400&fit=crop&q=85',
        badge: ''
      },
      {
        id: 'd2', name: 'لاتيه بالفانيلا', price: 3500,
        desc: 'لاتيه دافئ بشراب الفانيلا الفاخر',
        img: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500&h=400&fit=crop&q=85',
        badge: 'مفضل'
      },
      {
        id: 'd3', name: 'عصير توت طازج', price: 4000,
        desc: 'مزيج توت العليق والفراولة الطازجة',
        img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=500&h=400&fit=crop&q=85',
        badge: ''
      },
      {
        id: 'd4', name: 'شوكولاته ساخنة', price: 3500,
        desc: 'شوكولاته دافئة كريمية بالقشطة المخفوقة',
        img: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=500&h=400&fit=crop&q=85',
        badge: 'جديد'
      },
      {
        id: 'd5', name: 'عصير مانجو', price: 3500,
        desc: 'مانجو طازج مع الليمون والنعناع',
        img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&h=400&fit=crop&q=85',
        badge: ''
      },
    ]
  }
};

// =============================================
//  STATE
// =============================================
let currentTheme  = 'orange';
let currentLayout = 'cards';
let currentCat    = 'all';
let showPrices    = true;
let showDesc      = true;
let isDark        = false;
let menuData      = JSON.parse(JSON.stringify(MENU_DATA));

// =============================================
//  ADMIN PASSWORD (يمكن تغييرها هنا)
// =============================================
const ADMIN_PASSWORD = '1234';
let holdTimer = null;
let holdStarted = false;

// =============================================
//  HOLD-TO-OPEN LOGIC (ضغط 3 ثوان على الاسم)
// =============================================
function startHoldTimer(e) {
  e.preventDefault();
  if (holdStarted) return;
  holdStarted = true;

  const ring = document.getElementById('holdRing');
  // بناء SVG
  ring.innerHTML = `<svg width="120" height="120" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="24" />
  </svg>`;
  ring.classList.add('holding');

  // تأخير بسيط ثم ابدأ الأنيميشن
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { ring.classList.add('go'); });
  });

  holdTimer = setTimeout(() => {
    ring.classList.remove('holding','go');
    ring.innerHTML = '';
    holdStarted = false;
    openLoginModal();
  }, 3000);
}

function clearHoldTimer() {
  if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
  holdStarted = false;
  const ring = document.getElementById('holdRing');
  if (ring) {
    ring.classList.remove('holding','go');
    ring.innerHTML = '';
  }
}

// =============================================
//  LOGIN MODAL
// =============================================
function openLoginModal() {
  document.getElementById('adminLoginModal').classList.remove('hidden');
  document.getElementById('adminPassInput').value = '';
  document.getElementById('loginError').classList.add('hidden');
  setTimeout(() => document.getElementById('adminPassInput').focus(), 100);
}

function closeLoginModal() {
  document.getElementById('adminLoginModal').classList.add('hidden');
}

function checkAdminPass() {
  const val = document.getElementById('adminPassInput').value;
  if (val === ADMIN_PASSWORD) {
    closeLoginModal();
    openAdmin();
  } else {
    const err = document.getElementById('loginError');
    err.classList.remove('hidden');
    err.style.animation = 'none';
    requestAnimationFrame(() => { err.style.animation = ''; });
    document.getElementById('adminPassInput').value = '';
    document.getElementById('adminPassInput').focus();
  }
}

function togglePassVis() {
  const inp = document.getElementById('adminPassInput');
  const icon = document.getElementById('eyeIcon');
  if (inp.type === 'password') {
    inp.type = 'text';
    icon.className = 'fas fa-eye-slash';
  } else {
    inp.type = 'password';
    icon.className = 'fas fa-eye';
  }
}

// =============================================
//  ADMIN TABS
// =============================================
function switchTab(tab, el) {
  document.querySelectorAll('.atab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
  if (tab === 'items') renderEditList();
}

// =============================================
//  EDIT ITEMS LIST (تعديل الأصناف الحالية)
// =============================================
function renderEditList() {
  const cat = document.getElementById('editCatSelect').value;
  const container = document.getElementById('editItemsList');
  container.innerHTML = '';

  menuData[cat].items.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'edit-item-card';
    card.id = `eic-${item.id}`;

    const thumb = item.img
      ? `<img src="${item.img}" class="edit-item-thumb" onerror="this.style.display='none'" />`
      : `<div class="edit-item-thumb-emoji">${item.emoji || '🍰'}</div>`;

    card.innerHTML = `
      <div class="edit-item-header" onclick="toggleEditBody('${item.id}')">
        ${thumb}
        <span class="edit-item-name">${item.name}</span>
        <span class="edit-item-price">${formatPrice(item.price)}</span>
        <span class="edit-item-toggle"><i class="fas fa-chevron-down"></i></span>
      </div>
      <div class="edit-item-body" id="ebody-${item.id}">
        <div class="form-group">
          <label>الاسم</label>
          <input type="text" id="ename-${item.id}" value="${item.name}" />
        </div>
        <div class="form-group">
          <label>السعر (دينار)</label>
          <input type="number" id="eprice-${item.id}" value="${item.price}" />
        </div>
        <div class="form-group">
          <label>الوصف</label>
          <input type="text" id="edesc-${item.id}" value="${item.desc}" />
        </div>
        <div class="form-group">
          <label>الصورة</label>
          <div class="img-picker" id="epicker-${item.id}">
            <div class="img-preview-wrap" id="eprev-${item.id}">
              ${item.img
                ? `<img src="${item.img}" class="img-preview-thumb" />`
                : `<div class="img-preview-empty"><i class="fas fa-image"></i></div>`
              }
            </div>
            <div class="img-picker-btns">
              <label class="img-btn-gallery" title="اختر من المعرض">
                <i class="fas fa-photo-film"></i> من المعرض
                <input type="file" accept="image/*" style="display:none"
                  onchange="handleImgFile(event,'${item.id}')" />
              </label>
              <button class="img-btn-url" onclick="promptImgUrl('${item.id}')">
                <i class="fas fa-link"></i> رابط
              </button>
              <button class="img-btn-clear" onclick="clearImg('${item.id}')" title="حذف الصورة">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
          <input type="hidden" id="eimg-${item.id}" value="${item.img || ''}" />
        </div>
        <div class="edit-item-actions">
          <button class="btn-save" onclick="saveItem('${cat}','${item.id}')">
            <i class="fas fa-check"></i> حفظ
          </button>
          <button class="btn-delete" onclick="deleteItem('${cat}','${item.id}')">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  if (!menuData[cat].items.length) {
    container.innerHTML = '<p style="text-align:center;color:var(--text-light);padding:20px;font-size:.85rem;">لا توجد أصناف في هذه الفئة</p>';
  }
}

function toggleEditBody(id) {
  const body = document.getElementById('ebody-' + id);
  const isOpen = body.classList.contains('open');
  document.querySelectorAll('.edit-item-body').forEach(b => b.classList.remove('open'));
  if (!isOpen) body.classList.add('open');
}

function saveItem(cat, id) {
  const item = menuData[cat].items.find(i => i.id === id);
  if (!item) return;
  item.name  = document.getElementById('ename-'  + id).value.trim() || item.name;
  item.price = parseInt(document.getElementById('eprice-' + id).value) || item.price;
  item.desc  = document.getElementById('edesc-'  + id).value.trim();
  const imgVal = document.getElementById('eimg-' + id).value.trim();
  item.img   = imgVal || null;
  renderMenu();
  renderEditList();
  showToast(`تم حفظ "${item.name}" ✓`);
}

// =============================================
//  IMAGE PICKER HELPERS
// =============================================
function handleImgFile(event, id) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    document.getElementById('eimg-' + id).value = dataUrl;
    updateImgPreview(id, dataUrl);
  };
  reader.readAsDataURL(file);
}

function handleNewImgFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    document.getElementById('newItemImg').value = dataUrl;
    updateNewImgPreview(dataUrl);
  };
  reader.readAsDataURL(file);
}

function promptImgUrl(id) {
  const url = prompt('أدخل رابط الصورة:', document.getElementById('eimg-' + id).value);
  if (url === null) return;
  document.getElementById('eimg-' + id).value = url;
  updateImgPreview(id, url);
}

function promptNewImgUrl() {
  const url = prompt('أدخل رابط الصورة:', document.getElementById('newItemImg').value);
  if (url === null) return;
  document.getElementById('newItemImg').value = url;
  updateNewImgPreview(url);
}

function clearImg(id) {
  document.getElementById('eimg-' + id).value = '';
  updateImgPreview(id, '');
}

function clearNewImg() {
  document.getElementById('newItemImg').value = '';
  updateNewImgPreview('');
}

function updateImgPreview(id, src) {
  const wrap = document.getElementById('eprev-' + id);
  if (!wrap) return;
  if (src) {
    wrap.innerHTML = `<img src="${src}" class="img-preview-thumb"
      onerror="this.parentElement.innerHTML='<div class=\\"img-preview-empty\\"><i class=\\"fas fa-exclamation-triangle\\"></i></div>'" />`;
  } else {
    wrap.innerHTML = `<div class="img-preview-empty"><i class="fas fa-image"></i></div>`;
  }
}

function updateNewImgPreview(src) {
  const wrap = document.getElementById('newImgPreview');
  if (!wrap) return;
  if (src) {
    wrap.innerHTML = `<img src="${src}" class="img-preview-thumb"
      onerror="this.parentElement.innerHTML='<div class=\\"img-preview-empty\\"><i class=\\"fas fa-exclamation-triangle\\"></i></div>'" />`;
  } else {
    wrap.innerHTML = `<div class="img-preview-empty"><i class="fas fa-image"></i></div>`;
  }
}

function deleteItem(cat, id) {
  const item = menuData[cat].items.find(i => i.id === id);
  if (!item) return;
  if (!confirm(`هل تريد حذف "${item.name}"؟`)) return;
  menuData[cat].items = menuData[cat].items.filter(i => i.id !== id);
  renderMenu();
  renderEditList();
  showToast(`تم حذف "${item.name}"`);
}

// =============================================
//  LOGOUT
// =============================================
function logoutAdmin() {
  closeAdmin();
  showToast('تم تسجيل الخروج');
}

// =============================================
//  HERO BACKGROUNDS
// =============================================
const BG_IMAGES = [
  'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1400&h=600&fit=crop&q=85', // croissant
  'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1400&h=600&fit=crop&q=85', // cupcakes
  'https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=1400&h=600&fit=crop&q=85', // kunafa
  'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=1400&h=600&fit=crop&q=85', // macarons
  'https://images.unsplash.com/photo-1534778101976-62847782c213?w=1400&h=600&fit=crop&q=85', // coffee
  'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=1400&h=600&fit=crop&q=85', // waffle
];

const HERO_STYLES = ['cinematic', 'glass', 'split'];
let currentHeroStyle = 'cinematic';
let currentBgIndex   = 0;

function initHero() {
  setBgImg(0, document.querySelector('.bg-img-btn[data-bg="0"]'));
  setHeroStyle('cinematic', document.querySelector('.hero-style-btn[data-hs="cinematic"]'));
}

function setBgImg(idx, el) {
  currentBgIndex = idx;
  const layer = document.getElementById('heroImgLayer');
  if (layer) layer.style.backgroundImage = `url('${BG_IMAGES[idx]}')`;
  document.querySelectorAll('.bg-img-btn').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
}

function setHeroStyle(style, el) {
  currentHeroStyle = style;
  document.getElementById('hero').dataset.heroStyle = style;
  document.querySelectorAll('.hero-style-btn').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  syncHeroTitles();
}

function cycleHeroStyle() {
  const idx  = HERO_STYLES.indexOf(currentHeroStyle);
  const next = HERO_STYLES[(idx + 1) % HERO_STYLES.length];
  setHeroStyle(next, document.querySelector(`.hero-style-btn[data-hs="${next}"]`));
  // إشارة بصرية
  const btn = document.getElementById('heroStyleBtn');
  btn.style.transform = 'scale(1.4) rotate(20deg)';
  setTimeout(() => { btn.style.transform = ''; }, 300);
}

// مزامنة الاسم والشعار في كل النماذج
function syncHeroTitles() {
  const name    = document.getElementById('shopName')?.value    || 'دار الحلويات';
  const tagline = document.getElementById('shopTagline')?.value || 'أرقى المعجنات والحلويات الشرقية والغربية';
  const phone   = document.getElementById('shopPhone')?.value   || '+964 770 000 0000';

  ['heroTitle','heroTitle2','heroTitle3'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    // احفظ holdRing قبل المسح
    const ring = el.querySelector('#holdRing');
    // امسح كل المحتوى
    el.textContent = name;
    // أعِد holdRing إذا كان في العنصر الأول فقط
    if (ring) el.appendChild(ring);
  });
  ['heroTagline','heroTagline2','heroTagline3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = tagline;
  });
  const ph3 = document.getElementById('heroPhone3');
  if (ph3) ph3.innerHTML = `<i class="fas fa-phone"></i> ${phone}`;
}

// =============================================
//  3D TILT ON CARDS
// =============================================
function init3DTilt() {
  document.getElementById('menuGrid').addEventListener('mousemove', (e) => {
    const card = e.target.closest('.menu-card');
    if (!card) return;
    if (currentLayout !== 'cards' && currentLayout !== 'elegant') return;
    const rect  = card.getBoundingClientRect();
    const cx    = rect.left + rect.width  / 2;
    const cy    = rect.top  + rect.height / 2;
    const dx    = (e.clientX - cx) / (rect.width  / 2);
    const dy    = (e.clientY - cy) / (rect.height / 2);
    card.style.transform = `perspective(600px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg) translateZ(6px)`;
  });
  document.getElementById('menuGrid').addEventListener('mouseleave', (e) => {
    const card = e.target.closest('.menu-card');
    if (card) card.style.transform = '';
  }, true);
  document.getElementById('menuGrid').addEventListener('mouseleave', () => {
    document.querySelectorAll('.menu-card').forEach(c => c.style.transform = '');
  });
}

const LAYOUTS = ['cards', 'list', 'elegant', 'minimal'];
const LAYOUT_ICONS = {
  cards:   'fa-th-large',
  list:    'fa-list',
  elegant: 'fa-crown',
  minimal: 'fa-minus'
};

// تنسيق السعر بالدينار العراقي
function formatPrice(price) {
  return price.toLocaleString('ar-IQ') + ' د.ع';
}

// =============================================
//  RENDER
// =============================================
function renderMenu() {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';

  const categoriesToShow = currentCat === 'all'
    ? Object.keys(menuData)
    : [currentCat];

  categoriesToShow.forEach(catKey => {
    const cat = menuData[catKey];
    if (!cat || !cat.items.length) return;

    // Section header
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `
      <div class="section-icon"><i class="${cat.icon}"></i></div>
      <h2 class="section-title">${cat.label}</h2>
      <div class="section-line"></div>
    `;
    grid.appendChild(header);

    // Items
    cat.items.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.style.animationDelay = `${idx * 0.06}s`;
      card.dataset.cat = catKey;

      const priceDisplay = showPrices
        ? `<span class="card-price">${formatPrice(item.price)}</span>`
        : '';
      const badgeDisplay = item.badge
        ? `<span class="card-badge">${item.badge}</span>`
        : '';
      const descDisplay = showDesc
        ? `<p class="card-desc">${item.desc}</p>`
        : '';

      // الصورة — إذا كانت موجودة نستخدمها، وإلا نعرض إيموجي
      const imgContent = item.img
        ? `<img src="${item.img}" alt="${item.name}" class="card-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
           <div class="card-emoji-fallback" style="display:none">${item.emoji || '🍰'}</div>`
        : `<div class="card-emoji-fallback">${item.emoji || '🍰'}</div>`;

      card.innerHTML = `
        <div class="card-media">${imgContent}</div>
        <div class="card-body">
          <h3 class="card-name">${item.name}</h3>
          ${descDisplay}
          <div class="card-footer">
            ${priceDisplay}
            ${badgeDisplay}
          </div>
          <button class="add-to-cart-btn" onclick="addToCart('${catKey}','${item.id}',event)">
            <i class="fas fa-plus"></i> أضف للسلة
          </button>
        </div>
      `;
      grid.appendChild(card);
    });
  });
}

// =============================================
//  THEME
// =============================================
function setTheme(theme) {
  currentTheme = theme;
  document.body.dataset.theme = theme;
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
}

// =============================================
//  LAYOUT
// =============================================
function setLayout(layout) {
  currentLayout = layout;
  document.body.dataset.layout = layout;
  document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.layout === layout);
  });
  const cycleBtn = document.getElementById('layoutCycleBtn');
  if (cycleBtn) cycleBtn.innerHTML = `<i class="fas ${LAYOUT_ICONS[layout]}"></i>`;
  renderMenu();
}

function cycleLayout() {
  const idx = LAYOUTS.indexOf(currentLayout);
  setLayout(LAYOUTS[(idx + 1) % LAYOUTS.length]);
  const btn = document.getElementById('layoutCycleBtn');
  btn.style.transform = 'scale(1.3)';
  setTimeout(() => { btn.style.transform = ''; }, 200);
}

// =============================================
//  CATEGORY FILTER
// =============================================
function filterCategory(cat, el) {
  currentCat = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderMenu();
  document.getElementById('menuMain').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// =============================================
//  ADMIN PANEL
// =============================================
function openAdmin() {
  document.getElementById('adminPanel').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  // دائماً ابدأ من تبويب عام
  switchTab('general', document.querySelector('.atab[data-tab="general"]'));
}

function closeAdmin() {
  document.getElementById('adminPanel').classList.add('hidden');
  document.body.style.overflow = '';
}

// =============================================
//  SHOP INFO
// =============================================
function updateShopInfo() {
  const name    = document.getElementById('shopName').value    || 'دار الحلويات';
  const tagline = document.getElementById('shopTagline').value || '';
  const phone   = document.getElementById('shopPhone').value   || '';
  document.getElementById('footerName').textContent  = name;
  document.getElementById('footerPhone').textContent = phone;
  syncHeroTitles();
}

// =============================================
//  ADD ITEM
// =============================================
function addItem() {
  const cat    = document.getElementById('newCategory').value;
  const name   = document.getElementById('newItemName').value.trim();
  const price  = parseInt(document.getElementById('newItemPrice').value) || 0;
  const desc   = document.getElementById('newItemDesc').value.trim();
  const emoji  = document.getElementById('newItemEmoji').value.trim() || '✨';
  const imgUrl = document.getElementById('newItemImg').value.trim();
  const badge  = document.getElementById('newItemBadge').value;

  if (!name) { alert('يرجى إدخال اسم الصنف'); return; }

  menuData[cat].items.unshift({
    id: 'custom_' + Date.now(),
    name, price, desc, emoji,
    img: imgUrl || null,
    badge
  });
  renderMenu();

  ['newItemName','newItemPrice','newItemDesc','newItemEmoji','newItemImg'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('newItemBadge').value = '';
  updateNewImgPreview('');
  showToast(`تمت إضافة "${name}" بنجاح ✓`);
}

// =============================================
//  TOGGLES
// =============================================
function togglePrices() {
  showPrices = document.getElementById('showPrices').checked;
  renderMenu();
}
function toggleDesc() {
  showDesc = document.getElementById('showDesc').checked;
  renderMenu();
}
function toggleDark() {
  isDark = document.getElementById('darkMode').checked;
  document.body.classList.toggle('dark-mode', isDark);
}

// =============================================
//  TOAST
// =============================================
function showToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed;bottom:30px;left:50%;transform:translateX(-50%);
    background:linear-gradient(135deg,var(--p1),var(--p2));
    color:#fff;padding:12px 28px;border-radius:50px;
    font-family:'Tajawal',sans-serif;font-size:.95rem;font-weight:600;
    box-shadow:0 8px 24px var(--shadow);z-index:9999;
    animation:slideUp .4s ease;
  `;
  const style = document.createElement('style');
  style.textContent = `@keyframes slideUp{from{opacity:0;transform:translate(-50%,20px)}to{opacity:1;transform:translate(-50%,0)}}`;
  document.head.appendChild(style);
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => { toast.remove(); style.remove(); }, 2800);
}

// =============================================
//  INIT
// =============================================
// =============================================
//  CART SYSTEM
// =============================================
let cart = []; // [{id, catKey, name, price, img, emoji, qty}]

function addToCart(catKey, itemId, e) {
  // تأثير بصري على البطاقة
  const btn = e.currentTarget;
  btn.classList.add('adding');
  setTimeout(() => btn.classList.remove('adding'), 600);

  const item = menuData[catKey]?.items.find(i => i.id === itemId);
  if (!item) return;

  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: itemId, catKey, name: item.name, price: item.price,
      img: item.img || null, emoji: item.emoji || '🍰', qty: 1 });
  }
  updateCartUI();
  showToast(`✓ أضيف: ${item.name}`);
}

function removeFromCart(itemId) {
  cart = cart.filter(c => c.id !== itemId);
  updateCartUI();
  renderCartItems();
}

function changeQty(itemId, delta) {
  const item = cart.find(c => c.id === itemId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(itemId); return; }
  updateCartUI();
  renderCartItems();
}

function clearCart() {
  if (!cart.length) return;
  if (!confirm('هل تريد مسح السلة؟')) return;
  cart = [];
  updateCartUI();
  renderCartItems();
}

function getCartTotal() {
  return cart.reduce((s, c) => s + c.price * c.qty, 0);
}
function getCartCount() {
  return cart.reduce((s, c) => s + c.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  const total = getCartTotal();
  const fab   = document.getElementById('cartFab');
  const badge = document.getElementById('cartFabCount');
  const ftotal= document.getElementById('cartFabTotal');

  fab.style.display = count > 0 ? 'flex' : 'none';
  badge.textContent = count;
  ftotal.textContent = formatPrice(total);

  // تحديث عداد على أزرار البطاقات
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    const card = btn.closest('.menu-card');
    const cat  = card?.dataset.cat;
    if (!cat) return;
    // extract itemId from onclick
    const match = btn.getAttribute('onclick').match(/'([^']+)','([^']+)'/);
    if (!match) return;
    const id = match[2];
    const inCart = cart.find(c => c.id === id);
    if (inCart) {
      btn.innerHTML = `<i class="fas fa-check"></i> في السلة (${inCart.qty})`;
      btn.classList.add('in-cart');
    } else {
      btn.innerHTML = `<i class="fas fa-plus"></i> أضف للسلة`;
      btn.classList.remove('in-cart');
    }
  });
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const empty     = document.getElementById('cartEmpty');
  const summary   = document.getElementById('cartSummary');

  if (!cart.length) {
    empty.style.display   = 'flex';
    summary.style.display = 'none';
    container.querySelectorAll('.cart-item').forEach(el => el.remove());
    return;
  }
  empty.style.display   = 'none';
  summary.style.display = 'block';

  // إعادة البناء
  container.querySelectorAll('.cart-item').forEach(el => el.remove());
  cart.forEach(c => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.id = `ci-${c.id}`;
    const thumb = c.img
      ? `<img src="${c.img}" class="ci-thumb" onerror="this.style.display='none'" />`
      : `<div class="ci-emoji">${c.emoji}</div>`;
    el.innerHTML = `
      ${thumb}
      <div class="ci-info">
        <span class="ci-name">${c.name}</span>
        <span class="ci-unit">${formatPrice(c.price)} / حبة</span>
      </div>
      <div class="ci-qty">
        <button onclick="changeQty('${c.id}',-1)"><i class="fas fa-minus"></i></button>
        <span>${c.qty}</span>
        <button onclick="changeQty('${c.id}',1)"><i class="fas fa-plus"></i></button>
      </div>
      <div class="ci-total">${formatPrice(c.price * c.qty)}</div>
      <button class="ci-del" onclick="removeFromCart('${c.id}')"><i class="fas fa-times"></i></button>
    `;
    container.appendChild(el);
  });

  // ملخص الأسعار
  const subtotal = getCartTotal();
  document.getElementById('subtotalVal').textContent = formatPrice(subtotal);
  document.getElementById('totalVal').textContent    = formatPrice(subtotal);
  document.getElementById('discountRow').style.display = 'none';
}

// =============================================
//  CART OPEN / CLOSE
// =============================================
function openCart() {
  renderCartItems();
  document.getElementById('cartDrawer').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer').classList.add('hidden');
  document.body.style.overflow = '';
}

// =============================================
//  PRINT ORDER — نافذة طباعة منفصلة
// =============================================
function printOrder() {
  if (!cart.length) return;

  const shopName = document.getElementById('shopName')?.value    || 'دار الحلويات';
  const tagline  = document.getElementById('shopTagline')?.value || 'أرقى المعجنات والحلويات';
  const phone    = document.getElementById('shopPhone')?.value   || '';
  const customer = document.getElementById('customerName')?.value.trim() || '';
  const table    = document.getElementById('tableNumber')?.value.trim()  || '';
  const note     = document.getElementById('orderNote')?.value.trim()    || '';
  const now      = new Date().toLocaleString('ar-IQ', {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });

  // بناء بنود الطلب
  let itemsHTML = '';
  cart.forEach(c => {
    itemsHTML += `
      <tr>
        <td class="td-name">${c.name}</td>
        <td class="td-qty">× ${c.qty}</td>
        <td class="td-price">${formatPrice(c.price * c.qty)}</td>
      </tr>`;
  });

  const subtotal = getCartTotal();

  // معلومات اختيارية
  const metaRows = [
    customer ? `<tr><td>الزبون</td><td>${customer}</td></tr>` : '',
    table    ? `<tr><td>الطاولة</td><td>${table}</td></tr>`   : '',
    note     ? `<tr><td>ملاحظة</td><td>${note}</td></tr>`     : '',
    `<tr><td>الوقت</td><td>${now}</td></tr>`,
  ].join('');

  const receiptHTML = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8"/>
  <title>فاتورة - ${shopName}</title>
  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;800&display=swap" rel="stylesheet"/>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      font-family: 'Tajawal', Arial, sans-serif;
      font-size: 13px; color: #000;
      background: #fff; direction: rtl;
      width: 80mm; margin: 0 auto; padding: 8px;
    }
    .header { text-align: center; margin-bottom: 10px; }
    .logo { font-size: 2rem; }
    .shop-name { font-size: 1.3rem; font-weight: 800; margin: 4px 0 2px; }
    .tagline { font-size: .75rem; color: #555; }
    .divider {
      border: none; border-top: 1px dashed #999;
      margin: 8px 0;
    }
    .divider-double {
      border: none; border-top: 2px solid #000;
      margin: 8px 0;
    }
    .meta-table { width: 100%; border-collapse: collapse; margin: 6px 0; }
    .meta-table td { padding: 2px 0; font-size: .78rem; }
    .meta-table td:first-child { color: #666; width: 30%; }
    .meta-table td:last-child  { font-weight: 600; }
    .items-table { width: 100%; border-collapse: collapse; margin: 6px 0; }
    .items-table th {
      font-size: .75rem; color: #555; padding: 3px 0;
      border-bottom: 1px solid #ccc; text-align: right;
    }
    .items-table .th-price { text-align: left; }
    .items-table td { padding: 5px 0; vertical-align: middle; }
    .td-name  { font-size: .88rem; font-weight: 600; }
    .td-qty   { font-size: .78rem; color: #666; text-align: center; width: 30px; }
    .td-price { font-size: .88rem; font-weight: 800; text-align: left; white-space: nowrap; }
    .items-table tr + tr td { border-top: 1px dashed #eee; }
    .totals { width: 100%; border-collapse: collapse; margin-top: 4px; }
    .totals td { padding: 3px 0; font-size: .88rem; }
    .totals td:last-child { text-align: left; font-weight: 700; }
    .totals .grand td {
      font-size: 1.05rem; font-weight: 800;
      border-top: 2px solid #000; padding-top: 5px;
    }
    .footer {
      text-align: center; margin-top: 12px;
      font-size: .78rem; color: #666;
      line-height: 1.6;
    }
    @media print {
      body { width: 100%; margin: 0; padding: 4px; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">🍰</div>
    <div class="shop-name">${shopName}</div>
    <div class="tagline">${tagline}</div>
  </div>

  <hr class="divider"/>

  <table class="meta-table">${metaRows}</table>

  <hr class="divider"/>

  <table class="items-table">
    <thead>
      <tr>
        <th>الصنف</th>
        <th style="text-align:center">الكمية</th>
        <th class="th-price">المبلغ</th>
      </tr>
    </thead>
    <tbody>${itemsHTML}</tbody>
  </table>

  <hr class="divider"/>

  <table class="totals">
    <tr><td>المجموع الفرعي</td><td>${formatPrice(subtotal)}</td></tr>
    <tr class="grand"><td>الإجمالي</td><td>${formatPrice(subtotal)}</td></tr>
  </table>

  <hr class="divider-double"/>

  <div class="footer">
    <p>شكراً لزيارتكم 🌸</p>
    ${phone ? `<p>${phone}</p>` : ''}
  </div>

  <script>
    window.onload = function() { window.print(); };
  <\/script>
</body>
</html>`;

  // طباعة عبر iframe مخفي — الزبون يبقى في الصفحة الرئيسية
  let iframe = document.getElementById('printFrame');
  if (iframe) iframe.remove();

  iframe = document.createElement('iframe');
  iframe.id = 'printFrame';
  iframe.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;border:none;opacity:0;';
  document.body.appendChild(iframe);

  const idoc = iframe.contentDocument || iframe.contentWindow.document;
  idoc.open();
  idoc.write(receiptHTML);
  idoc.close();

  iframe.onload = () => {
    setTimeout(() => {
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } catch(e) { window.print(); }
    }, 350);
  };
}

function closeReceipt() {
  document.getElementById('printPage').classList.add('hidden');
  document.body.style.overflow = '';
}

// =============================================
//  INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  initHero();
  init3DTilt();
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('catNav');
    nav.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px var(--shadow)'
      : '0 2px 20px var(--shadow)';
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAdmin();
    if (e.key === 't' || e.key === 'T') {
      const themes = ['orange','rose','emerald','royal','mocha','midnight'];
      const idx = themes.indexOf(currentTheme);
      setTheme(themes[(idx + 1) % themes.length]);
    }
    if (e.key === 'l' || e.key === 'L') cycleLayout();
  });
});
