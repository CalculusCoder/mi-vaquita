const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})



let dataReload = document.querySelectorAll("[data-reload]");

let language = {
    eng: {
        intro: "Mi Vaquita Cheeses",
        description: "Authentic Latin American Cheeses",
        product: "Product Catalog"
    },
    es: {
        intro: "Mi Vaquita Quesos",
        description: "Quesos Auténticos Latino Americanos",
        product: "productos",
        productP: "Explore algunos de nuestros productos lácteos latinoamericanos más populares",
        freir: "Queso de freir",
        blanco: "Queso Blanco",
        requeson: "Queso Requeson",
        cream: "Crema Centroamericana",
        smoked: "Queso Ahumado",
        blando: "Queso Duro Blando",
        freirP: "Auténtico y Delicioso Queso para Freír. Para el mejor sabor, asar o freír.",
        blancoP: "Queso blanco suave y delicioso. Va muy bien con casi cualquier comida.",
        requesonP: "Cremoso y delicioso, combina muy bien con varios platos latino americanos.",
        creamP: "Crema suave y cremosa, importada de centroamerica.",
        smokedP: "Queso Ahumado Delicioso, va muy bien con varios platos",
        blandoP: "Sabroso queso duro seco importado. Alto en sal.",
        story: "nuestra historia",
        contact: "contáctenos",
        call: "llámanos",
        home: "Pagina Principal",
        productos: "Productos",
        storyy: "Nuestra Historia",
        contactt: "Contactar",
        storyP: "La Hacienda Products es una empresa láctea familiar fundada y establecida en 2008. Nos especializamos en la distribución de los mejores productos lácteos Latino Americanos en Miami, Florida. Cuando nuestros fundadores abrieron por primera vez, tenían una cosa en mente: entregar los mejores productos Latino Americanos con el mejore servicio al cliente. Ofrecemos una amplia variedad de quesos. Trabajamos con clientes en los 48 estados de los Estados Unidos continentales. Queso para freír, cuajada, queso blanco, queso requesón, y queso ahumado son algunos de los varios deliciosos quesos Latino Americanos que llevamos. Aparte de nuestros populares quesos, vendemos productos centroamericanos importados adicionales como: frijoles, sodas, y achiote."
    }
}

if (window.location.hash) {
    if(window.location.hash === "#es") {
        title.textContent = language.es.intro;
        description.textContent = language.es.description;
        product.textContent = language.es.product;
        productP.textContent = language.es.productP;
        freir.textContent = language.es.freir;
        blanco.textContent = language.es.blanco;
        requeson.textContent = language.es.requeson;
        cream.textContent = language.es.cream;
        smoked.textContent = language.es.smoked;
        blando.textContent = language.es.blando;
        freirP.textContent = language.es.freirP;
        blancoP.textContent = language.es.blancoP;
        requesonP.textContent = language.es.requesonP;
        creamP.textContent = language.es.creamP;
        smokedP.textContent = language.es.smokedP;
        blandoP.textContent = language.es.blandoP;
        story.textContent = language.es.story;
        contact1.textContent = language.es.contact;
        call1.textContent = language.es.call;
        homee.textContent = language.es.home;
        productos.textContent = language.es.productos;
        storyy.textContent = language.es.storyy;
        contactt.textContent = language.es.contactt;
        storyP.textContent = language.es.storyP;
    }
}

for (i = 0; i <= dataReload.length - 1; i++) {
    dataReload[i].onclick = function() {
        setTimeout(function () {
            location.reload(true);
        }, 1) 
    }
}

