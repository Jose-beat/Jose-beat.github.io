
var languages = [
   
    {name:'C-Sharp', imagePath:'/public/img/icon-csharp.svg'},
    {name:'CSS', imagePath:'/public/img/icon-css.png'},
    {name:'Dart', imagePath:'/public/img/icon-dart.png'},
    {name:'HTML', imagePath:'/public/img/icon-html.png'},
    {name:'Java', imagePath:'/public/img/icon-java.png'},
    {name:'JavaScript', imagePath:'/public/img/icon-js.png'},
    {name:'PHP', imagePath:'/public/img/icon-php.png'},
    {name:'Python', imagePath:'/public/img/icon-python.svg'}
];

var frameworks = [
    {name:'Laravel', imagePath:'/public/img/icon-lrvl.svg'},
    {name:'NetCore', imagePath:'/public/img/icon-netcore.svg'},
    {name:'Django', imagePath:'/public/img/icon-dj.png'},
    {name:'Flutter', imagePath:'/public/img/icon-fltr.png'},
    {name:'Bootstrap', imagePath:'/public/img/icon-bstp.png'},
];


// var programs = [
//     {name:'Name1', imagePath:''},
//     {name:'Name2', imagePath:''},
//     {name:'Name3', imagePath:''}
// ];

// Creamos los contenedores segun la cantidad de elementos en cada item

function createItemContainer(items, title, idSection){

        let itemsLength = items.length;
        let itemContainers = 0;
        let itemsByContainer = 8;
        let SectionContainer = `<div id=${idSection} class="mySections"><h2 class="sectionTitle">${title}</h2></div>`;

        if(itemsLength > 0){
            $('#items').append(SectionContainer);

            if(itemsLength%2==0){

                itemContainers = itemsLength/itemsByContainer;

               for (let index = 1; index <= itemContainers; index++) {
                $(`#${idSection}`).append(`<div class=" g-col-lg-2 g-col-lg-6 format-items" id="container-${index}"><div class="container"> <div class="row align-items-start" id="myRow-${idSection}-${index}"></div></div></div>`);
               }
                
            }else{
                itemContainers = ((itemsLength-1)/itemsByContainer) + 1;
                for (let index = 1; index <= itemContainers; index++) {
                    $(`#${idSection}`).append(`<div class=" g-col-lg-2 g-col-lg-6 format-items" id="container-${index}"><div class="container"> <div class="row align-items-start" id="myRow-${idSection}-${index}"></div></div></div>`);
                }
                 
            }
        }
        

        technologyItems(items, itemContainers, itemsByContainer, idSection);


}

function technologyItems(items, containers, itemsByContainer, idSection){
    let stringItems = [];
    items.forEach(function(val, index, array){

        let myItem = `
            <div  class="col">
                <div  class="item-icon mx-auto" >
                    <img class="image-item mx-auto d-block" src="${val.imagePath}" alt="">
                </div>
                <p class="text-center fw-bold">
                ${val.name}
                </p>
            </div>
        `
        stringItems.push(myItem);
    });

    for (let index = 1; index <= containers; index++){
        let container = $(`#container-${index}`);
        let myRow = $(`#myRow-${idSection}-${index}`);
        

        for (let index = 1; index <= itemsByContainer; index++) {
            let itemPop = stringItems.pop();

            myRow.append(itemPop);
            
        }
    };
}

