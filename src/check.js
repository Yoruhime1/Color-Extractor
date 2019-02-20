import { getImages } from "./gallery";


var acceptableExtensions = ["png", "jpg"];
var maxFileUpload = 20;
/**
 * @param{Object} image
 * @returns{Boolean} 
 */
export function isExtensionValid(image) {
    for (var key in acceptableExtensions) {
        if (image.extension === acceptableExtensions[key]) {
            return true;
        }
    }
    return false;
}

export function isGalleryFull(images) {
    var images = getImages();
    return (images.length > maxFileUpload);
}

export function getAcceptableExt(){
    return acceptableExtensions;
}