var userVarName = "abi"



import * as MODEL from "../model/model.js";

function init(){

    $("nav a").click(function (e) {

        let btn = this.id;
        let contentID = btn + "Content";
        
        MODEL.changePage(contentID);
    });
}

// this checks for all the elements to be read by the browser
$(document).ready(function(){

    init();
})