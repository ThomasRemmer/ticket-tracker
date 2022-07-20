import "./TicketCard.scss"
import { useState } from "react";

const TicketCard = (props) => {
    const { id, name, role} = props
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
      setCounter( counter +1)
    }
  
    const handleDecrement = () => {
      if (counter === 0) {
        return
      } 
      setCounter(counter - 1);
    }

    return (
        <div className="ticket">
            <h2 className="ticket__title">
            {name}
            </h2>
            <p className="ticket__text">
            {role}
            </p>
            <div className="ticket__container">
                <p className="ticket__text">Current Tickets</p>
                <p className="ticket__text">{counter}</p>
                <div className="button__container">
                    <button className="ticket__button" onClick={handleDecrement}>-</button>
                    <button className="ticket__button" onClick={handleIncrement}>+</button>
                    
                </div>
            </div>
        </div>
    )
}

export default TicketCard;