function inView(el){
  if(!el) return false;
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight - 80;
}

function onScroll(){
  const memoji = document.querySelector('.mega-memoji');
  if (memoji && inView(memoji)) memoji.classList.add('show-left');

  const photo = document.querySelector('.about-photo');
  if (photo && inView(photo)) photo.classList.add('show-right');
}

window.addEventListener('load', onScroll);
window.addEventListener('scroll', onScroll, { passive:true });
