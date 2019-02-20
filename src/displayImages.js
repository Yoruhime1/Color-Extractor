import { textInElement } from "./textInElement";
import { isExtensionValid } from "./check";
import { getImages } from "./gallery";
import { onclickDelete } from "./displayColors";


var gallery = document.querySelector("#gallery");
var imgPreview = document.getElementById("imagePreview");
var images = getImages();

/**  
 * @param {String} imageName 
 * @param {String} imageUrl 
 * @param {Number} imageSize 
 * @param {String} imageExtension 
 */
export function displayImages() {
    gallery.innerHTML = "";
    if (!images.length){
        textInElement("p", "No images have been saved", gallery);
        return;
    }
    for (var key in images) {
        var galleryImage = document.createElement("img");
        if (null === images[key].extension || isExtensionValid(images[key])) {
            galleryImage.setAttribute("alt", images[key].name);
            galleryImage.setAttribute("src", images[key].url);
            galleryImage.setAttribute("class", "img-fluid img-thumbnail");

            var divImg = document.createElement("div");
            divImg.setAttribute("class", "col-xs-6 col-xl-3");
            gallery.appendChild(divImg);
            divImg.appendChild(galleryImage);
            registerEvent(galleryImage);
        }
    }
}
function registerEvent(galleryImage) {
    galleryImage.onclick = function () {
        onClickImage(this);
    };
}

export function onClickImage(galleryImage) {
    var delBtn = document.createElement("button");
    var textBtn = document.createTextNode("Delete");
    var divColors = document.querySelector("#divColors");
    divColors.innerHTML = "";
    divBtn.innerHTML = "";
    divBtn.appendChild(delBtn);
    delBtn.appendChild(textBtn);
    delBtn.setAttribute("class", "btn");
    delBtn.setAttribute("id", "deleteBtn");
    delBtn.setAttribute("style", "background-color:#254974; color: white");
    divBtn.style.flex = "0 1 auto";
    imgPreview.style.backgroundImage = galleryImage.style.backgroundImage;
    imgPreview.style.minHeight = "22em";
    imgPreview.style.backgroundRepeat = "no-repeat";
    imgPreview.style.backgroundImage = "url(" + galleryImage.getAttribute("src") + ")"
    imgPreview.style.backgroundPosition = "center";
    imgPreview.style.backgroundSize = "contain";
    var url = galleryImage.getAttribute("src");
    for (var key in images) {
        var imageObject = images[key];
        if (imageObject.url === url) {
            var colors = imageObject.color;
            for (var index in colors.background_colors) {
                var imgColor = colors.background_colors[index];
                var paletteCode = imgColor.closest_palette_color_html_code;
                var divColor = document.createElement("div");
                divColor.appendChild(document.createTextNode(imgColor.closest_palette_color));
                divColor.setAttribute("style", "background-color:" +
                    paletteCode + "; height:2em");
                    divColor.style.color = "#F0F0F0";
                divColors.appendChild(divColor);
            }
            for (var index in colors.image_colors) {
                var imgColor = colors.image_colors[index];
                var paletteCode = imgColor.closest_palette_color_html_code;
                var divColor = document.createElement("div");
                divColor.appendChild(document.createTextNode(imgColor.closest_palette_color));
                divColor.setAttribute("style", "background-color:" +
                    paletteCode + "; height:2em");
                    divColor.style.color = "#F0F0F0";
                divColors.appendChild(divColor);
            }
            for (var index in colors.foreground_colors) {
                var imgColor = colors.foreground_colors[index];
                var paletteCode = imgColor.closest_palette_color_html_code;
                var divColor = document.createElement("div");
                divColor.appendChild(document.createTextNode(imgColor.closest_palette_color));
                divColor.setAttribute("style", "background-color:" +
                    paletteCode + "; height:2em");
                    divColor.style.color = "#F0F0F0";
                divColors.appendChild(divColor);
            }
        }
    }
            delBtn.addEventListener("click", function () {
                onclickDelete(galleryImage)
            });
}
