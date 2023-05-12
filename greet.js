var greetingsCounter = 0;

function greetMe(){
    var namesGreeted = {};

    function validateName(name){
        var valid = /^[A-Za-z]+$/
        var validName = valid.test(name)
        if(validName){
            return name 
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
        return greetingsCounter;
    }
    function counter(){
        return greetingsCounter;
    }
    return {
        greetedUsers,
        languageSelector,
        validateName,
        counter

    }
}