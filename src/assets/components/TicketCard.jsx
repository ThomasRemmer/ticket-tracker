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
            <p className="ticket__text">
            name: {name}
            </p>
            <p className="ticket__text">
            roll: {role}
            </p>
            <div className="ticket__container">
                <p className="ticket__text">Current Tickets</p>
                <p className="ticket__text">{counter}</p>
                <div>
                    <button onClick={handleIncrement}>+</button>
                    <button onClick={handleDecrement}>-</button>
                </div>
            </div>
        </div>
    )
}

export default TicketCard;