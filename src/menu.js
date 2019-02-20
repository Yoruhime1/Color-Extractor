import $ from "jquery";

const menuItems = [];

export const displayMenuItems = () => {
        const menu = $("#menu");
        $("<a>").text("Color extractor").attr({
            class: "navbar-brand",
            href: ""
        }).insertBefore($("button.navbar-toggler"));

        menuItems.forEach(value) => { menu.append(
                    $("<li>").attr("class", "nav-item text-center").append(
                        $("<a>").attr({
                            href: value.url,
                            class: "nav-link",
                            id: value.id
                        }).text(value.name)
                    )
                    )};
            
/**
 * Description de la fonction
 * @param{String} itemName
 * @param{String} itemUrl
 * @param{String} itemId
 */
const pushItem = (itemName, itemUrl, itemID) => {
    menuItems.push({
        name: itemName,
        url: itemUrl,
        id: itemID,
    });
};
export default pushItem;

pushItem("Home", "./", "itemHome");
pushItem("Gallery", "#gallery", "itemGallery");
pushItem("Mail", "#", "itemMail");