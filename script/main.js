import carousel from './carousel.js';
import hamburgerMenu from './hamburgerMenu.js';

const d = document;

d.addEventListener('DOMContentLoaded', e => {
  carousel('.btn-prev', '.btn-next');
  hamburgerMenu('menu-btn', 'menu');
});