import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {balanceAvailable: 2000}

  withdrawl = value1 => {
    this.setState(prevState => ({
      balanceAvailable: prevState.balanceAvailable - value1,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const name = 'Sarah'
    const initial = name.slice(0, 1)
    const {balanceAvailable} = this.state

    return (
      <div className="mainContainer">
        <div className="subContainer">
          <div className="nameContainer">
            <p className="nameLetter">{initial}</p>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balanceContainer">
            <p className="balanceName">Your Balance</p>
            <p className="balance">
              {balanceAvailable}
              <br />
              <span className="inRupees">in Rupees</span>
            </p>
          </div>
          <div className="withdrawContainer">
            <p className="withdrawName">Withdraw</p>
            <p className="balanceName"> CHOOSE SUM (IN RUPEES)</p>
            <ul className="unorderedList">
              {denominationsList.map(each => (
                <DenominationItem
                  item={each}
                  key={each.id}
                  withdrawl={this.withdrawl}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
