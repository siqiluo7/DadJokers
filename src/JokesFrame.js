import React, {Component} from 'react';
import axios from 'axios';



class JokesFrame extends Component{


    async componentDidMount(){
          let reponse=await axios.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});
          console.log(reponse);

    }
    render() {
        return (
             <div>

             </div>
        );
    }
}

export default JokesFrame;