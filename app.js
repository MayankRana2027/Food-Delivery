const $ = (id) => document.getElementById(id);
const CAP = 2000;
const BAR = 2500;

function rupees(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

const U = "https://images.unsplash.com/";
const Q = "?q=80&w=900&auto=format&fit=crop";
const FOODS = [
  { id: "f1",  name: "Margherita Pizza",       price: 995,  calories: 780,  category: "Pizza",    healthType: "junk",    tags: ["high-protein"],              weatherFit: ["moderate","rainy","cold"],        moodFit: ["happy","lazy"],              i: U+"photo-1513104890138-7c749659a591"+Q },
  { id: "f2",  name: "Chicken Burger",          price: 705,  calories: 640,  category: "Burger",   healthType: "junk",    tags: ["high-protein"],              weatherFit: ["hot","moderate"],                 moodFit: ["stressed","lazy","happy"],   i: U+"photo-1568901346375-23c9450c58cd"+Q },
  { id: "f3",  name: "Quinoa Power Bowl",       price: 851,  calories: 420,  category: "Healthy",  healthType: "healthy", tags: ["low-calorie","high-protein"], weatherFit: ["hot","moderate","cold","rainy"],   moodFit: ["energetic","happy"],         i: U+"photo-1512621776951-a57141f2eefd"+Q },
  { id: "f4",  name: "Ice Cream Sundae",        price: 432,  calories: 360,  category: "Desserts", healthType: "junk",    tags: [],                            weatherFit: ["hot"],                            moodFit: ["happy","stressed"],          i: U+"photo-1563805042-7684c019e1cb"+Q },
  { id: "f5",  name: "Tomato Basil Soup",       price: 506,  calories: 210,  category: "Soups",    healthType: "healthy", tags: ["low-calorie"],               weatherFit: ["cold","rainy"],                   moodFit: ["stressed","lazy"],           i: U+"photo-1547592180-85f173990554"+Q },
  { id: "f6",  name: "Iced Mango Juice",        price: 394,  calories: 160,  category: "Drinks",   healthType: "healthy", tags: ["low-calorie"],               weatherFit: ["hot"],                            moodFit: ["happy","energetic","lazy"],  i: U+"photo-1600271886742-f049cd5bba3f"+Q },
  { id: "f7",  name: "French Fries",            price: 331,  calories: 420,  category: "Snacks",   healthType: "junk",    tags: [],                            weatherFit: ["moderate","rainy","hot"],          moodFit: ["lazy","happy","stressed"],   i: U+"photo-1576107232684-1279f390859f"+Q },
  { id: "f8",  name: "Cappuccino",              price: 270,  calories: 140,  category: "Drinks",   healthType: "healthy", tags: ["low-calorie"],               weatherFit: ["cold","rainy","moderate"],         moodFit: ["lazy","stressed","energetic"],i: U+"photo-1509042239860-f550ce710b93"+Q },
  { id: "f9",  name: "Protein Wrap",            price: 647,  calories: 390,  category: "Healthy",  healthType: "healthy", tags: ["high-protein","low-calorie"], weatherFit: ["hot","moderate"],                 moodFit: ["energetic","lazy"],           i: U+"photo-1585238342024-78d387f4a707"+Q },
  { id: "f10", name: "Chocolate Brownie",       price: 361,  calories: 310,  category: "Desserts", healthType: "junk",    tags: [],                            weatherFit: ["rainy","cold","moderate"],         moodFit: ["stressed","happy"],          i: U+"photo-1606313564200-e75d5e30476d"+Q },
  { id: "f11", name: "Grilled Salmon Plate",    price: 1204, calories: 520,  category: "Healthy",  healthType: "healthy", tags: ["high-protein","low-calorie"], weatherFit: ["moderate","hot"],                 moodFit: ["energetic","happy"],         i: U+"photo-1467003909585-2f8a72700288"+Q },
  { id: "f12", name: "Crispy Fried Chicken",    price: 829,  calories: 890,  category: "Comfort",  healthType: "junk",    tags: ["high-protein"],              weatherFit: ["rainy","cold","moderate"],         moodFit: ["stressed","lazy"],           i: U+"photo-1626082927389-6cd097cdc6ec"+Q },
  { id: "f13", name: "Green Smoothie",          price: 457,  calories: 180,  category: "Drinks",   healthType: "healthy", tags: ["low-calorie","high-protein"], weatherFit: ["hot","moderate"],                 moodFit: ["energetic","happy"],         i: U+"photo-1610970881699-44a5587cabec"+Q },
  { id: "f14", name: "Spicy Ramen Bowl",        price: 768,  calories: 680,  category: "Bowls",    healthType: "junk",    tags: ["high-protein"],              weatherFit: ["cold","rainy"],                   moodFit: ["stressed","lazy","happy"],   i: U+"photo-1569718212165-3a8278d5f624"+Q },
  { id: "f15", name: "Butter Chicken",          price: 920,  calories: 720,  category: "Indian",   healthType: "junk",    tags: ["high-protein"],              weatherFit: ["cold","rainy","moderate"],         moodFit: ["happy","lazy","stressed"],   i: U+"photo-1603894584373-5ac82b2ae398"+Q },
  { id: "f16", name: "Paneer Tikka",            price: 720,  calories: 480,  category: "Indian",   healthType: "healthy", tags: ["high-protein"],              weatherFit: ["moderate","cold"],                moodFit: ["happy","energetic"],         i: U+"photo-1567188040759-fb8a883dc6d8"+Q },
  { id: "f17", name: "Dal Makhani",             price: 520,  calories: 350,  category: "Indian",   healthType: "healthy", tags: ["high-protein","low-calorie"], weatherFit: ["cold","rainy"],                   moodFit: ["lazy","stressed"],           i: U+"photo-1585937421612-70a008356fbe"+Q },
  { id: "f18", name: "Avocado Toast",           price: 590,  calories: 290,  category: "Healthy",  healthType: "healthy", tags: ["low-calorie","high-protein"], weatherFit: ["moderate","hot"],                 moodFit: ["energetic","happy"],         i: U+"photo-1541519227354-08fa5d50c820"+Q },
  { id: "f19", name: "Caesar Salad",            price: 480,  calories: 240,  category: "Healthy",  healthType: "healthy", tags: ["low-calorie"],               weatherFit: ["hot","moderate"],                 moodFit: ["energetic","happy"],         i: U+"photo-1512852939750-1305098529bf"+Q },
  { id: "f20", name: "Masala Chai",             price: 80,   calories: 90,   category: "Drinks",   healthType: "healthy", tags: ["low-calorie"],               weatherFit: ["cold","rainy","moderate"],         moodFit: ["lazy","stressed"],           i: U+"photo-1571934811356-5cc061b6821f"+Q },
  { id: "f21", name: "Peri Peri Chicken Wings", price: 760,  calories: 610,  category: "Comfort",  healthType: "junk",    tags: ["high-protein"],              weatherFit: ["moderate","rainy"],               moodFit: ["happy","energetic","stressed"],i: U+"photo-1527477396000-e27163b481c2"+Q },
  { id: "f22", name: "Vegan Buddha Bowl",       price: 720,  calories: 340,  category: "Healthy",  healthType: "healthy", tags: ["low-calorie","high-protein"], weatherFit: ["hot","moderate"],                 moodFit: ["energetic","happy"],         i: U+"photo-1540189549336-e6e99c3679fe"+Q },
  { id: "f23", name: "Pasta Arrabbiata",        price: 630,  calories: 580,  category: "Pasta",    healthType: "junk",    tags: [],                            weatherFit: ["rainy","cold","moderate"],         moodFit: ["happy","stressed","lazy"],   i: U+"photo-1555949258-eb67b1ef0ceb"+Q },
  { id: "f24", name: "Chicken Shawarma",        price: 680,  calories: 540,  category: "Burger",   healthType: "junk",    tags: ["high-protein"],              weatherFit: ["moderate","hot"],                 moodFit: ["energetic","happy","stressed"],i: U+"photo-1561651823-34feb02250e4"+Q },
  { id: "f25", name: "Watermelon Mint Cooler",  price: 280,  calories: 110,  category: "Drinks",   healthType: "healthy", tags: ["low-calorie"],               weatherFit: ["hot"],                            moodFit: ["happy","energetic"],         i: U+"photo-1556679343-c7306c1976bc"+Q },
  { id: "f26", name: "Cheesy Nachos",           price: 440,  calories: 510,  category: "Snacks",   healthType: "junk",    tags: [],                            weatherFit: ["moderate","rainy"],               moodFit: ["happy","lazy","stressed"],   i: U+"photo-1513456852971-30c0b8199d4d"+Q },
  { id: "f27", name: "Mushroom Risotto",        price: 840,  calories: 490,  category: "Pasta",    healthType: "healthy", tags: ["low-calorie"],               weatherFit: ["cold","rainy","moderate"],         moodFit: ["lazy","stressed","happy"],   i: U+"photo-1476124369491-e7addf5db371"+Q },
  { id: "f28", name: "Acai Berry Bowl",         price: 550,  calories: 300,  category: "Healthy",  healthType: "healthy", tags: ["low-calorie","high-protein"], weatherFit: ["hot","moderate"],                 moodFit: ["energetic","happy"],         i: U+"photo-1590301157890-4810ed352733"+Q },
  { id: "f29", name: "Loaded Beef Tacos",       price: 780,  calories: 660,  category: "Comfort",  healthType: "junk",    tags: ["high-protein"],              weatherFit: ["moderate","hot"],                 moodFit: ["happy","energetic","stressed"],i: U+"photo-1565299585323-38d6b0865b47"+Q },
  { id: "f30", name: "Lemon Cheesecake",        price: 395,  calories: 410,  category: "Desserts", healthType: "junk",    tags: [],                            weatherFit: ["moderate","hot"],                 moodFit: ["happy","stressed"],          i: U+"photo-1533134242443-d4fd215305ad"+Q },
  { id: "f31", name: "Greek Yogurt Parfait",    price: 350,  calories: 220,  category: "Healthy",  healthType: "healthy", tags: ["low-calorie","high-protein"], weatherFit: ["hot","moderate"],                 moodFit: ["energetic","happy"],         i: U+"photo-1488477181946-6428a0291777"+Q },
  { id: "f32", name: "Mutton Biryani",          price: 1100, calories: 830,  category: "Indian",   healthType: "junk",    tags: ["high-protein"],              weatherFit: ["moderate","cold"],                moodFit: ["happy","lazy","stressed"],   i: U+"photo-1563379091339-03b21ab4a4f8"+Q },
  { id: "f33", name: "Palak Paneer",            price: 480,  calories: 380,  category: "Indian",   healthType: "healthy", tags: ["high-protein","low-calorie"], weatherFit: ["cold","rainy","moderate"],         moodFit: ["lazy","happy"],              i: U+"photo-1585937421612-70a008356fbe"+Q },
  { id: "f34", name: "Cold Brew Coffee",        price: 310,  calories: 20,   category: "Drinks",   healthType: "healthy", tags: ["low-calorie"],               weatherFit: ["hot","moderate"],                 moodFit: ["energetic","stressed"],      i: U+"photo-1517701604599-bb29b565090c"+Q },
  { id: "f35", name: "Tiramisu",                price: 420,  calories: 380,  category: "Desserts", healthType: "junk",    tags: [],                            weatherFit: ["moderate","cold","rainy"],         moodFit: ["happy","stressed"],          i: U+"photo-1571877227200-a0d98ea607e9"+Q },
  { id: "f36", name: "Falafel Wrap",            price: 520,  calories: 410,  category: "Healthy",  healthType: "healthy", tags: ["high-protein","low-calorie"], weatherFit: ["moderate","hot"],                 moodFit: ["energetic","happy"],         i: U+"photo-1529006557810-274b9b501176"+Q },
  { id: "f37", name: "Corn on the Cob",         price: 180,  calories: 130,  category: "Snacks",   healthType: "healthy", tags: ["low-calorie"],               weatherFit: ["hot","moderate"],                 moodFit: ["happy","energetic","lazy"],  i: U+"photo-1551754655-cd27e38d2076"+Q },
  { id: "f38", name: "Pani Puri",               price: 120,  calories: 170,  category: "Indian",   healthType: "junk",    tags: [],                            weatherFit: ["hot","moderate"],                 moodFit: ["happy","energetic"],         i: U+"photo-1601050690597-df0568f70950"+Q },
];

const S = {
  category: "All",
  filter: "all",
  search: "",
  mood: "",
  weatherType: "moderate",
  conditionLabel: "Pleasant",
  cart: [],
  wishlist: JSON.parse(localStorage.getItem("hungryhub-wishlist") || "[]"),
  sortBy: "default",
  showWishlist: false
};

const T = { "low-calorie": "Low cal", "high-protein": "High protein" };
const M = { happy: "Happy", stressed: "Stressed", lazy: "Lazy", energetic: "Energetic" };
const W = {
  hot: "Heatwave: cold drinks & light plates.",
  cold: "Chilly: warm bowls & sips.",
  rainy: "Rainy day: comfort food vibes.",
  moderate: "Nice day: mix healthy + treat."
};

const tpl = $("foodCardTemplate").content.firstElementChild;

// ── Toast ──────────────────────────────────────────────────────
const toastEl = document.createElement("div");
toastEl.id = "toastContainer";
toastEl.style.cssText = "position:fixed;bottom:5.5rem;right:1rem;z-index:200;display:flex;flex-direction:column;gap:.45rem;align-items:flex-end;pointer-events:none";
document.body.appendChild(toastEl);

function toast(msg, type = "info") {
  const t = document.createElement("div");
  const colors = { info: "var(--a)", success: "var(--g)", warn: "var(--y)", error: "var(--r)" };
  t.style.cssText = `background:var(--surface);border:1px solid var(--b);backdrop-filter:blur(16px);padding:.5rem 1rem;border-radius:999px;font-size:.8rem;font-weight:600;color:var(--text);box-shadow:var(--sh);border-left:3px solid ${colors[type]};transition:opacity .3s,transform .3s;opacity:0;transform:translateX(20px)`;
  t.textContent = msg;
  toastEl.appendChild(t);
  requestAnimationFrame(() => { t.style.opacity = "1"; t.style.transform = "translateX(0)"; });
  setTimeout(() => {
    t.style.opacity = "0"; t.style.transform = "translateX(20px)";
    setTimeout(() => t.remove(), 300);
  }, 2800);
}

// ── Theme system ───────────────────────────────────────────────
const THEMES = ["light", "dark", "forest", "ocean", "rose", "midnight"];

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("hungryhub-theme", theme);
  document.querySelectorAll(".swatch").forEach(s => {
    s.classList.toggle("active", s.dataset.theme === theme);
  });
}

