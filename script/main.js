const btn = document.querySelector('.nav__menu'),
      links = document.querySelector('.nav__list');
btn.addEventListener('click', function () {
  if (btn.getAttribute('id') == '') {
    btn.setAttribute('id', 'nav__menu_active');
    links.style = `transform: translateY(48px);
                       z-index:1;`;
  } else {
    btn.setAttribute('id', '');
    links.style = `transform: translateY( -155px);
        z-index: -1;`;
  }
});