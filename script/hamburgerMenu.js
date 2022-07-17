const d = document;

const hamburgerMenu = (menuBtn, menu) => {
  const $menu = d.getElementById(menu);
  console.log($menu)
  d.addEventListener('click', e =>{
    if(e.target.matches(`#${menuBtn} > *`)){
      $menu.classList.toggle('hidden');
      $menu.classList.toggle('flex');
    };
    if(e.target.matches(`#${menu} > a`)){
      $menu.classList.toggle('hidden');
      $menu.classList.toggle('flex');
    };
  });
}

export default hamburgerMenu;