var generalInfo = [
    {name: 'Github Profile', type:'link', link:'https://github.com/Jose-beat', content:'@Jose-beat', iconPath: '/public/icons/icon-github.svg'},
    {name: 'Numero Telefonico', type:'text', content:'+52-2491111518', iconPath: '/public/icons/icon-phone.svg'},
    {name: 'Correo Electronico', type:'text', content:'uri.rm.45@gmail.com', iconPath: '/public/icons/icon-email.svg'},
    {name: 'Ubicacion', type:'text', content:'Xochitlan Todos Santos, Puebla, Mexico', iconPath: '/public/icons/icon-location.svg'},
]

var sections = [
    {
        name:'Mi Seccion', 
        type: 'head',
        title:'Perfil Profesional', 
        subtitle:'', 
        textContent:`Me considero una persona preparada para aplicar sus conocimientos en el ámbito laboral. En busca de un ambiente sano para contribuir con él. El manejo de las tecnologías de la información siempre ha sido una habilidad que me ha motivado a la superación personal. Parte de una pasión que debe alimentarse con conocimiento y práctica.`, 
        imageContent:'/public/img/profile-photo.jpg',
        imageClass: 'picture',
        imageAlt : 'Foto de Perfil'
    
    },
    {
        name:'experience',

        type: 'list',
        
        title:'Experiencia', 
        
        subtitle:'', 
        
        listContent:[
            itemsFormat('experience', 'SISTEMA UNIFICADO DE CONTROL UNIVERSAL | ANALISTA/DOCUMENTADOR', 'Analisis y toma de requerimientos para definicion de alcances para el proyecto en el Honorable Ayuntamiento de Tecamachalco', 'mayo 2020 – septiembre 2020'),
            itemsFormat('experience', 'TICAS | EFOODIES', 'Desarrollo de uma plataforma para la administracion de restaurantes y pedidos en linea desarrollado em NET CORE para la aplicacion web de administracion y Flutter para plataformas moviles.', 'agosto 2021 – mayo 2022'),
            itemsFormat('experience', 'XHOFHOX | GET PLATFORM', 'Desarrollo Back End de la plataforma web de administracion de campamentos y participantes de los mismos en EUA.', 'octubre 2021 – febrero 2022'),
            itemsFormat('experience','TICAS | SOPORTE A SISTEMAS SIUM', 'Soporte a los sistemas de SIUM pertenecientes a la universidad maya, control de incidencias, actualizacion del sistema de facturacion y capacitacion de personal.', 'enero 2022 - abril 2022' ),
            itemsFormat('experience', 'XHOFHOX | AGENDAME', 'Desarrollo y soporte del sistema “Agendame“ para la creacion y administracion de citas a distintas sucursales, empresas o servicios.', 'enero 2022 - abril 2022'),
            itemsFormat('experience', 'Softtek | Cuente Coppel - Remediaciones', 'Soporte, remediacion de querys, correccion de errores y analisis de aplicaciones privadas de la empresa Coppel', 'Octubre 2022 - Actualidad'),
        ],
        
        imageContent:'/public/img/500x500px.png',

        imageClass: 'contentImages',

        imageAlt : 'Descripcion'
    
    },
    // {
    //     name:'Mi Seccion',
    //     type: 'content',
    //     title:'Un titulo', 
    //     subtitle:'Un subtitulo', 
    //     textContent:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `, 
    //     imageContent:'/public/img/500x500px.png',
    //     imageClass: 'contentImages',
    //     imageAlt : 'Descripcion'
    
    // },
    // {
    //     name:'Mi Seccion',

    //     type: 'content',
        
    //     title:'Un titulo', 
        
    //     subtitle:'Un subtitulo', 
        
    //     textContent:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `, 
        
    //     imageContent:'/public/img/500x500px.png',

    //     imageClass: 'contentImages',

    //     imageAlt : 'Descripcion'
    
    // },

    {
        name:'skills',

        type: 'list',
        
        title:'Habilidades', 
        
        subtitle:'', 
        
        listContent:[
            'Manejo, modelado y diseño de base de datos relacionales (Modelo entidad-relación y modelo relacional)',
            'Dominio del Lenguaje Universal de Modelado (UML)',
            'Manejo de Métricas para el desarrollo de software',
            'Uso de Metodologías Agiles para el desarrollo de software (SCRUM, XP)',
        ],
        
        imageContent:'/public/img/500x500px.png',

        imageClass: 'contentImages',

        imageAlt : 'Descripcion'
    
    },
    {
        name:'shares',

        type: 'list',
        
        title:'Participaciones', 
        
        subtitle:'', 
        
        listContent:[
            'Participación en el curso Cisco R&S: Introduction to Networks',
            'Participacion en el “Behind The Code” organizado por IBM',
            'Practicipacion impartiendo el taller “Desarrollo movil con flutter y consumo de Web Service” en el Instituto Tecnologico Superior de Acatlan de Osorio.',
        ],
        
        imageContent:'/public/img/participation-photo.jpg',

        imageClass: 'contentImages',

        imageAlt : 'Descripcion'
    
    },
]

function addingPersonalInformation(items){
    
    let section = $('#general-information');
  
    let numberOfContainers = 0;
    let itemsByContainer = 2;
   items.forEach(function(element, index, array){
        
        if(index % itemsByContainer === 0 || index === 0){
            let container = `<div id="section-gi-${index}" class="row align-items-start"></div>`;
            section.append(container);
            numberOfContainers += 1;
        }
   });

   addGeneralInfoItems(items, numberOfContainers, itemsByContainer);
}

