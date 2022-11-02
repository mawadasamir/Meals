export class Search{
    constructor(){
        this.searchLink=$('.search').click(this.displaySearch.bind(this))  
    }
    
    displaySearch(){
        $('.side').animate({left: -$('.side').innerWidth()},500)
        $('#fa-list-ul').html(`<i class=" fa-solid fa-list-ul"></i>`)
        let mainRow=$('#mainRow')
        mainRow.html(`<div class="col-md-6">
        <div>
          <input type="text" class="searchName form-control text-bg-dark text-center" placeholder="Search By name">
        </div>
      </div>
      <div class="col-md-6">
        <div>
          <input type="text" class="searchLetter form-control text-bg-dark text-center" maxlength="1" placeholder="Search By First Letter...">
        </div>
      </div>
      <div class="container w-100 mt-5">
        <div class="row" id="rowData">
          
  
        </div>
      </div>`)
      this.searchName=$('.searchName').keyup(this.searchByName.bind(this))
      this.searchLetter=$('.searchLetter').keyup(this.searchByLetter.bind(this))
    }
    async fetchAPI(API){
        let response = await fetch(API)
        response = await response.json();
        return response;

    }

 
    async mainStructure(API,row){
             let response =await this.fetchAPI(API);
             let meals=[];
             let rowData=row
             let box=''
             if(response.meals != null){
                meals=response.meals;
             }
             if(meals.length > 0){
                for (let i = 0; i < meals.length; i++) {
                     box+=`<div id="${meals[i].idMeal}" class=" item col-md-6 col-lg-3 my-3 ">
                     <div class="layer w-100 position-relative ">
                       <img class="imgLayer w-100" src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}" >
                       <div id="item${meals[i].idMeal}" class=" itemLayer bg-white bg-opacity-50 position-absolute top-0 bottom-0 start-0 end-0  ">
                       <div class="h-100 d-flex align-items-center">
                       <h3> ${meals[i].strMeal}</h3>
                       </div>
        
                       </div>
                   </div>
                     </div>
                     `
                    
                }
               
             }
             rowData.html(box) 
              $('.item').click(  this.mealDetails  )
              $('.item').hover(  this.in,this.out )


    }
  
    async searchByName(){
             let searchNameValue=$('.searchName').val();
             let API=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchNameValue}`;
             let row=$('#rowData')
             this.mainStructure(API,row)
             
    }
    async searchByLetter(){
        let searchLetterValue=$('.searchLetter').val()
        let API=`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetterValue}`;
        let row=$('#rowData')
        this.mainStructure(API,row)

    }
   
    in(){
      let m=$(this).attr('id')
      let id="#item"+m
      $(id).slideDown(500);

  }
    out(){
        let m=$(this).attr('id')
        let id="#item"+m
        $(id).slideUp(500);
        
    }
    async mealDetails(){
      let id=$(this).attr('id')
      let API=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      let response = await fetch(API)
      response = await response.json();
      let meals=[];
      let rowData=''
      let recipes=''
      let tagsArray=[]
      let tags=''
       if(response.meals != null){
         meals=response.meals;
             }
      for (let i = 1; i < 21; i++) {
         let strMeasure='strMeasure'+i
         let strIngredient='strIngredient'+i
         if(meals[0][strIngredient]){
          recipes += `<li class="my-3 mx-1 p-1 alert alert-success ">${meals[0][strMeasure]} ${meals[0][strIngredient]}</li>` 
         }  
      }
      tagsArray=meals[0].strTags.split(",")
      for (let i = 0; i < tagsArray.length; i++) {
        tags+=`<li class="my-3 mx-1 p-1 alert alert-danger ">${tagsArray[i]}</li>`
      }
      rowData=` <div class="col-md-4 text-white">
      <div class="text-center" >
        <img class="w-100" src="${meals[0].strMealThumb}" alt="${meals[0].strMeal}"><br>
        <h1>${meals[0].strMeal}</h1>
      </div>
    </div>
    <div class="col-md-8 text-white text-left">
      <div>
        <h2>Instructions</h2>
        <p>${meals[0].strInstructions}</p>
        <p>
          <b class="fw-bolder">Area :</b> ${meals[0].strArea}
        </p>
        <p>
          <b class="fw-bolder">Category :</b>${meals[0].strCategory}
        </p>
        <h3>Recipes :</h3>
        <ul id="recipes" class="d-flex flex-wrap" >
        ${recipes}
        </ul>
        <h3 class="my-2 mx-1 p-1">Tags :</h3>
        <ul id="tags" class="d-flex flex-wrap" >
        ${tags}
        </ul>
        <a class="btn btn-success text-white" target="_blank" href="${meals[0].strSource}">Source</a>
        <a class="btn youtube text-white" target="_blank" href="${meals[0].strYoutube}">Youtube</a>
      </div>
    </div>`
    $('#mainRow').html(rowData)

    }

}