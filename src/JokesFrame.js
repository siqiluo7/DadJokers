import React, {Component} from 'react';
import axios from 'axios';
import Joke from './Joke';
import './JokesFrame.css';

class JokesFrame extends Component{
       constructor(props){
           super(props);
           this.state={
               jokes:[]
           }
       }

    async componentDidMount(){
       
        if (!window.localStorage.getItem("jokes")) {
            window.localStorage.setItem('jokes', "[]")
        }
         
         let jokes=JSON.parse(window.localStorage.getItem('jokes'));

        for(let i=0;i<10;i++){
            let response=await axios.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});
            console.log(jokes);
            jokes.push({ "id":response.data.id,
            "joke":response.data.joke
        });
        console.log(jokes);
         
        }
        this.setState(()=>{
            return {"jokes":jokes}
        },()=>window.localStorage.setItem('jokes',JSON.stringify(this.state.jokes)))
        console.log(this.state.jokes);   
      // console.log("+++++"+window.localStorage.getItem('jokes'));
      // console.log("jokes from local"+this.state.jokes.map(m=>m.joke+`\n`));
    }
    render() {
        return (
             <div className="Frame">
             {this.state.jokes.map(m=><Joke joke={m.joke}/>)}
             </div>
        );
    }
}

export default JokesFrame;