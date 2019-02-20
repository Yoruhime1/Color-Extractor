import $ from 'jquery';

import { getLang } from "./app";


export const displayTitle = () => {
    $(`#header`).append($(`<h1>`).text(`fr` === getLang()
        ? `Obtenez la couleur de votre image`
        : `Get your image color`)
    );
};