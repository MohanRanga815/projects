// Write your code here
import {Component} from 'react'

import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, toss: headsImageUrl}

  tossClickBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const result = tossResult === 0 ? 'heads' : 'tails'

    const tossImage = result === 'heads' ? headsImageUrl : tailsImageUrl

    this.setState(prevState => ({
      total: prevState.total + 1,
      heads: result === 'heads' ? prevState.heads + 1 : prevState.heads,
      tails: result === 'tails' ? prevState.tails + 1 : prevState.tails,
      toss: tossImage,
    }))
  }

  render() {
    const {total, heads, tails, toss} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-heading">Coin Toss Game</h1>
          <p className="card-para">Heads (or) Tails</p>
          <img src={toss} className="heads-image" alt="toss result" />
          <div>
            <button
              type="button"
              className="button"
              onClick={this.tossClickBtn}
            >
              Toss Coin
            </button>
          </div>
          <div className="toss-results">
            <p className="para">Total:{total}</p>
            <p className="para">Heads:{heads} </p>
            <p className="para">Tails:{tails} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
