import PhotoSwipeLightbox from 'photoswipe/lightbox';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#photo-gallery',
  children: 'a.photo-item',
  pswpModule: () => import('photoswipe'),
  showHideAnimationType: 'fade',
  bgOpacity: 0.95,
});

lightbox.init();
