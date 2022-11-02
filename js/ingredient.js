import { Search } from "./search.js";
let search = new Search();
export class Ingredient{
    constructor(){
        this.ingredientLink=$('.ingredient').click(this.displayIngredient.bind(this))
    }

    async displayIngredient(){
             $('.side').animate({left: -$('.side').innerWidth()},500)
            $('#fa-list-ul').html(`<i class=" fa-solid fa-list-ul"></i>`)
             let API=`https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
             let response =await search.fetchAPI(API)
             let area=[];
             let mainRow=$('#mainRow')
             let box=''
             if(response.meals != null){
                area=response.meals;
             }
             if(area.length > 0){
                for (let i = 0; i < 20; i++) {
                     box+=`<div name="${area[i].strIngredient}" class=" item ingrediant  col-md-6 col-lg-3 my-3 py-3 overflow-hidden">
                       <div class="d-flex flex-column align-items-center justify-content-center ">
                       <i class="text-success fa-solid fa-bowl-food fa-3x"></i>
                       <h2 class="text-light text-center"> ${area[i].strIngredient}</h2>
                       <p class="text-light text-center" >${area[i].strDescription}</p>
                       </div>
                     </div>
                     `
                    
                }
               
             }
             mainRow.html(box) 
             $('.item').click(this.displayMealsByIngredient) 
             
    }
    async displayMealsByIngredient(){
      let name =$(this).attr('name')
      let API=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`
      let row = $('#mainRow')
      search.mainStructure(API,row)
  }
   }