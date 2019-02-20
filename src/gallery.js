import {getNamespace} from "./app";

/**
 * 
 */
var images = JSON.parse(window.localStorage.getItem(getNamespace())) || [];

export function getImages() {
    return images;
}

/**
//      * @param {String} imageName 
//      * @param {Object} imageColors 
//      * @param {String} imageUrl 
//      * @param {String} imageAlt 
//      * @param {Number} imageSize 
//      * @param {String} imageExtension 
//      */
export function addImage(imageName, imageColors, imageUrl, imageAlt, imageExtension) {
    var existingImage = images.find(function (image) {
        return image.url === imageUrl;
    })
    if (!existingImage) {
        images.push({
            name: imageName,
            color: imageColors,
            url: imageUrl,
            alt: imageAlt,
            extension: imageExtension,
        });
    }
}


