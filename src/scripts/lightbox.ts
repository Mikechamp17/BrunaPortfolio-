import PhotoSwipeLightbox from 'photoswipe/lightbox';

// Init a lightbox for every photo gallery on the page
document.querySelectorAll<HTMLElement>('[id^="photo-gallery"]').forEach((gallery) => {
  const lightbox = new PhotoSwipeLightbox({
    gallery,
    children: 'a.photo-item',
    pswpModule: () => import('photoswipe'),
    showHideAnimationType: 'fade',
    bgOpacity: 0.95,
  });
  lightbox.init();
});
