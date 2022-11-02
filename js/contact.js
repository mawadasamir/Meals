export class Contact{
    constructor(){
        this.contactLink=$('.contact').click(this.displayContact.bind(this))
       
    }
    nameRegex=/^[a-zA-Z ]+$/;
    mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    phoneRegex =/^(02)?01[0125][0-9]{8}$/;
    ageRegex =/^([1-9]|[1-9][0-9]|100)$/;
    passwordRegex=/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    nameFlag=false;
    ageFlag=false;
    mailFalg=false;
    phoneFlag=false;
    passwordFlag=false;
    rePasswordFlag=false;
    
    validation(){
      if(this.nameFlag && this.mailFalg
       && this.phoneFlag && this.ageFlag
       && this.passwordFlag && this.rePasswordFlag){
        $("#btnSubmit").removeClass("disabled")
      }

    }
    nameValidation(){
      if( !this.nameRegex.test($('#name').val())){
        $('#namealert').removeClass("d-none")
        
        this.nameFlag=false;
      }
      else{
        $('#namealert').addClass("d-none")
        this.nameFlag=true;

      }
    }
    ageValidation(){
      if( !this.ageRegex.test($('#age').val())){
        $('#agealert').removeClass("d-none")
        this.ageFlag=false;
      }
      else{
        $('#agealert').addClass("d-none")
        this.ageFlag=true;
      }
    }
    mailValidation(){
      if( !this.mailRegex.test($('#mail').val())){
        $('#mailalert').removeClass("d-none")
        this.mailFalg=false;
      }
      else{
        $('#mailalert').addClass("d-none")
        this.mailFalg=true;
      }
    }
    phoneValidation(){
      if( !this.phoneRegex.test($('#phone').val())){
        $('#phonealert').removeClass("d-none")
        this.phoneFlag=false;
      }
      else{
        $('#phonealert').addClass("d-none")
        this.phoneFlag=true;
      }
    
    }
    passwordValidation(){
      if( !this.passwordRegex.test($('#password').val())){
        $('#passwordalert').removeClass("d-none")
        this.passwordFlag=false;
      }
      else{
        $('#passwordalert').addClass("d-none")
        this.passwordFlag=true;
      }
    
    }
    rePasswordValidation(){
      if($("#password").val()==$("#repassword").val()){
        $('#repasswordalert').addClass("d-none")
        this.rePasswordFlag=true;
      }

      else{
        $('#repasswordalert').removeClass("d-none")
        this.rePasswordFlag=false;
      }

    }

    displayContact(){
        $('.side').animate({left: -$('.side').innerWidth()},500)
        $('#fa-list-ul').html(`<i class=" fa-solid fa-list-ul"></i>`)
        let mainRow=$('#mainRow')
        mainRow.html(`
        <div id="contact" class="m-auto w-75 text-center row mb-5 mt-5">
          <h2 class="text-light my-5" >Contact Us...</h2>
          <div class="col-md-6">
          <div >
            <input id="name"  type="text" class=" mb-1 form-control text-bg-dark text-center" placeholder="Enter Your Name">
            <div id="namealert" class="alert mt-1 alert-danger d-none">
            Special Characters and Numbers not allowed
          </div>
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <input id="mail"  type="email" class=" mb-1 form-control text-bg-dark text-center"  placeholder="Enter Your Email">
            <div id="mailalert" class="alert mt-1 alert-danger d-none">
            Enter valid email. *Ex: xxx@yyy.zzz
          </div>
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <input id="phone"  type="tel" class=" mb-1  form-control text-bg-dark text-center"  placeholder="Enter Phone">
            <div id="phonealert" class="alert mt-1 alert-danger d-none">
            Enter valid Phone Number
          </div>
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <input id="age" type="number" class=" mb-1 form-control text-bg-dark text-center"  placeholder="Enter Age">
            <div id="agealert" class="alert mt-1 alert-danger d-none">
            Enter valid Age
          </div>
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <input id="password"  type="password" class=" mb-1  form-control text-bg-dark text-center"  placeholder="Enter Password">
            <div id="passwordalert" class="alert mt-1 alert-danger d-none">
            Enter valid password "Minimum eight characters, at least one letter and one number:"
          </div>
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <input id="repassword" type="password" class=" mb-1 form-control text-bg-dark text-center"  placeholder="Enter RePassword">
            <div id="repasswordalert" class="alert mt-1 alert-danger d-none">
            Enter valid password 
          </div>
          </div>
        </div >
         <button id="btnSubmit" class="w-auto mx-auto my-2 btn btn-outline-danger disabled">Submit</button>
      
          </div>
        
        `)

        $('#name').keyup(this.nameValidation.bind(this))
        $('#name').keyup(this.validation.bind(this))

        $('#age').keyup(this.ageValidation.bind(this))
        $('#age').keyup(this.validation.bind(this))

        $('#mail').keyup(this.mailValidation.bind(this))
        $('#mail').keyup(this.validation.bind(this))

        $('#phone').keyup(this.phoneValidation.bind(this))
        $('#phone').keyup(this.validation.bind(this))

        $('#password').keyup(this.passwordValidation.bind(this))
        $('#password').keyup(this.validation.bind(this))

        $('#repassword').keyup(this.rePasswordValidation.bind(this))
        $('#repassword').keyup(this.validation.bind(this))
      
        
        
    }

   

    
}