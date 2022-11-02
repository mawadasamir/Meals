import { Search } from "./search.js";
let search = new Search();
export class Area{
    constructor(){
        this.areaLink=$('.area').click(this.displayArea.bind(this))
    }

    async displayArea(){
            $('.side').animate({left: -$('.side').innerWidth()},500)
            $('#fa-list-ul').html(`<i class=" fa-solid fa-list-ul"></i>`)
             let API=`https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
             let response =await search.fetchAPI(API)
             let area=[];
             let mainRow=$('#mainRow')
             let box=''
             if(response.meals != null){
                area=response.meals;
             }
             if(area.length > 0){
                for (let i = 0; i < 20; i++) {
                     box+=`<div name="${area[i].strArea}" class="item col-md-6 col-lg-3 my-3 py-3">
                       <div class=" d-flex flex-column align-items-center justify-content-center">
                       <i class="text-danger fa-solid fa-city fa-3x"></i>
                       <h2 class="text-light"> ${area[i].strArea}</h2>
                       </div>
                     </div>
                     `
                    
                }
               
             }
             mainRow.html(box)
             $('.item').click(this.displayMealsByArea) 

             
    }
    async displayMealsByArea(){
      let name =$(this).attr('name')
      let API=`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
      let row = $('#mainRow')
      search.mainStructure(API,row)
  }
   }