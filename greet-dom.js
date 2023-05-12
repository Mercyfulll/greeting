const nameInput = document.querySelector(".text");
const greetMeBtn = document.querySelector(".gbutton")
const resetBtn = document.querySelector(".rbutton")
const greetDisplay = document.querySelector(".output")
const greetName = document.querySelector(".gname")
const counter = document.querySelector(".count") 
const textboxError = document.querySelector(".texterror")
const radioBtnError = document.querySelector(".radioerror")
const radioBtn = document.querySelector("input[name='language']:checked")

var greet = greetMe()
greetingsCounter = localStorage.getItem("screenCounter", greet.greetedUsers()) || 0;
// Refresh webpage and get from localStorage
counter.innerHTML = greetingsCounter


greetMeBtn.addEventListener("click",function(){
    var name = nameInput.value;
    var radioBtn = document.querySelector("input[name='language']:checked")
    
    if(greet.validateName(name) && radioBtn){
        textboxError.innerHTML = ''
        radioBtnError.innerHTML = '' 
        greetName.innerHTML = greet.validateName(name)
        greetDisplay.innerHTML = greet.languageSelector(radioBtn.value);
        // set value into localStorage
        localStorage.setItem("screenCounter", greet.greetedUsers(name))
        // get from localStorage
        counter.innerHTML = localStorage.getItem("screenCounter", greet.greetedUsers())
    }   
    if (!radioBtn){
        var msg = radioBtnError.innerHTML = "Please select language"
        setTimeout(function(){
            var msg = radioBtnError.innerHTML = ""
            msg.parentNode.removeChild(msg)
        },2500)
    } 
    if(!greet.validateName(name)){
        textboxError.innerHTML = "Please enter Name - alphabets only with no spaces" 
        setTimeout(function(){
            var msg = textboxError.innerHTML = ""
            msg.parentNode.removeChild(msg)
        },2500)
    } 
    
        
})

resetBtn.addEventListener("click",function(){
    counter.innerHTML = 0;
    greet.resetCount()
    nameInput.value = ''
    textboxError.innerHTML = ''
    radioBtnError.innerHTML = ''
    greetName.innerHTML = 'Name';
    greetDisplay.innerHTML = 'Greeting';
    radioBtn.checked = false;
    

     
})
