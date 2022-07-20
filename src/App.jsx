import "./App.scss"
import EmployeeList from "./assets/data/Employee"
import TicketCard from "./assets/components/TicketCard";

const App = () => {
  
const renderCards = EmployeeList.map((employee) => {
  return (
    <TicketCard id={employee.id} name ={employee.name} role={employee.role}/>
  )
})

return (

  <div className="app">
    <h1 className="title">Ticket <span className="title__highlight">Tracker</span></h1>
    <div className="container">{renderCards}</div>
  </div>

);

}
export default App;
