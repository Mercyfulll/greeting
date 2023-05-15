const nameInput = document.querySelector(".text");
const greetMeBtn = document.querySelector(".gbutton")
const resetBtn = document.querySelector(".rbutton")
const greetDisplay = document.querySelector(".output")
const greetName = document.querySelector(".gname")
const counter = document.querySelector(".count") 
const error = document.querySelector(".error")
const radioBtn = document.querySelector("input[name='language']:checked")

var greet = greetMe()
greetingsCounter = localStorage.getItem("screenCounter", greet.greetedUsers(nameInput.value)) || 0;
// Refresh webpage and get from localStorage
counter.innerHTML = greet.greetedUsers(nameInput.value)


greetMeBtn.addEventListener("click",function(){
    var name = nameInput.value;
    var radioBtn = document.querySelector("input[name='language']:checked")
    
    if(greet.validateName(name) && radioBtn){ 
        greetName.innerHTML = greet.validateName(name)
        greetDisplay.innerHTML = greet.languageSelector(radioBtn.value);
        // set value into localStorage
        localStorage.setItem("screenCounter", greet.greetedUsers(name))
        // get from localStorage
        counter.innerHTML = localStorage.getItem("screenCounter", greet.greetedUsers(name))
    }   
    if(!greet.validateName(name) || !radioBtn){
        error.innerHTML = greet.errorDisplay() 
        setTimeout(function(){
            var msg = error.innerHTML = ""
            msg.parentNode.removeChild(msg)
        },2500)
    }         
})

resetBtn.addEventListener("click",function(){
    localStorage.clear()
    nameInput.value = ''
    counter.innerHTML = 0;
    greet.resetCount()
    greetName.innerHTML = 'Name';
    greetDisplay.innerHTML = 'Greeting';
    document.querySelector("input[name='language']:checked").checked = false;
        
    

     
})