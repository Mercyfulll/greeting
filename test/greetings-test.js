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

describe("GreetedUsers function test", function (){

        it("It should return 1 if name greeted once ", function(){
            let GreetMe = greetMe()
            GreetMe.greetedUsers('Mike')

            assert.deepEqual({Mike : 1},GreetMe.getGreetedUsers())

        })
    }) 
