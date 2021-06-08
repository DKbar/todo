import { Route } from 'react-router';
import './App.css';
import Header from './Components/Header/Header'
import Payments from './Components/Payments/Payments';
import Settings from './Components/Settings/Settings';
import Todo from './Components/Todo/Todo';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <Route path={'/Todo'} render={() => <Todo todoPage={props.store.todoPage} addTask={props.addTask} updateTaskText={props.updateTaskText}/>}/>
        <Route path={'/Payments'} render={() => <Payments paymentsData={props.store.paymentsPage.paymentsData}/>} />
        <Route path={'/Settings'} render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
