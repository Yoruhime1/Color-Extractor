


(function () {
   
    
    
    // Arrays
   
    
    // Nodes

    
    
   
    var divBtn = document.querySelector("#divBtn");
    var divPrev = document.querySelector("#divPrev");
    // var galleryTitle = document.querySelector("#galleryTitle");
    
    

// Lecture
// var myLoadedObj = JSON.parse(localStorage.getItem("foo"));
// console.log(myLoadedObj);

// Ecriture
// var myObjToStore = { prop: true};
//   localStorage.setItem("foo", JSON.stringify(myObjToStore));

//  document.getElementsByTagName("main")[0].addEventListener(
//     "click",
//     function(){
//     console.log("click main");
//     },
//     true
// )

upload.addEventListener("click", function(){
    console.log("click anonyme");
    },false);


//      try {
//     console.log("avant");
//     nemuItems.foo();
//     console.log("après");

// } catch (error) {
//     console.log("catch");
//     console.log(error);
//     }


// function setAttributeToElement( element , Object){
// if("string" !== typeof element){
// throw new error("Required an element!")
// }
// }

    function displayLang() {
        var divLang = document.createElement("div");
        divLang.setAttribute("class", "col-sm-3 d-flex justify-content-center");
        var headLang = textInElement("h6", "Language", divLang);
        headLang.setAttribute("id", "headLang");
        var ul = textInElement("ul", "", divLang);
        var liFr = textInElement("li", "", ul);
        var liEn = textInElement("li", "", ul)
        var aFr = textInElement("a", "fr", liFr);
        var aEn = textInElement("a", "en", liEn);
        bottom.appendChild(divLang);
    }
    
    /**
     *  
     */
    function changeLang(newLang) {
        lang = newLang;
        var itemHome = document.getElementById("itemHome");
        var itemGallery = document.getElementById("itemGallery");
        var itemMail = document.getElementById("itemMail");
        var itemTitle = document.getElementById("header");
        //var itemBtn = document.getElementById("upload");
        var itemLang = document.getElementById("headLang");
        var itemAcceptExt = document.getElementById("acceptableExt");
        var colorTitle = document.getElementById("colorTitle");
        if (lang === "fr") {
            var textHomeFr = document.createTextNode("Accueil");
            itemHome.innerHTML = "Accueil";
            var textGalleryFr = document.createTextNode("Galerie");
            itemGallery.innerHTML = "Galerie";
            var textMailFr = document.createTextNode("E-mail")
            itemMail.innerHTML = "Email";
            var itemTitleFr = document.createTextNode("Obtenez la couleur de votre image");
            itemTitle.innerHTML = "Obtenez la couleur de votre image";
            // var textColorTitleFr = document.createTextNode("Couleurs dominantes");
            // colorTitle.innerHTML = "Couleurs dominantes";
            // var galleryTitleFr = document.createTextNode("Galerie d'images");
            // galleryTitle.innerHTML = "Galerie d'images";
            var textLangFr = document.createTextNode("Langues");
            itemLang.innerHTML = "Langues";
            var textAcceptExtFr = document.createTextNode("Extensions acceptées");
            itemAcceptExt.innerHTML = "Extensions acceptées";
        } else {
            var textHomeEn = document.createTextNode("Home");
            itemHome.innerHTML = "Home";
            var textGalleryEn = document.createTextNode("Gallery");
            itemGallery.innerHTML = "Gallery";
            var textMailEn = document.createTextNode("Mail");
            itemMail.innerHTML = "Mail";
            var itemTitleEn = document.createTextNode("Get your image color");
            itemTitle.innerHTML = "Get your image color";
            var textColorTitleEn = document.createTextNode("Image colors");
            colorTitle.innerHTML = "Image colors";
            // var galleryTitleEn = document.createTextNode("Images gallery");
            //galleryTitle.innerHTML = "Images gallery";
            var textLangEn = document.createTextNode("Language");
            itemLang.innerHTML = "Language";
            var textAcceptExtEn = document.createTextNode("Acceptable extensions");
            itemAcceptExt.innerHTML = "Acceptable extensions";
        }
    }
    
    
  
    
    
    displayLang();
    changeLang("fr");
})();