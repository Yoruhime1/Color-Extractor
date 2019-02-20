import 'bootstrap';
import $ from "jquery";
import {displayMenuItems } from "./menu";
import {displayColors} from "./displayColors";
import { displayImages} from "./displayImages";
import { displayUpload } from "./displayUpload";
import { displayExtensions } from "./displayExtensions";
import { displayTitle } from './displayTitle';

console.log("Hello");

$(function(){
    console.log("Execution");
    displayMenuItems();
    displayColors();
    displayTitle();
    displayImages();
    displayUpload();
    displayExtensions();
});

console.log("World");

