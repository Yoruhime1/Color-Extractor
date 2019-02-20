import "bootstrap";
import $ from "jquery";
import {displayMenuItems } from "./menu";
import {displayColors} from "./displayColors";
import { displayImages} from "./displayImages";
import { displayUpload } from "./displayUpload";
import { displayExtensions } from "./displayExtensions";
import { displayTitle } from "./displayTitle";


$(function(){
    displayMenuItems();
    displayColors();
    displayTitle();
    displayImages();
    displayUpload();
    displayExtensions();
});



