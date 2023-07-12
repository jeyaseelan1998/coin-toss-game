import { Component } from "react";
import './index.css';

class CoinToss extends Component {
    state = {
        heads: 0,
        tails: 0
    }

    render() {
        const {heads, tails} = this.state
        const random = Math.floor(Math.random() * 2)
        return (
            <div className="app-container">
                <div className="game-card">
                    <h1 className="heading">Coin Toss Game</h1>
                    <p className="description">Heads (or) Tails</p>
                    <img alt="heads" src="https://assets.ccbp.in/frontend/react-js/heads-img.png" className="coin-image"/>
                    <button className="button" type="button">Toss Coin</button>
                    <div className="results-container">
                        <p className="result">Total: {heads + tails}</p>
                        <p className="result">Heads: {heads}</p>
                        <p className="result">Tails: {tails}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoinToss