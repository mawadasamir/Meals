import { Search } from "./search.js";
import { Category } from "./category.js";
import {Area} from "./area.js"
import {Ingredient} from "./ingredient.js"
import {Contact} from "./contact.js"

let category = new Category();
let area = new Area()
let ingredient = new Ingredient()
let contact = new Contact()
let sideWidth= $('.side').innerWidth();
let search = new Search();

$(document).ready(function(){
    $('.side').animate({left: "-250px"},500)
    $('#fa-list-ul').html(`<i class=" fa-solid fa-list-ul"></i>`)
    $('.loading').fadeOut(500)
})

let API=`https://www.themealdb.com/api/json/v1/1/search.php?s= `; 
let row=$('#mainRow')
search.mainStructure(API,row)



$('#fa-list-ul').click(function(){


    if($('.side').css("left") == "0px"){

        $('.side').animate({left: -sideWidth},500)
        $('#fa-list-ul').html(`<i class=" fa-solid fa-list-ul"></i>`)
        

    }
    else{
        $('.side').animate({left: 0},500)
        $('#fa-list-ul').html(`<i class="fa-regular fa-rectangle-xmark"></i>`)

    }




    


    
})