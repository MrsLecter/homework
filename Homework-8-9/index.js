class User {
  constructor(name = "Ivan", lastName = "Ivanov", age = null, gender = null, phone = null) {
    this._name = name;
    this._lastName = lastName;
    this._age =(((age>0)&&(age<100)) ? (age) : (null));
    this._gender = (((gender='man') || (gender = 'woman')) ? (gender) : (null));
    this._phone = phone;
  }
  get name(){
    return this._name;
  }
  set name(n){
    this._name = n;
  }
  get lastName(){
      return this._lastName;
  }
  set lastName(n){
    this._lastName = n;
  }
  get fullName(){
    return this._name +' ' +this._lastName;
  }
  get age(){
    return this._age;
  }
  set age(n){
      if(Number.isInteger(n) && (n >= 0) && (n<120)){
          this._age = n;
      }else{
          console.log("invalid parametr");
      }
  }
  get gender(){
    return this._gender;
  }
  set gender(n){
      if((n='man') || (n='woman')){
          this._gender = n;
      }else{
          console.log("invalid parametr");
      }
    
  }
  get phone(){
    return this._phone.substring(0, 3)+'-'+this._phone.substring(3, 6)+'-'+this._phone.substring(3, 6)+'-'+this._phone.substring(7);;
  }
  set phone(n){
    this._phone =  n.substring(0, 3)+'-'+n.substring(3, 6)+'-'+n.substring(3, 6)+'-'+n.substring(7);
  }
  get fullInfo(){
      return this._name + " " + this._lastName + " " + this._age +" " + this._gender + " " + 
      this._phone.substring(0, 3)+'-'+this._phone.substring(3, 6)+'-'+this._phone.substring(3, 6)+'-'+this._phone.substring(7);
  }
}

class Developer extends User{
  constructor(name, lastName, age, gender, phone){
    super(name, lastName, age, gender, phone);
    console.log('You have new developer!');
  }
}
  
class Designer extends User {
  constructor(name, lastName, age, gender, phone){
    super(name, lastName, age, gender, phone);
    console.log('You have new designer!');
  } 
}

let dev = new Developer('Ivan', "Ivanov", 350);
let des = new Designer("Anastasiya", "Smirnova", 200, 'superWoman', '0557589843');
dev.name = "Artem";
console.log(dev.fullName + ' age: ' + dev.age);
console.log(des.fullInfo);

