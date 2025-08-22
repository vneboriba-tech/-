function inView(el){ if(!el) return false; const r=el.getBoundingClientRect(); return r.top < innerHeight-80; }
function onScroll(){ var big=document.querySelector('.mega-memoji'); if(big&&inView(big)) big.classList.add('show'); }
window.addEventListener('load',onScroll);
window.addEventListener('scroll',onScroll,{passive:true});