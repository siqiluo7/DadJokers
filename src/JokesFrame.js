import React, {Component} from 'react';
import axios from 'axios';
import Joke from './Joke';


class JokesFrame extends Component{
       constructor(props){
           super(props);
           this.state={
               jokes:[]
           }
       }

    async componentDidMount(){
        let jokes=[];

        for(let i=0;i<10;i++){
            let response=await axios.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});
            jokes.push({ "id":response.data.id,
            "joke":response.data.joke
        });
            this.setState(()=>({
                "jokes":jokes
            })
                )
            
        }
        console.log(this.state.jokes);
    }
    render() {
        return (
             <div>
             {this.state.jokes.map(m=><Joke joke={m.joke}/>)}
             </div>
        );
    }
}

export default JokesFrame;