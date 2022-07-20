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
    {renderCards}
  </div>





);














}
export default App;