function initTheme() {
  const saved = localStorage.getItem("hungryhub-theme") || "light";
  applyTheme(saved);
}

// Theme dropdown toggle
const themeToggle = $("themeToggle");
const themeDropdown = $("themeDropdown");
themeToggle.onclick = (e) => {
  e.stopPropagation();
  const hidden = themeDropdown.hidden;
  themeDropdown.hidden = !hidden;
};
document.addEventListener("click", (e) => {
  if (!$("themePicker").contains(e.target)) themeDropdown.hidden = true;
});
document.querySelectorAll(".swatch").forEach(s => {
  s.onclick = () => {
    applyTheme(s.dataset.theme);
    themeDropdown.hidden = true;
    const names = { light: "☀️ Light", dark: "🌑 Dark", forest: "🌲 Forest", ocean: "🌊 Ocean", rose: "🌸 Rose", midnight: "🌌 Midnight" };
    toast(names[s.dataset.theme] + " theme", "info");
  };
});

// ── Wishlist ───────────────────────────────────────────────────
function saveWishlist() {
  localStorage.setItem("hungryhub-wishlist", JSON.stringify(S.wishlist));
}
function toggleWishlist(id) {
  const idx = S.wishlist.indexOf(id);
  if (idx >= 0) { S.wishlist.splice(idx, 1); toast("Removed from wishlist", "info"); }
  else { S.wishlist.push(id); toast("❤️ Added to wishlist", "success"); }
  saveWishlist();
  document.querySelectorAll(`.wish-btn[data-id="${id}"]`).forEach(b => {
    b.textContent = S.wishlist.includes(id) ? "❤️" : "🤍";
    b.classList.toggle("wished", S.wishlist.includes(id));
  });
  if (S.showWishlist) grid();
}

