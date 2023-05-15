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
        var lowNames = name.toLowerCase()
        if (namesGreeted[lowNames] === undefined){
            greetingsCounter++;
            //add an entry for the user that was greeted in the Object Map
            namesGreeted[lowNames] = 1;
        } else {
            // update the counter for a specific username
            namesGreeted[lowNames]++;
        }
        return greetingsCounter;
    }
    function errorDisplay(){
        if(!validateName() || languageSelector()){
            return "No name or no language selected"
        }
    }
    function counter(){
        return greetingsCounter;
    }
    function resetCount(){
        greetingsCounter = 0;
    }
    return {
        greetedUsers,
        languageSelector,
        validateName,
        errorDisplay,
        counter,
        resetCount
    }
}