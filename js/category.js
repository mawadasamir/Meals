import { Search } from "./search.js";
let search = new Search();
export class Category{
    constructor(){
        this.categoryLink=$('.category').click(this.displayCategory.bind(this))
    }

    async displayCategory(){
            $('.side').animate({left: -$('.side').innerWidth()},500)
            $('#fa-list-ul').html(`<i class=" fa-solid fa-list-ul"></i>`)
             let API=`https://www.themealdb.com/api/json/v1/1/categories.php`;
             let response =await search.fetchAPI(API)
             let categories=[];
             let mainRow=$('#mainRow')
             let box=''
             if(response.categories != null){
                categories=response.categories;
             }
             if(categories.length > 0){
                for (let i = 0; i < categories.length; i++) {
                     box+=`<div id="${categories[i].idCategory}" name="${categories[i].strCategory}"  class=" item col-md-6 col-lg-3 my-3 ">
                     <div  class="layer w-100 position-relative ">
                       <img class="imgLayer w-100" src="${categories[i].strCategoryThumb}" alt="${categories[i].strCategory}" >
                       <div id="item${categories[i].idCategory}" class=" itemLayer bg-white bg-opacity-50 position-absolute top-0 bottom-0 start-0 end-0 ">
                       <div class="h-100 text-center overflow-hidden">
                       <h3> ${categories[i].strCategory}</h3>
                       <p>${categories[i].strCategoryDescription}</p>
                       </div>
        
                       </div>
                   </div>
                     </div>
                     `
                    
                }
               
             }
             mainRow.html(box) 
            $('.item').click(this.displayMealsByCategory)
            $('.item').hover( search.in,search.out)

             
    }

    async displayMealsByCategory(){
        let name =$(this).attr('name')
        let API=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
        let row = $('#mainRow')
        search.mainStructure(API,row)
    }
}