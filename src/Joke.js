import React, {Component} from 'react';
import './Joke.css';

class Joke extends Component{

    static defaultProps={
        emojs:['\u{1f605}','\u{1f606}','\u{1f607}','\u{1f608}','\u{1f609}']
    }
       constructor(props){
           super(props);
           this.state={
               score : 0
           }
       }

    render() {
        return (
             <div className="jokes">

             <button>{this.state.score}</button>
             <div className="joke">{this.props.joke}</div>
             <div className="emoji">{'\u{1f605}'}</div>
             </div>
        );
    }
}

export default Joke;