// ── Cart totals ────────────────────────────────────────────────
function totals() {
  let n = 0, p = 0, c = 0;
  S.cart.forEach(e => {
    const x = FOODS.find(f => f.id === e.id);
    if (!x) return;
    n += e.qty; p += x.price * e.qty; c += x.calories * e.qty;
  });
  return { n, p, c };
}

// ── Smart picks ────────────────────────────────────────────────
function smartPicks() {
  return FOODS.filter(x =>
    x.weatherFit.includes(S.weatherType) && (!S.mood || x.moodFit.includes(S.mood))
  ).slice(0, 4);
}

// ── Sort ───────────────────────────────────────────────────────
function sortFoods(list) {
  const copy = [...list];
  switch (S.sortBy) {
    case "price-asc":  return copy.sort((a, b) => a.price - b.price);
    case "price-desc": return copy.sort((a, b) => b.price - a.price);
    case "cal-asc":    return copy.sort((a, b) => a.calories - b.calories);
    case "cal-desc":   return copy.sort((a, b) => b.calories - a.calories);
    case "name":       return copy.sort((a, b) => a.name.localeCompare(b.name));
    default:           return copy;
  }
}

// ── Filter ────────────────────────────────────────────────────
function filterList(foods) {
  let list = foods;
  if (S.showWishlist) list = list.filter(x => S.wishlist.includes(x.id));
  if (S.category !== "All") list = list.filter(x => x.category === S.category);
  if (S.filter === "low-calorie") list = list.filter(x => x.tags.includes("low-calorie"));
  else if (S.filter === "high-protein") list = list.filter(x => x.tags.includes("high-protein"));
  else if (S.filter === "weather") list = list.filter(x => x.weatherFit.includes(S.weatherType));
  if (S.search) list = list.filter(x =>
    x.name.toLowerCase().includes(S.search) ||
    x.category.toLowerCase().includes(S.search) ||
    x.tags.some(t => t.includes(S.search))
  );
  return sortFoods(list);
}

