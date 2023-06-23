$(document).ready(function(){
    barba.init({
      transitions: [{
        name: 'default-transition',
        leave: function(data) {
          var done = this.async();
          document.body.classList.add('loading')
          setTimeout(function(){
              done();
          }, 300);
        },
        enter: function(data) {
            var done = this.async();
            done();
    
          setTimeout(function(){
            document.body.classList.remove('loading');
          },300);
        }
      }]
    });

    createItemContainer(languages);
    galleryExpand('container-media');
    galleryCollapse('container-media');

});

