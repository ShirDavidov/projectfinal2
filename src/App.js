import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import AddExpenses from './pages/expenseadder'
import History from './pages/datatables'
import './App.css'

function App() {
  return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/ExpenseAdder' component={AddExpenses}/>
            <Route path='/HistoryTables' component={History}/>
          </Switch>
        </BrowserRouter>
      </>
  )
}

export default App;