// ── Header text ───────────────────────────────────────────────
function head() {
  $("greeting").textContent = greetText() + " — hungry?";
  const moodHint = S.mood ? ` + ${M[S.mood]} mood` : "";
  $("headerSuggestion").textContent = W[S.weatherType] + moodHint;
  const hint = S.mood ? `${M[S.mood]} vibes + ${S.conditionLabel} weather picks` : `Based on ${S.conditionLabel} weather`;
  $("smartPicksHint").textContent = hint;
}

// ── Food card ─────────────────────────────────────────────────
function card(item, el, { btn = "Add to cart", anim = 0 } = {}) {
  const node = tpl.cloneNode(true);
  const ab = node.querySelector(".add-btn");
  const hb = node.querySelector(".health-badge");
  const wb = node.querySelector(".wish-btn");
  const tw = node.querySelector(".food-tags");
  node.querySelector(".food-image").src = item.i;
  node.querySelector(".food-image").alt = item.name;
  node.querySelector(".food-name").textContent = item.name;
  node.querySelector(".food-price").textContent = rupees(item.price);
  node.querySelector(".food-calories").textContent = item.calories + " kcal";
  ab.textContent = btn;
  hb.textContent = item.healthType === "healthy" ? "✦ Healthy" : "● Junk";
  hb.classList.toggle("is-junk", item.healthType === "junk");
  tw.innerHTML = "";
  item.tags.forEach(t => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = T[t] || t;
    tw.appendChild(span);
  });
  if (wb) {
    wb.dataset.id = item.id;
    wb.textContent = S.wishlist.includes(item.id) ? "❤️" : "🤍";
    wb.classList.toggle("wished", S.wishlist.includes(item.id));
    wb.onclick = (e) => { e.stopPropagation(); toggleWishlist(item.id); };
  }
  const cartRow = S.cart.find(x => x.id === item.id);
  if (cartRow) {
    ab.textContent = `In cart (${cartRow.qty})`;
    ab.style.background = "linear-gradient(120deg, var(--g), #22c55e)";
  }
  ab.onclick = () => { add(item.id); ab.classList.add("added"); setTimeout(() => ab.classList.remove("added"), 360); };
  if (anim) node.classList.add("food-card-enter");
  el.appendChild(node);
}

