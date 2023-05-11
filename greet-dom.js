const nameInput = document.querySelector(".text");
const greetMeBtn = document.querySelector(".gbutton")
const resetBtn = document.querySelector(".rbutton")
const greetDisplay = document.querySelector(".output")
const greetName = document.querySelector(".gname")
const counter = document.querySelector(".count") 
const textboxError = document.querySelector(".texterror")
const radioBtnError = document.querySelector(".radioerror")

var greet = greetMe()
greetingsCounter = localStorage.getItem("screenCounter") || 0;
// Refresh webpage and get from localStorage
counter.innerHTML = greetingsCounter

greetMeBtn.addEventListener("click",function(){
    var name = nameInput.value;
    var radioBtn = document.querySelector("input[name='language']:checked")

    if (radioBtn){   
        radioBtnError.innerHTML = ''       
    }
    if (!radioBtn){
        radioBtnError.innerHTML = "Please select language"
    } 
    if(!greet.validateName(name)){
        textboxError.innerHTML = "Please enter Name - alphabets only with no spaces" 
    }
    if(greet.validateName(name)){
        textboxError.innerHTML = ''
    } 
    if(greet.validateName(name) && radioBtn){

        greetName.innerHTML = greet.validateName(name)
        greetDisplay.innerHTML = greet.languageSelector(radioBtn.value);
        // set value into localStorage
        localStorage.setItem("screenCounter", greet.greetedUsers(name))
        // get from localStorage
        counter.innerHTML = localStorage.getItem("screenCounter")
    }   
        
})

resetBtn.addEventListener("click",function(){
    nameInput.value = ''
    textboxError.innerHTML = ''
    radioBtnError.innerHTML = ''
    counter.innerHTML = localStorage.clear();
    counter.innerHTML = 0; 
    document.querySelector("input[name='language']:checked").checked = false;
    greetName.innerHTML = 'Name';
    greetDisplay.innerHTML = 'Greeting';
})
