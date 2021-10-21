/* 
  Initialize lightGallery
  https://lightgalleryjs.com/demos/html-markup/
*/

jQuery("#lightgallery-campus")
  .justifiedGallery({
    // lightGallery demo with justifiedGallery https://codepen.io/sachinchoolur/pen/poebzpV
    captions: false,
    rowHeight: 180,
    margins: 5,
  })
  .on("jg.complete", function () {
    window.lightGallery(document.getElementById("lightgallery-campus"), {
      plugins: [lgZoom, lgThumbnail, lgFullscreen, lgAutoplay],

      // https://lightgalleryjs.com/demos/thumbnails/
      thumbnail: true,

      // https://lightgalleryjs.com/demos/transitions/
      mode: 'lg-slide',

      // lightGallery hide only controls https://codepen.io/sachinchoolur/pen/abJvKaZ
      hideBarsDelay: 2000,

      // lightGallery methods demo https://codepen.io/sachinchoolur/pen/yLMJYOw
      pager: false,
      zoom: true,
      fullScreen: true,
      autoplay: true,
      controls: true,
      download: false,
      mobileSettings: {
        controls: false,
      },
    })
  })
