describe("The Greeting function test",function(){

    it("It should return 'Sawubona' when language is 'isizulu' ", function(){
        let GreetMe = greetMe()
        GreetMe.languageSelector("isizulu")

        assert.equal('Sawubona',GreetMe.languageSelector('isizulu'))

    })

    it("It should return 'Dumela' when language is 'setswana' ", function(){
        let GreetMe = greetMe()
        GreetMe.languageSelector("setswane")

        assert.equal('Dumela',GreetMe.languageSelector('setswana'))

    })

    it("It should return 'Sawubona' when language is 'isizulu' ", function(){
        let GreetMe = greetMe()
        GreetMe.languageSelector("english")

        assert.equal('Hello',GreetMe.languageSelector('english'))

    })
})
describe("The GreetedUsers function test", function (){

    it("It should return 2 if two different names are greeted", function(){
        let GreetMe = greetMe()

        GreetMe.greetedUsers('Like')
        GreetMe.greetedUsers('Lihle')

        assert.equal(2,GreetMe.counter())

    })

    it("It should return 3 if three different names are greeted", function(){
        let GreetMe = greetMe()

        GreetMe.greetedUsers('Kyle')

        assert.equal(3,GreetMe.counter())

    })
    it("It should return 4 if five different names are greeted", function(){
        let GreetMe = greetMe()

        GreetMe.greetedUsers('Tom')

        assert.equal(4,GreetMe.counter())

    })
})
describe("The ValidateName function", function(){

    it("It should check if name is alphabets to return name",function(){
        let GreetMe = greetMe()

        GreetMe.validateName('Harry')

        assert.equal('Harry',GreetMe.validateName("Harry"))
    })
    it("It should check if name is not alphabets to return appropriate message",function(){
        let GreetMe = greetMe()

        GreetMe.validateName('Harr0')
        
        assert.equal(undefined,GreetMe.validateName("Harr0"))
    })
    it("It should check if name is alphabets to return name",function(){
        let GreetMe = greetMe()

        GreetMe.validateName('Daisy')

        assert.equal('Daisy',GreetMe.validateName("Daisy"))
    })

})