// ── Grid render ───────────────────────────────────────────────
function grid() {
  const g = $("foodGrid");
  const list = filterList(FOODS);
  g.innerHTML = "";
  const countEl = $("menuCount");
  if (countEl) countEl.textContent = `${list.length} item${list.length !== 1 ? "s" : ""}`;
  if (!list.length) { g.innerHTML = '<p class="empty-hint">No matches. Try different filters.</p>'; return; }
  list.forEach(x => card(x, g, { anim: 0 }));
}

function recs() {
  const g = $("recommendedGrid");
  g.innerHTML = "";
  smartPicks().forEach(x => card(x, g, { btn: "Add to cart", anim: 1 }));
}

function cats() {
  const categories = ["All", ...new Set(FOODS.map(x => x.category))];
  const wrap = $("categoryList");
  wrap.innerHTML = "";
  categories.forEach(name => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "category-chip" + (S.category === name ? " active" : "");
    b.textContent = name;
    b.onclick = () => {
      S.category = name;
      document.querySelectorAll(".category-chip").forEach(el => el.classList.remove("active"));
      b.classList.add("active");
      S.showWishlist = false;
      $("wishlistToggle")?.classList.remove("active");
      $("wishlistToggle").textContent = "🤍 Wishlist";
      grid();
    };
    wrap.appendChild(b);
  });
}

// ── Cart actions ──────────────────────────────────────────────
function add(id) {
  const row = S.cart.find(x => x.id === id);
  if (row) row.qty += 1;
  else S.cart.push({ id, qty: 1 });
  const food = FOODS.find(f => f.id === id);
  toast(`🛒 ${food?.name || "Item"} added`, "success");
  paint(); grid();
}

function sub(id) {
  const i = S.cart.findIndex(x => x.id === id);
  if (i < 0) return;
  if (S.cart[i].qty > 1) S.cart[i].qty -= 1;
  else S.cart.splice(i, 1);
  paint(); grid();
}

// ── Cart paint ────────────────────────────────────────────────
function paint() {
  const { n, p, c } = totals();
  const ci = $("cartItems");
  ci.innerHTML = "";
  S.cart.forEach(e => {
    const x = FOODS.find(f => f.id === e.id);
    if (!x) return;
    const r = document.createElement("article");
    r.className = "cart-item";
    r.innerHTML = `
      <img src="${x.i}" alt="${x.name}">
      <div>
        <strong>${x.name}</strong>
        <p>${rupees(x.price)} × ${e.qty} = ${rupees(x.price * e.qty)}</p>
        <p style="color:var(--muted)">${x.calories * e.qty} kcal</p>
      </div>
      <div class="cart-qty-controls">
        <button type="button" class="qty-btn" aria-label="Remove one">−</button>
        <span class="qty-num">${e.qty}</span>
        <button type="button" class="qty-btn qty-plus" aria-label="Add one">+</button>
      </div>
    `;
    r.querySelector(".qty-btn").onclick = () => sub(x.id);
    r.querySelector(".qty-plus").onclick = () => add(x.id);
    ci.appendChild(r);
  });
  if (!S.cart.length) ci.innerHTML = '<p class="empty-hint">Your cart is empty.</p>';
  $("summaryItems").textContent = n;
  $("summaryPrice").textContent = rupees(p);
  $("summaryCalories").textContent = c;
  $("cartCount").textContent = n;
  $("cartCalorieWarning").classList.toggle("hidden", c <= CAP);
  $("floatCalorieValue").textContent = c;
  $("floatCalorieBar").style.width = Math.min(100, (c / BAR) * 100) + "%";
  const level = c <= 800 ? "green" : c <= CAP ? "yellow" : "red";
  $("calorieFloat").className = "calorie-float glass level-" + level;
  $("floatCalorieHint").textContent = !c ? "Add items to track" : c > CAP ? `Over ${CAP} kcal!` : c <= 800 ? "Looking light 🌿" : "Moderate 👍";
}

// ── Time greeting ─────────────────────────────────────────────
function greetText() {
  const h = new Date().getHours();
  return h < 5 ? "Late night" : h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : h < 21 ? "Good evening" : "Good night";
}

