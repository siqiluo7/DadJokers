import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {

    static defaultProps = {
        emojs: ['\u{1f928}', '\u{1f636}', '\u{1f642}', '\u{1f602}', '\u{1f601}','\u{1f606}','\u{1f623}']
    }
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
        this.ScoreUp = this.ScoreUp.bind(this);
        this.ScoreDown = this.ScoreDown.bind(this);
        this.selectEmoji = this.selectEmoji.bind(this);
    }
    ScoreUp() {
        this.setState(tr => {
            return { "score": tr.score + 1 }
        })
    }
    ScoreDown() {
        this.setState(tr => {
            return { "score": tr.score - 1 }
        })
    }
    // componentDidUpdate() {
    //     this.selectEmoji();
    // }
    selectEmoji() {
        if (this.state.score < 0) {
            return this.props.emojs[0];
        }
        if (this.state.score === 0) {
            return this.props.emojs[1];
        }
        if (this.state.score > 0 && this.state.score <= 3) {
            return this.props.emojs[2];
        }
        if (this.state.score > 3 && this.state.score <= 6) {
            return this.props.emojs[3];
        }
        if (this.state.score > 6 && this.state.score <= 10) {
            return this.props.emojs[4];
        }
        if (this.state.score > 10 && this.state.score <= 13) {
            return this.props.emojs[5];
        }
        if (this.state.score > 13) {
            return this.props.emojs[6];
        }
    }

    render() {
        return (
            <div className="jokes">

                <button className="Upbn" onClick={this.ScoreUp}>↑</button><div className="score">{this.state.score}</div><button className="Downbn" onClick={this.ScoreDown}>↓</button>
                <div className="joke">{this.props.joke}</div>
                <div className="emoji">{this.selectEmoji()}</div>
            </div>
        );
    }
}

export default Joke;
