import React, { Component } from 'react';

 
import Roule from '../roulette'


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
                <center>
                        <div>Welcome to Zoo</div>
                        <button onClick = {() =>this.Click(1)}>what animal gonna play</button>
                        
                        <div>
                        <button onClick = {this.playGroundClick}>What poopgrounds is they want</button>
                        </div>
                     
                        <div>
                        <button onClick = {this.favoriteFoodClick}>What favorite food</button>
                        </div>

                     <div style = {{fontSize : "45"}}>   
                         {this.state.FavoriteAnimal}
                     </div>

                     <div style = {{fontSize : "45"}}>   
                         {this.state.FavoriteFood}
                     </div>

                    <div style = {{fontsize : "45"}}>
                        {this.state.FavoritePlayground}
                        </div>
                    <Roule/>
                </center>                                                                                                        
            </div>
        );
    }
}

export default Home;