// ── Weather ───────────────────────────────────────────────────
function rainCode(code) {
  return [51,53,55,61,63,65,80,81,82,95,96,99].includes(code) ? "rainy" : "clear";
}
function wxType(bucket, temp) {
  return bucket === "rainy" ? "rainy" : temp <= 12 ? "cold" : temp >= 28 ? "hot" : "moderate";
}
function cond(bucket, temp) {
  if (bucket === "rainy") return { l: "Rainy", i: "🌧️" };
  if (temp <= 12) return { l: "Cold", i: "🧣" };
  if (temp >= 28) return { l: "Hot", i: "☀️" };
  return { l: "Pleasant", i: "⛅" };
}
async function wx() {
  try {
    const loc = await (await fetch("https://ipapi.co/json/")).json();
    const d = await (await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${loc.latitude}&longitude=${loc.longitude}&current_weather=true&timezone=auto`
    )).json();
    const t = d?.current_weather?.temperature ?? 22;
    const cd = d?.current_weather?.weathercode ?? 0;
    const b = rainCode(cd);
    const { l, i } = cond(b, t);
    S.weatherType = wxType(b, t);
    S.conditionLabel = l;
    $("weatherIcon").textContent = i;
    $("weatherTemp").textContent = Math.round(t) + "°C";
    $("weatherCondition").textContent = l;
    $("weatherLocation").textContent = loc.city || "Area";
  } catch {
    S.weatherType = "moderate"; S.conditionLabel = "Pleasant";
    $("weatherIcon").textContent = "⛅";
    $("weatherTemp").textContent = "—";
    $("weatherCondition").textContent = "Demo";
    $("weatherLocation").textContent = "Nearby";
  }
  $("weatherLoading").classList.add("hidden");
  $("weatherContent").classList.remove("hidden");
  head(); recs(); grid();
}

// ── Cart panel ────────────────────────────────────────────────
function openCart() {
  $("cartPanel").classList.add("open");
  $("cartOverlay").classList.add("visible");
}
function closeCart() {
  $("cartPanel").classList.remove("open");
  $("cartOverlay").classList.remove("visible");
}

// ── Events ────────────────────────────────────────────────────
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".controls-section .filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    S.filter = btn.dataset.filter;
    grid();
  });
});

document.querySelectorAll(".mood-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".mood-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    S.mood = btn.dataset.mood || "";
    head(); recs();
  });
});

$("searchInput").oninput = (e) => { S.search = e.target.value.trim().toLowerCase(); grid(); };
$("cartToggle").onclick = openCart;
$("closeCart").onclick = closeCart;
$("cartOverlay").onclick = closeCart;

$("exploreBtn").onclick = () => {
  document.querySelector(".items-section").scrollIntoView({ behavior: "smooth" });
};

// Checkout (demo)
$("checkoutBtn").onclick = () => {
  if (!S.cart.length) return toast("Your cart is empty!", "warn");
  const { n, p } = totals();
  toast(`✅ Order placed! ${n} items · ${rupees(p)}`, "success");
  S.cart = [];
  paint(); grid();
  closeCart();
};

const sortSel = $("sortSelect");
if (sortSel) sortSel.onchange = (e) => { S.sortBy = e.target.value; grid(); };

const wlBtn = $("wishlistToggle");
if (wlBtn) {
  wlBtn.onclick = () => {
    S.showWishlist = !S.showWishlist;
    wlBtn.classList.toggle("active", S.showWishlist);
    wlBtn.textContent = S.showWishlist ? "❤️ Wishlist" : "🤍 Wishlist";
    if (S.showWishlist) {
      S.category = "All";
      document.querySelectorAll(".category-chip").forEach(e => e.classList.remove("active"));
      document.querySelector(".category-chip")?.classList.add("active");
    }
    grid();
  };
}

const clearBtn = $("clearCartBtn");
if (clearBtn) {
  clearBtn.onclick = () => {
    if (!S.cart.length) return;
    S.cart = [];
    toast("Cart cleared", "info");
    paint(); grid();
  };
}

const calorieFloat = $("calorieFloat");
calorieFloat.onclick = openCart;
calorieFloat.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openCart(); } };

// ── Boot ──────────────────────────────────────────────────────
initTheme();
head();
cats();
grid();
recs();
paint();
wx();

// ── PAYMENT SYSTEM ────────────────────────────────────────────

const PROMO_CODES = {
  "HUNGRY10": 10,   // 10% off
  "FIRSTORDER": 15, // 15% off
  "SAVE20": 20,     // 20% off
  "FLAT50": null,   // flat ₹50 off (handled specially)
};

let PROMO_ACTIVE = null; // { code, pct, flat }

function rupees2(n) { return "₹" + Number(n).toLocaleString("en-IN", { maximumFractionDigits: 0 }); }
function genOrderId() {
  return "HH-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2,5).toUpperCase();
}

// ── Step navigation helpers ────────────────────────────────────
function setPayStep(n) {
  document.querySelectorAll(".pay-step").forEach((s, i) => {
    s.classList.toggle("active", i === n - 1);
  });
  document.querySelectorAll(".payment-steps .step").forEach((s, i) => {
    s.classList.toggle("active", i === n - 1);
    s.classList.toggle("done", i < n - 1);
  });
  document.querySelectorAll(".step-line").forEach((l, i) => {
    l.classList.toggle("done", i < n - 1);
  });
}

// ── Open / Close payment modal ─────────────────────────────────
function openPayment() {
  if (!S.cart.length) return toast("Your cart is empty!", "warn");
  PROMO_ACTIVE = null;
  document.getElementById("promoInput").value = "";
  document.getElementById("promoMsg").classList.add("hidden");
  document.getElementById("discountRow").classList.add("hidden");
  setPayStep(1);
  refreshPaySummary();
  $("paymentModal").classList.add("open");
  $("paymentOverlay").classList.add("visible");
}
function closePayment() {
  $("paymentModal").classList.remove("open");
  $("paymentOverlay").classList.remove("visible");
}

// ── Validate step 1 ────────────────────────────────────────────
function validateStep1() {
  let ok = true;
  const fields = [
    { id: "payName",    label: "name" },
    { id: "payPhone",   label: "phone" },
    { id: "payAddress", label: "address" },
    { id: "payCity",    label: "city" },
    { id: "payPincode", label: "PIN code" },
  ];
  fields.forEach(({ id, label }) => {
    const el = $(id);
    const val = el.value.trim();
    const empty = !val;
    const pinErr = id === "payPincode" && !/^\d{6}$/.test(val);
    const phoneErr = id === "payPhone" && !/^[+\d\s\-]{8,}$/.test(val);
    if (empty || pinErr || phoneErr) {
      el.classList.add("error");
      ok = false;
    } else {
      el.classList.remove("error");
    }
  });
  if (!ok) toast("Please fill all required fields correctly", "warn");
  return ok;
}

// ── Validate step 2 ────────────────────────────────────────────
function validateStep2() {
  const method = document.querySelector("input[name='payMethod']:checked")?.value;
  if (method === "upi") {
    const upi = $("payUpiId").value.trim();
    if (!upi || !upi.includes("@")) {
      $("payUpiId").classList.add("error");
      toast("Enter a valid UPI ID (e.g. name@upi)", "warn");
      return false;
    }
    $("payUpiId").classList.remove("error");
  }
  if (method === "card") {
    const num = $("payCardNum").value.replace(/\s/g, "");
    const exp = $("payCardExp").value.trim();
    const cvv = $("payCardCvv").value.trim();
    const name = $("payCardName").value.trim();
    if (num.length < 16 || !exp || cvv.length < 3 || !name) {
      toast("Please fill in all card details correctly", "warn");
      return false;
    }
  }
  if (method === "netbanking") {
    if (!$("payBank").value) {
      toast("Please select a bank", "warn");
      return false;
    }
  }
  return true;
}

// ── Refresh order summary in step 3 ───────────────────────────
function refreshPaySummary() {
  const { p: subtotal } = totals();
  const delivery = 40;
  let discount = 0;
  if (PROMO_ACTIVE) {
    if (PROMO_ACTIVE.flat) discount = PROMO_ACTIVE.flat;
    else discount = Math.round(subtotal * PROMO_ACTIVE.pct / 100);
  }
  const grand = Math.max(0, subtotal + delivery - discount);

  // Order lines
  const summEl = $("payOrderSummary");
  if (summEl) {
    summEl.innerHTML = "";
    S.cart.forEach(e => {
      const x = FOODS.find(f => f.id === e.id);
      if (!x) return;
      const row = document.createElement("div");
      row.className = "pay-order-row";
      row.innerHTML = `<span>${x.name} × ${e.qty}</span><strong>${rupees2(x.price * e.qty)}</strong>`;
      summEl.appendChild(row);
    });
  }

  $("finalSubtotal").textContent = rupees2(subtotal);
  $("finalDelivery").textContent = rupees2(delivery);
  $("finalTotal").textContent = rupees2(grand);

  const discRow = $("discountRow");
  if (PROMO_ACTIVE && discount > 0) {
    $("finalDiscount").textContent = "−" + rupees2(discount);
    discRow.classList.remove("hidden");
  } else {
    discRow.classList.add("hidden");
  }

  // Payment method summary
  const method = document.querySelector("input[name='payMethod']:checked")?.value || "upi";
  const methodLabels = { upi: "📱 UPI / GPay", card: "💳 Card", netbanking: "🏦 Net Banking", cod: "💵 Cash on Delivery" };
  const sumEl = $("payMethodSummary");
  if (sumEl) sumEl.textContent = "Paying via: " + (methodLabels[method] || method);
}

// ── Apply promo ────────────────────────────────────────────────
function applyPromo() {
  const code = $("promoInput").value.trim().toUpperCase();
  const msg = $("promoMsg");
  msg.classList.remove("hidden", "ok", "fail");
  if (!code) { msg.textContent = "Enter a promo code"; msg.classList.add("fail"); return; }
  if (code === "FLAT50") {
    PROMO_ACTIVE = { code, flat: 50 };
    msg.textContent = "✅ FLAT50 applied — ₹50 off!";
    msg.classList.add("ok");
    toast("🎉 Promo applied: ₹50 off", "success");
  } else if (PROMO_CODES[code]) {
    PROMO_ACTIVE = { code, pct: PROMO_CODES[code] };
    msg.textContent = `✅ ${code} applied — ${PROMO_CODES[code]}% off!`;
    msg.classList.add("ok");
    toast(`🎉 Promo applied: ${PROMO_CODES[code]}% off`, "success");
  } else {
    PROMO_ACTIVE = null;
    msg.textContent = "❌ Invalid promo code";
    msg.classList.add("fail");
  }
  refreshPaySummary();
}

// ── Place order ────────────────────────────────────────────────
async function placeOrder() {
  const btn = $("payConfirm");
  const label = $("payConfirmLabel");
  const spinner = $("payConfirmSpinner");

  btn.disabled = true;
  label.textContent = "Processing…";
  spinner.classList.remove("hidden");

  // Simulate payment processing (1.8s)
  await new Promise(r => setTimeout(r, 1800));

  const { p: subtotal } = totals();
  const delivery = 40;
  let discount = 0;
  if (PROMO_ACTIVE) {
    if (PROMO_ACTIVE.flat) discount = PROMO_ACTIVE.flat;
    else discount = Math.round(subtotal * PROMO_ACTIVE.pct / 100);
  }
  const grand = Math.max(0, subtotal + delivery - discount);
  const orderId = genOrderId();
  const method = document.querySelector("input[name='payMethod']:checked")?.value || "upi";
  const methodLabels = { upi: "UPI", card: "Card", netbanking: "Net Banking", cod: "Cash on Delivery" };

  // Build order record for history
  const order = {
    id: orderId,
    items: S.cart.map(e => {
      const x = FOODS.find(f => f.id === e.id);
      return { name: x?.name || "?", qty: e.qty, price: (x?.price || 0) * e.qty };
    }),
    subtotal, delivery, discount, grand,
    method: methodLabels[method],
    address: `${$("payAddress").value.trim()}, ${$("payCity").value.trim()} — ${$("payPincode").value.trim()}`,
    time: new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }),
    status: "Preparing"
  };

  // Save to session orders
  S.orders = S.orders || [];
  S.orders.unshift(order);
  try { localStorage.setItem("hungryhub-orders", JSON.stringify(S.orders)); } catch {}

  // Try save to backend if logged in
  try {
    const token = localStorage.getItem("hungryhub-token");
    if (token) {
      await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
        body: JSON.stringify({ orderId, items: S.cart, total: grand, method: methodLabels[method], address: order.address, discount })
      });
    }
  } catch {}

  // Clear cart
  S.cart = [];
  paint(); grid();
  closeCart();

  // Show success step
  spinner.classList.add("hidden");
  label.textContent = "Place Order 🎉";
  btn.disabled = false;

  $("successMsg").textContent = `Paid ${rupees2(grand)} via ${methodLabels[method]}`;
  $("successOrderId").textContent = "Order ID: " + orderId;
  const eta = 25 + Math.floor(Math.random() * 20);
  $("etaTime").textContent = eta + "–" + (eta + 10) + " min";
  setPayStep(4);
}

// ── Card number formatting ─────────────────────────────────────
const cardNumInput = $("payCardNum");
if (cardNumInput) {
  cardNumInput.oninput = function () {
    let v = this.value.replace(/\D/g, "").slice(0, 16);
    this.value = v.replace(/(.{4})/g, "$1 ").trim();
  };
}
const cardExpInput = $("payCardExp");
if (cardExpInput) {
  cardExpInput.oninput = function () {
    let v = this.value.replace(/\D/g, "").slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + " / " + v.slice(2);
    this.value = v;
  };
}

// ── Payment method tab switching ──────────────────────────────
document.querySelectorAll("input[name='payMethod']").forEach(radio => {
  radio.addEventListener("change", function () {
    document.querySelectorAll(".pay-method-card").forEach(c => c.classList.remove("active"));
    this.closest(".pay-method-card").classList.add("active");
    $("upiForm").classList.toggle("hidden", this.value !== "upi");
    $("cardForm").classList.toggle("hidden", this.value !== "card");
    $("netbankingForm").classList.toggle("hidden", this.value !== "netbanking");
    $("codForm").classList.toggle("hidden", this.value !== "cod");
  });
});

// ── Button wiring ─────────────────────────────────────────────
$("closePayment").onclick = closePayment;
$("paymentOverlay").onclick = closePayment;
$("payNext1").onclick = () => { if (validateStep1()) { setPayStep(2); } };
$("payBack1").onclick = () => setPayStep(1);
$("payNext2").onclick = () => {
  if (!validateStep2()) return;
  refreshPaySummary();
  setPayStep(3);
};
$("payBack2").onclick = () => setPayStep(2);
$("payConfirm").onclick = placeOrder;
$("successDone").onclick = closePayment;
$("applyPromo").onclick = applyPromo;
$("promoInput").onkeydown = (e) => { if (e.key === "Enter") applyPromo(); };

// Override checkout button to open payment modal
$("checkoutBtn").onclick = () => {
  if (!S.cart.length) return toast("Your cart is empty!", "warn");
  closeCart();
  setTimeout(openPayment, 180);
};

// ── Orders History ─────────────────────────────────────────────
S.orders = [];
try {
  const saved = localStorage.getItem("hungryhub-orders");
  if (saved) S.orders = JSON.parse(saved);
} catch {}

function renderOrders() {
  const list = $("ordersList");
  list.innerHTML = "";
  if (!S.orders.length) {
    list.innerHTML = '<p class="empty-hint" style="padding:.5rem">No orders yet. Place your first order!</p>';
    return;
  }
  S.orders.forEach(o => {
    const card = document.createElement("div");
    card.className = "order-card";
    const preview = o.items.slice(0, 3).map(i => `${i.name} ×${i.qty}`).join(", ");
    const more = o.items.length > 3 ? ` +${o.items.length - 3} more` : "";
    card.innerHTML = `
      <div class="order-card-head">
        <span class="order-id">${o.id}</span>
        <span class="order-status ${o.status === "Delivered" ? "delivered" : "preparing"}">${o.status}</span>
      </div>
      <div class="order-card-body">
        <div class="order-items-preview">${preview}${more}</div>
        <div class="order-meta">
          <span>${o.time}</span>
          <span class="order-total">${rupees2(o.grand)}</span>
        </div>
      </div>`;
    list.appendChild(card);
  });
}

function openOrders() {
  renderOrders();
  $("ordersPanel").classList.add("open");
  $("ordersOverlay").classList.add("visible");
}
function closeOrders() {
  $("ordersPanel").classList.remove("open");
  $("ordersOverlay").classList.remove("visible");
}

$("ordersToggle").onclick = openOrders;
$("closeOrders").onclick = closeOrders;
$("ordersOverlay").onclick = closeOrders;
