function greetMe(){
    var namesGreeted = {};
    var greetingsCounter = 0
    var message = ''

    function validateName(name){
        message = ''
        var valid = /^[A-Za-z]+$/
        var validName = valid.test(name)
        if(validName){
            return name 
       }    
    }
    function errorTextbox(name){
        message = ''
        var valid = /^[A-Za-z]+$/
        var validName = valid.test(name)
        if (!validName){
            return message = "Please enter Name - alphabets only with no spaces)"
        }
        if (validName == "" ){
            return message = "Please enter Name"
        }else{
            return message
        }
    }
    function errorRadioBtn(language){
        message = ''
        if(language == null){
            message = "Please select a language"
        }else{
            return message = "Please select a language"
        }
    }
    function languageSelector(language){
        if(language == 'english'){
            return 'Hello'
       }else if (language === 'setswana'){
            return 'Dumela' 
       }else if (language == 'isizulu'){
            return 'Sawubona'            
       }
    }
    function greetedUsers(name){
        if (namesGreeted[name] === undefined){
            greetingsCounter++;
            //add an entry for the user that was greeted in the Object Map
            namesGreeted[name] = 1;
        } else {
            // update the counter for a specific username
            namesGreeted[name]++;
        }
    }
    function getGreetedUsers(name){
        return  namesGreeted[name];
    }
    return {
        errorTextbox,
        errorRadioBtn,
        greetedUsers,
        languageSelector,
        getGreetedUsers,
        validateName

    }
}