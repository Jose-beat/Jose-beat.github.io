
var languages = [
    {name:'Name1', imagePath:''},
    {name:'Name2', imagePath:''},
    {name:'Name3', imagePath:''},
    {name:'Name4', imagePath:''},
    {name:'Name5', imagePath:''},
    {name:'Name6', imagePath:''},
    {name:'Name7', imagePath:''},
    {name:'Name8', imagePath:''},
    {name:'Name9', imagePath:''},
    {name:'Name10', imagePath:''},
    {name:'Name11', imagePath:''},
    {name:'Name12', imagePath:''},
    {name:'Name13', imagePath:''},
    {name:'Name14', imagePath:''},
    {name:'Name15', imagePath:''},
    {name:'Name16', imagePath:''},
    {name:'Name17', imagePath:''},
];

var frameworks = [
    {name:'Name1', imagePath:''},
    {name:'Name2', imagePath:''},
    {name:'Name3', imagePath:''}
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
        let SectionContainer = `<div id=${idSection} class="sectionContainer"><h2>${title}</h2></div>`;

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
            <div class="col">
                <div  class="item-icon mx-auto" >
                    <img class="image-item " src="public/img/icon_test.png" alt="">
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

