import React, { Component } from 'react';

 
import Roulette from '../roulette'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // Zoo add some more data
            Zoo : ["Panda", "Pig", "AyeAye"],
            // One more array 
            Playground : ["Slide", "Swing", "Seesaw"],
            Food: ["Chicken", "Beef", "Apple"],

            FavoriteAnimal : "",
            FavoritePlayground : "",
            FavoriteFood: "",

        }
    
    }

    Click = (input) => {
       var Num = Math.floor(Math.random() * 3); 
        console.log(Num)
       var animal =  this.state.Zoo[Num]

       this.setState ({
           FavoriteAnimal : animal
       })

        var Welcome = "Our zoo famous animal is " + animal
    }

    favoriteFoodClick = (input) => {
            var Num = Math.floor(Math.random() * 3); 
             console.log(Num)
            var foodItem =  this.state.Food[Num]
     
            this.setState ({
                FavoriteFood: foodItem
            })
     
             var Welcome = "Our best food is " + foodItem


    }
    // Playground outputs
    playGroundClick = () => {

        var Num = Math.floor(Math.random() * 3); 
        console.log(Num)
       var funNow =  this.state.Playground[Num]

       this.setState ({
           FavoritePlayground : funNow
       })

        var Welcome = "Our Playground equipment is " + funNow

    
    }
    

    render() {
        return (
            <div>
                <center>Welcome to Bargain Gambling site. Free stuff monthly. 
                    Go to Roulette page now!

                <form class="box">
                    <h1>Login</h1>
                    <input type="text" name="" placeholder="Username"/>  
                    <input type="password" name="" placeholder="Password"/>
                    <button style={{backgroundColor:"#1289A7"}} type="submit" name="" value="Login">Login</button>
                </form>  
                </center>       
            </div>

        
        );
    }
}

export default Home;