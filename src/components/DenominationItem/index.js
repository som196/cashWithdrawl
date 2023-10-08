import './index.css'

const DenominationItem = props => {
  const {item, withdrawl} = props
  const {value} = item

  const buttonClicked = () => {
    withdrawl(value)
  }

  return (
    <li className="itemContainer">
      <button type="button" className="value1" onClick={buttonClicked}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
