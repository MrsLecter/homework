//import "./styles.css";
// example https://getbootstrap.com/docs/4.5/components/forms/#validation

class Validation {
  constructor(form, parametrs) {
    this.form = form;
    this.name = form.elements.name;
    this.phone = form.elements.phone;
    this.email = form.elements.email;
    this.password = form.elements.password;
  //----------validation regexp --------
    this.checkName = /[A-Za-z]{3,}/g;
    //this.checkPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10}(\s*)?$/;
    //this.checkPhone = /^\+38\([\d]{3}\)-[\d]{3}-[\d]{2}-[\d]{2}$/; 
    this.checkPhone  = /^[\d]{10}$/;
    this.checkEmail = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/g;
    this.checkPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}/g; 
  
    
    //this.parametrs = parametrs;
  }

  init() {
    //console.log("OK " + this.name.value);
    let _ = this;

    //--------------------------------------------------------------------
    this.name.onblur = function(){
      _.todoSome(_.name, _.checkName);
      // if(_.name.value.match(_.checkName)){
      //   ( _.name.classList.contains("is-invalid")) ? _.name.classList.remove("is-invalid") : _.name.classList.remove("is-valid");
      //   _.name.classList.add("is-valid");
      // }else if(_.name.value.match(_.checkName)===null){
      //   ( _.name.classList.contains("is-invalid")) ? _.name.classList.remove("is-invalid") : _.name.classList.remove("is-valid");
      //   _.name.classList.add("is-invalid");
      // }
    };
    //this.name.onfocus = function(){
      //( _.name.classList.contains("is-invalid")) ? _.name.classList.remove("is-invalid") : _.name.classList.remove("is-valid");
    //};
    //--------------------------------------------------------------------
    this.phone.onblur = function(){
      
      if(mask.unmaskedValue.match(_.checkPhone)){
        //console.log(mask.unmaskedValue +" === "+_.checkPhone);
        ( _.phone.classList.contains("is-invalid")) ? _.phone.classList.remove("is-invalid") : _.phone.classList.remove("is-valid");
        _.phone.classList.add("is-valid");
      }else if(mask.unmaskedValue.match(_.checkPhone)===null){
        //console.log(mask.unmaskedValue +" === "+_.checkPhone);
        ( _.phone.classList.contains("is-invalid")) ? _.phone.classList.remove("is-invalid") : _.phone.classList.remove("is-valid");
        _.phone.classList.add("is-invalid");
      }
    };
    this.phone.onfocus = function(){
    // _.phone.value = "+38(0";
      ( _.phone.classList.contains("is-invalid")) ? _.phone.classList.remove("is-invalid") : _.phone.classList.remove("is-valid");
    };
    this.phone.oninput = function(){
      console.log(mask.value);
      // let input = _.phone.value;
      // if(input.length == 0){
      //   _.phone.value += "+38(0";
      // }else if(input.length == 7){
      //   _.phone.value += ")-";
      // }else if(input.length == 9){
      //   _.phone.value += "-";
      // }else if(input.length ==12){
      //   _.phone.value += "-";
      // }else if(input.length ==15){
      //   _.phone.value += "-";
      // }
    };
    
    let maskOptions = {
      mask: '+38(000)000-00-00',
    };
    let mask = IMask(this.phone, maskOptions);
    // console.log(mask.value);
  //   this.phone.onfocus = function(){
  //     ( _.phone.classList.contains("is-invalid")) ? _.phone.classList.remove("is-invalid") : _.phone.classList.remove("is-valid");
  // }
    //---------------------------------------------------------------------
    this.email.onblur = function(){
      _.todoSome(_.email, _.checkEmail);
      // if(_.email.value.match(_.checkEmail)){
      //   ( _.email.classList.contains("is-invalid")) ? _.email.classList.remove("is-invalid") : _.email.classList.remove("is-valid");
      //   _.email.classList.add("is-valid");
      // }else if(_.email.value.match(_.checkEmail)===null){
      //   ( _.email.classList.contains("is-invalid")) ? _.email.classList.remove("is-invalid") : _.email.classList.remove("is-valid");
      //   _.email.classList.add("is-invalid");
      // }
    };
    //this.email.onfocus = function(){
      //_.email.value = "";
      //( _.email.classList.contains("is-invalid")) ? _.email.classList.remove("is-invalid") : _.email.classList.remove("is-valid");
    //};
    //--------------------------------------------------------------------
    this.password.onblur = function(){
      _.todoSome(_.password, _.checkPassword);
      // if(_.password.value.match(_.checkPassword)){
      //   ( _.password.classList.contains("is-invalid")) ? _.password.classList.remove("is-invalid") : _.password.classList.remove("is-valid");
      //   _.password.classList.add("is-valid");
      // }else if(_.password.value.match(_.checkPassword)===null){
      //   ( _.password.classList.contains("is-invalid")) ? _.password.classList.remove("is-invalid") : _.password.classList.remove("is-valid");
      //   _.password.classList.add("is-invalid");
      // }
    };
    //this.password.onfocus = function(){
      //_.password.value = "";
     // ( _.password.classList.contains("is-invalid")) ? _.password.classList.remove("is-invalid") : _.email.classList.remove("is-valid");
    //};
    this.password.oninput = function(){
      ( _.password.classList.contains("is-invalid")) ? _.password.classList.remove("is-invalid") : 
      ( _.password.classList.contains("is-valid")) ? _.password.classList.remove("is-valid") : null ;
      
      if(_.password.value.length < 16){
        if(_.password.value.match(_.checkPassword)){
          _.password.classList.add("is-valid");
        }else if(_.password.value.match(_.checkPassword)===null){
          _.password.classList.add("is-invalid");
        }
      }else if(_.password.value.length > 15){
        _.password.classList.add("is-invalid");
      }
      //( _.password.classList.contains("is-invalid")) ? _.password.classList.remove("is-invalid") : _.email.classList.remove("is-valid");
    }
    
  }
  todoSome(param, reg){
    //console.log("some");
    //console.log(param.value);
    if(param.value.match(reg)){
      ( param.classList.contains("is-invalid")) ?param.classList.remove("is-invalid") : param.classList.remove("is-valid");
      param.classList.add("is-valid");
    }else if(param.value.match(reg)===null){
      ( param.classList.contains("is-invalid")) ? param.classList.remove("is-invalid") : param.classList.remove("is-valid");
      param.classList.add("is-invalid");
    }
    
  }
}


let myform = (document.getElementsByClassName("needs-validation"))[0];
const validation = new Validation(myform);

validation.init();
