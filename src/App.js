import { Route } from 'react-router';
import './App.css';
import Header from './Components/Header/Header'
import PaymentsContainer from './Components/Payments/PaymentsContainer';
import Settings from './Components/Settings/Settings';
import TodoContainer from './Components/Todo/TodoContainer';


const App = (props) => {
  /* debugger */
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <Route path={'/Todo'} render={() => <TodoContainer /* store={props.store} */ />}/>
        <Route path={'/Payments'} render={() => <PaymentsContainer /* store={props.store} *//>} />
        <Route path={'/Settings'} render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
