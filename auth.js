/**
 * Супер-простая клиентская «авторизация» (демо).
 * В реальном проекте нужно будет подключить Firebase или Netlify Identity.
 */

const GK_KEY = 'gk_user_v1';

export function getUser() {
  try { return JSON.parse(localStorage.getItem(GK_KEY)) || null; }
  catch(e){ return null; }
}
export function setUser(u){ localStorage.setItem(GK_KEY, JSON.stringify(u)); }
export function logout(){ localStorage.removeItem(GK_KEY); location.href = 'index.html'; }
export function ensureAuth(){
  const u = getUser();
  if(!u){ location.replace('login.html'); }
  return !!u;
}
export function addPurchase(sku){
  const u = getUser() || {};
  u.purchases = Array.isArray(u.purchases) ? u.purchases : [];
  if(!u.purchases.includes(sku)) u.purchases.push(sku);
  setUser(u);
}
export function hasPurchase(sku){
  const u = getUser();
  return !!(u && Array.isArray(u.purchases) && u.purchases.includes(sku));
}

// helper для query params
export function q(name){
  const url = new URL(location.href);
  return url.searchParams.get(name);
}
