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
        <div>
            <p>
            name: {name}
            </p>
            <p>
            roll: {role}
            </p>
            <div>
                <p>Current Tickets</p>
                <p>{counter}</p>
                <div>
                    <button onClick={handleIncrement}>+</button>
                    <button onClick={handleDecrement}>-</button>
                </div>
            </div>
        </div>
    )
}

export default TicketCard;