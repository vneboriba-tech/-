function inView(el){ 
  if(!el) return false; 
  const r = el.getBoundingClientRect(); 
  return r.top < innerHeight - 80; 
}

function onScroll(){
  const big = document.querySelector('.mega-memoji');
  if (big && inView(big)) big.classList.add('show');

  const about = document.querySelector('.about-photo');
  if (about && inView(about)) about.classList.add('show-right');
}

window.addEventListener('load', onScroll);
window.addEventListener('scroll', onScroll, { passive:true });
