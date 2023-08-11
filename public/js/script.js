

$(document).ready(function(){
    barba.init({
      transitions: [{
        name: 'default-transition',

        from: {namespace:['home', 'portfolio', 'contact']},
        
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
      }],

      views: [
        {
          namespace: 'home',

          afterEnter(data){
            createItemContainer(languages, "Lenguajes de Programacion", "myLanguajes");
            createItemContainer(frameworks, "Frameworks", "myFrameworks");
            addingCarouselImages(imageCarousel)
            addSectionsBlog(sections);
            addingPersonalInformation(generalInfo);
          }

        },
        {
          namespace: 'portfolio',

          afterEnter(data){
           
          }

        },
        {
          namespace: 'contact',

          afterEnter(data){
           
          }

        }
    ]
    });
    //galleryExpand('container-media');
    // galleryCollapse('container-media');

});


