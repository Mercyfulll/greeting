const nameInput = document.querySelector(".text");
const greetMeBtn = document.querySelector(".button")
const greetDisplay = document.querySelector(".output")
const greetName = document.querySelector(".gname")
const counter = document.querySelector(".count") 
const textboxError = document.querySelector(".texterror")
const radioBtnError = document.querySelector(".radioerror")

var greet = greetMe()
let count = 0

greetMeBtn.addEventListener("click",function(){
    var name = nameInput.value;
    var radioBtn = document.querySelector("input[name='language']:checked")
    count ++

    if (!radioBtn){
        radioBtnError.innerHTML = "Please select language"
    } else if (radioBtn){
        counter.innerHTML = greet.greetedUsers[name];
        greetDisplay.innerHTML = greet.languageSelector(radioBtn.value);
        greetName.innerHTML = greet.validateName(name)
        radioBtnError.innerHTML = ''
        textboxError.innerHTML = greet.errorTextbox(name)        
    }
    
})
