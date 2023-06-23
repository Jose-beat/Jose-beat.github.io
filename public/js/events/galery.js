function galleryExpand(className){
   
    $(`.${className}`).click(function(){
        console.log($(this));
        anime({
            targets: `.${className}`,
            width: '100%', // -> from '28px' to '100%',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: false
          });
    });
}

function galleryCollapse(className){
    $(`.${className}`).click(function(){
        console.log($(this));
        anime({
            targets: `.${className}`,
            width: '250px', // -> from '28px' to '100%',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: false
          });
    });
}