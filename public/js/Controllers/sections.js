var sections = [
    {
        name:'Mi Seccion', 
        type: 'head',
        title:'Un titulo', 
        
        subtitle:'Un subtitulo', 
        
        textContent:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `, 
        
        imageContent:'/public/img/500x500px.png',
        imageClass: 'picture',

        imageAlt : 'Descripcion'
    
    },

    {
        name:'Mi Seccion',

        type: 'content',
        
        title:'Un titulo', 
        
        subtitle:'Un subtitulo', 
        
        textContent:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `, 
        
        imageContent:'/public/img/500x500px.png',

        imageClass: 'contentImages',

        imageAlt : 'Descripcion'
    
    },
    {
        name:'Mi Seccion',

        type: 'content',
        
        title:'Un titulo', 
        
        subtitle:'Un subtitulo', 
        
        textContent:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `, 
        
        imageContent:'/public/img/500x500px.png',

        imageClass: 'contentImages',

        imageAlt : 'Descripcion'
    
    }
]


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
                    <span class="text-body-secondary">Texto Secundario</span>
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
                <span class="text-body-secondary">Texto Secundario</span>
            </h2>  
            
            <p class="lead">
                ${element.textContent}
            </p>
            `
        }
        
        </div>
        `;

        let headTemplate = `
        <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
                ${element.title}
            </h2>  
            <p class="lead">
                ${element.textContent}
            </p>
        </div>  
      
        <div  class="shadow col-md-5 d-flex align-items-center justify-content-center ${element.imageClass}">
          <img src="${element.imageContent}" id="profile-image" class="img-fluid" alt="${element.imageAlt}"> 
         </div>
        `

        if (element.type == 'head') {
            $(headingSection).append(headTemplate);
        }

        if(element.type == 'content'){
            $(sectionContent).append(contentTemplate);
        }

    });
}