function addGeneralInfoItems(items, numberContainers, itemsByContainer){
    let stringItems = [];
    items.forEach(function(element, index, array){
        let myItem = `<div class="col">
                <img class="icon-items mx-auto d-block" src="${element.iconPath}" alt="">
                ${
                    element.type == 'link'
                    ? `<a class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-center fw-bold" href="${element.link}">${element.content}<a>`
                    : `<p class="text-center fw-bold">${element.content}</p>`
                }
                
            </div>
        `;
    
        stringItems.push(myItem);
        
    });

    for (let index = 0; index <= numberContainers; index++){
        
        let myContainer = $(`#section-gi-${index * itemsByContainer}`);
            for (let index = 1; index <= itemsByContainer; index++) {

                let itemPop = stringItems.pop();
                myContainer.append(itemPop);
                
            }
        
    };

}

function addSectionsBlog(sections){
    
    let headingSection = `.head-section`;
    let sectionContent = `.content-section`;

    sections.forEach(function (element, index, array){
        
        let position = index + 1;
        let sizeUpAsigned = position % 2 == 0 ? 5 : 7;
        let sizeDownAsigned = position % 2 == 0 ? 7 : 5;

        let contentTemplate = `
        <hr class="featurette-divider">
        <div class="col-md-${sizeUpAsigned}">
            ${
                sizeUpAsigned == 7
                ?
                `<img src="${element.imageContent}"  class="img-fluid ${element.imageClass}" alt="${element.imageAlt}">`
                :
                `
                <h2 class="featurette-heading fw-normal lh-1">
                    ${element.title}
                    ${element.subtitle == '' ? '' : `<span class="text-body-secondary">` + element.subtitle + `</span>`}
                </h2>  
                
                <p class="lead">
                    ${element.textContent}
                </p>
                `
            }
            
        </div>  
    
        <div class="col-md-${sizeDownAsigned}">
        ${
            sizeDownAsigned == 7
            ?
            `<img src="${element.imageContent}"  class="img-fluid ${element.imageClass}" alt="${element.imageAlt}">`
            :
            `
            <h2 class="featurette-heading fw-normal lh-1">
                ${element.title}
                ${element.subtitle == '' ? '' : `<span class="text-body-secondary">` + element.subtitle + `</span>`}
            </h2>  
            
            <p class="lead">
                ${element.textContent}
            </p>
            `
        }
        
        </div>
        `;

        let headTemplate = `
        <div class="col-md-7 heading-section">
            <h2 class="featurette-heading fw-normal lh-1">
                ${element.title}
                ${element.subtitle == '' ? '' : `<span class="text-body-secondary">` + element.subtitle + `</span>`}
            </h2>  
            <p class="lead">
                ${element.textContent}
            </p>
            <div id="general-information" class="container text-center mt-5">
            <div class="row align-items-start">
               
                
            </div>
            
            
            </div>
        </div>  
      
        <div  class="shadow col-md-5 d-flex align-items-center justify-content-center ${element.imageClass}">
          <img src="${element.imageContent}" id="profile-image" class="img-fluid" alt="${element.imageAlt}"> 
         </div>
        `;

        let listTemplate = `
        <hr class="featurette-divider">
        <div class="col-md-${sizeUpAsigned}">
            ${
                sizeUpAsigned == 7
                ?
                `<img src="${element.imageContent}"  class="img-fluid ${element.imageClass}" alt="${element.imageAlt}">`
                :
                `
                <h2 class="featurette-heading fw-normal lh-1">
                    ${element.title}
                    ${element.subtitle == '' ? '' : `<span class="text-body-secondary">` + element.subtitle + `</span>`}
                    
                </h2>  
                
                <p class="lead">
                    <ul class="list-group list-group-flush" id="list-${element.name}">

                    </ul>
                </p>
                `
            }
            
        </div>  
    
        <div class="col-md-${sizeDownAsigned}">
        ${
            sizeDownAsigned == 7
            ?
            `<img src="${element.imageContent}"  class="img-fluid ${element.imageClass}" alt="${element.imageAlt}">`
            :
            `
            <h2 class="featurette-heading fw-normal lh-1">
                ${element.title}
                ${element.subtitle == '' ? '' : `<span class="text-body-secondary">` + element.subtitle + `</span>`}
                                </h2>  
            
            <p class="lead">
                <ul class="list-group list-group-flush" id="list-${element.name}">
             
            </ul>
            </p>
            `
        }
        
        </div>
        `;



        if (element.type == 'head') {
            $(headingSection).append(headTemplate);
        }

        if(element.type == 'content'){
            $(sectionContent).append(contentTemplate);
        }

        if(element.type == 'list'){

            $(sectionContent).append(listTemplate);

            element.listContent.forEach(function(value, index, array){
                console.log(`#list-${element.name}`);
                let elementItem = '<li class="list-group-item">'+ value +'</li>';
                $(`#list-${element.name}`).append(elementItem);
            });
        }

    });
}

function itemsFormat(type, title, content, dates){
    
    let itemFormat = ``;
    switch (type) {
        case 'experience':
            itemFormat = `${title}</br> <strong>Tareas realizadas:</strong> ${content} <p class="sub-item">${dates}</p>`;
            break;
    
        default:

            break;
    }

    return  itemFormat;
}