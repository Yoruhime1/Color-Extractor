import { isGalleryFull } from "./check";
import { textInElement } from "./textInElement";
import { addImage, getImages } from "./gallery";
import { displayImages } from "./displayImages";
import { getNamespace } from "./app";

const file = document.querySelector("#file");

export const displayUpload = () => {
    if (!isGalleryFull()) {
        const upload = document.getElementById("upload");
        const txt = document.createTextNode("Upload your image");
        const form = textInElement("form", "", upload);
        const inputUrl = textInElement("input", "", form);
        const inputSubmit = textInElement("input", "", form);
        const uploadBtn = textInElement("button", "", );
        form.setAttribute("action", "");
        form.setAttribute("method", "GET");
        form.setAttribute("class", "form-group mb-3");
        form.style.margin = "1em 0";
        inputUrl.setAttribute("type", "url");
        inputUrl.setAttribute("required", "required");
        inputUrl.setAttribute("class", "form-control");
        inputSubmit.setAttribute("type", "submit");
        inputSubmit.setAttribute("value", "Send");
        inputSubmit.setAttribute("class", "btn");
        inputSubmit.setAttribute("style", "font-family: 'Rajdhani', sans-serif; background-color:#1173A5; color: white");
        inputSubmit.style.margin = "1em 0";
        uploadBtn.appendChild(txt);
        upload.appendChild(uploadBtn);
        uploadBtn.setAttribute("class", "col-sm-3 col-md-6 btn")
        uploadBtn.setAttribute("style", "font-family: 'Rajdhani', sans-serif; color: white; background-color: #DB171C");
        form.addEventListener("submit", function (event) {
            onSubmitForm(event, this)
        })
        uploadBtn.addEventListener("click", function () {
            file.click();
        });
        file.addEventListener("change", function (event) {
            // console.log(file.files[0]);
            onChangeFile(event)
        });
    } else {
        textInElement("h4", "Gallery is full", upload);
    }
}

  /**
     * @param {Event} event
     * @param {File} uploadedFile
     */
    function onChangeFile(event) {
        // Avoir le client
        var xhr = new XMLHttpRequest;
        // Ouvrir une connexion
        xhr.open(
            "POST", "https://api.imagga.com/v2/colors");
        // Enregistrer des events handlers
        xhr.onload = function (event) {
            var reader = new FileReader;
            reader.readAsDataURL(file.files[0]);
            reader.onerror = function (event) {}
            reader.onload = function (event) {
                console.log(reader.result);
                var colorObject = JSON.parse(xhr.responseText);
                if (200 !== xhr.status) {
                    return alert("It's not a valid extension");
                }
                addImage(
                    null,
                    colorObject.result.colors,
                    reader.result,
                    null,
                    null,
                );
                displayImages();
                gallery.lastChild.firstChild.click();
                localStorage.setItem(getNamespace(), JSON.stringify(getImages()));
                return;
            }
        };
        xhr.setRequestHeader(
            "Authorization", "Basic YWNjXzk4MDQzYmIwOGFhMTUwNzo3MjUxOGYxNmI3MDBiMWM1Njk1ZTNhNTA3OTJjMzA1ZA==");
        var body = new FormData;
        body.append("image", file.files[0])
        xhr.send(body);
    }

    /**  
     * @param {Event} event 
     * @param {Function} submitForm 
     */
        function onSubmitForm(event, form) {
        event.preventDefault();
        var xhr = new XMLHttpRequest;
        xhr.open("GET", "https://api.imagga.com/v2/colors?image_url=" +
            form.elements[0].value);
        xhr.onload = function (event) {
            var colorObject = JSON.parse(this.responseText);
            if (200 !== this.status) {
                return alert("Format non pris en charge");
            }
            addImage(
                null,
                colorObject.result.colors,
                form.elements[0].value,
                form.elements[0].value,
                null,
            );
            displayImages();
            console.log(gallery.lastChild.fisrtChild);
            gallery.lastChild.firstChild.click();
            localStorage.setItem(getNamespace(), JSON.stringify(getImages()));
            return;
        };
        xhr.setRequestHeader("Authorization", "Basic YWNjXzk4MDQzYmIwOGFhMTUwNzo3MjUxOGYxNmI3MDBiMWM1Njk1ZTNhNTA3OTJjMzA1ZA==");
        xhr.send();
    }