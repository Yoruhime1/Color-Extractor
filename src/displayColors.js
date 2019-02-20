import { getNamespace } from "./app";
import { getImages } from "./gallery";

var images = getImages();


export function displayColors() {
    var color = document.querySelector("#color");
    var divColors = document.createElement("div");
    color.prepend(divColors);
    divColors.setAttribute("id", "divColors");
    divColors.style.display = "flex";
    divColors.style.flexDirection = "column";
    // divColors.setAttribute("style", "border: 0.5rem");
    divColors.style.flex = "1 0 auto";
    //var divColorTitle = document.createElement("div");
    // var colorTitle = textInElement("h4", "Couleurs dominantes", divColorTitle);
    // colorTitle.setAttribute("style", "font-family: 'Rajdhani', sans-serif; color: white");
    // colorTitle.setAttribute("id", "colorTitle");
    // imageColor.prepend(divColorTitle, divColors);
}

export function onclickDelete(elemImage) {
    var divColors = document.querySelector("#divColors");
    var imgPreview = document.getElementById("imagePreview");
    divColors.innerHTML = "";
    var imageFound = images.find(function (anElementOfImagesArray) {
        return anElementOfImagesArray.url === elemImage.getAttribute("src");
    });
    // remove l'image de l'affichage 
    var imageFoundKey = images.indexOf(imageFound);
    // Ènlever un element de la pile du tableau
    images.splice(imageFoundKey, 1);
    localStorage.setItem(getNamespace(), JSON.stringify(images));
    // displayImages();
    imgPreview.style.backgroundImage = "url(assets/images/no-image.png)";
    // remove colors de l'affichage
}


