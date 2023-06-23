 
var languages = [
    {name:'Name1', imagePath:''},
    {name:'Name2', imagePath:''},
    {name:'Name3', imagePath:''},
    {name:'Name4', imagePath:''},
    {name:'Name5', imagePath:''},
    {name:'Name6', imagePath:''},
    {name:'Name4', imagePath:''},
    {name:'Name5', imagePath:''},
    {name:'Name6', imagePath:''},
    {name:'Name4', imagePath:''},
    {name:'Name5', imagePath:''},
    {name:'Name6', imagePath:''},
];

// var frameworks = [
//     {name:'Name1', imagePath:''},
//     {name:'Name2', imagePath:''},
//     {name:'Name3', imagePath:''}
// ];
// var programs = [
//     {name:'Name1', imagePath:''},
//     {name:'Name2', imagePath:''},
//     {name:'Name3', imagePath:''}
// ];


function createItemContainer(items){
   

        let itemsLength = items.length;
        let itemContainers = 0;
        if(itemsLength%2==0){
            itemContainers = itemsLength/2;
           for (let index = 1; index <= itemContainers; index++) {
            $('#items').append(`<div class=" col-sm-2 format-items" id="container-${index}"></div>`);
           }
            
        }else{
            itemContainers = ((itemsLength-1)/2) + 1;
            for (let index = 1; index <= itemContainers; index++) {
             $('#items').append(`<div class=" col-sm-2 format-items" id="container-${index}"></div>`);
            }
             
        }

        technologyItems(languages, itemContainers);


}

function technologyItems(items, containers){
    let stringItems = [];
    items.forEach(function(val, index, array){
        let myItem = `
        <div  class="item-icon mx-auto" >
            <img class="image-item " src="public/img/icon_test.png" alt="">
        </div>
        <p class="text-center fw-bold">
           ${val.name}
        </p>`
        stringItems.push(myItem);
    });

    for (let index = 1; index <= containers; index++){
        let container = $(`#container-${index}`);
        
        let itemsInContainer = 2;

        for (let index = 1; index <= itemsInContainer; index++) {
            let itemPop = stringItems.pop();

            container.append(itemPop);
            
        }
    };
}

