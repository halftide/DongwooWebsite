import React, { Component } from 'react';

 
import Roulette from '../roulette'
import imageSource from '../purpl.jpeg'

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
            Channel : 0
        }
    
    }

    Click = (input) =>  {
        var number = 0
        switch (input) {
            
            case 1:  number = 1
            break;
            
            case 2: number = 2
            break;

            case 3: number = 3
            break;

            default : number = 4
        
        }

        window.alert("the number is " +  number)
    }

    musicPlayer()  {
        var channelNum = this.state.Channel // Int type

        //Condition operator
        switch (channelNum) {
            case 1: return <div>Music List</div>
            case 2: return <div><div><iframe width="560" height="315" src="https://www.youtube.com/embed/5QP_W-yAlRc" frameborder="0" allow="accelerometer; autoplay; clipboard-write;icture-in-picture" allowfullscreen></iframe></div></div>
            case 3: return <div> <iframe width="560" height="315" src="https://www.youtube.com/embed/pLZq3jgE6qA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            case 4: return <div> <iframe width="560" height="315" src="https://www.youtube.com/embed/G1smTIT8fLU" frameborder="0" allow="accelerometer; autoplay encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            case 5: return <div>  <iframe width="560" height="315" src="https://www.youtube.com/embed/C1HHejBQX9o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

            default : return <div>Error</div>
        }

        return <div>
            Music is not chosen
        </div>
        
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

    nextButton = () => {
        var num = this.state.Channel
        num = num + 1
      
        if (num > 5) {
            num = 1
        }


        console.log("Next num", num)
        

        this.setState({
            Channel : num
        })


    }

    backButton = () => {
        var num = this.state.Channel
        num = num - 1

        if (num <0){ num = 1 }
            console.log("Back num", num)
        this.setState({
            Channel : num
        })
             

    }


    render() {
        return (
            <div>

                <center>
                    <button onClick = {this.Click} style = {{color :"red", width : "10%", marginTop :"20"}}> testButton</button>
                        <div>Welcome to Bargain Gambling site. Free stuff monthly. Go to Roulette page now!</div>
                    <div className = "border">
                        <h1>Login</h1>
                        <input type="text" name="" placeholder="Username"/>  
                        <br></br>
                        <input type="password" name="" placeholder="Password"/>
                        <br></br>
                        <button style={{backgroundColor:"#1289A7"}} type="submit" name="" value="Login">Login</button>
                    </div>
                    <div>
                    <button onClick = {this.nextButton} type="button">New Song</button>  
                    </div>

                    <div>
                        <button onClick = {this.backButton} type="button">Past Song</button>
                    </div>
                     
                     {this.musicPlayer()}

                
                </center>
            </div>



        
        );
    }
}

export default Home;