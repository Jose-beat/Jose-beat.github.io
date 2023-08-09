var imageGalery = [
    {name:'Name1', imagePath:'', alt: ''},
    {name:'Name1', imagePath:'', alt: ''},
    {name:'Name1', imagePath:'', alt: ''},
    {name:'Name1', imagePath:'', alt: ''},
    {name:'Name1', imagePath:'', alt: ''},
]

var imageCarousel = [
    {name:'Name1', imagePath:'/public/img/1263x442px.png', alt: 'firstCarousel'},
]

var imageBlog = [
    {name:'Name1', imagePath:'', alt: ''},
    {name:'Name1', imagePath:'', alt: ''},
    {name:'Name1', imagePath:'', alt: ''},
    {name:'Name1', imagePath:'', alt: ''},
    {name:'Name1', imagePath:'', alt: ''},
]



function addingCarouselImages(imageCarousel){

    let myCarousel = $(`#blog-carousel`);
    let myindicators = $(`.carousel-indicators`);

    imageCarousel.forEach(function (element, index, array) {
        let indicator = `<button type="button"  data-bs-target="#myCarousel" data-bs-slide-to="${index}" class="${index == 0 ? 'active' : ''}" aria-label="Slide ${index}"></button>`;

        let imageItem = `
            <div class="carousel-item ${index == 0 ? 'active' : ''}">
                <img class="d-block w-100" src="${element.imagePath}" alt="${element.alt}" >
            </div>`;
        
        myindicators.append(indicator);
        myCarousel.append(imageItem);
    });

}