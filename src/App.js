import { Route } from 'react-router';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer'
import LoginContainer from './Components/Login/LoginContainer';
import PaymentsContainer from './Components/Payments/PaymentsContainer';
import Settings from './Components/Settings/Settings';
import TodoContainer from './Components/Todo/Todo/TodoContainer';
import TodoListsContainer from './Components/Todo/TodoLists/TodoListsContainer';


const App = (props) => {
  /* debugger */
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className="app-wrapper-content">
        <Route path={'/TodoLists'} render={() => <TodoListsContainer /* store={props.store} */ />}/>
        <Route path={'/Todo/:todoListId'} render={() => <TodoContainer /* store={props.store} */ />}/>
        <Route path={'/Payments'} render={() => <PaymentsContainer /* store={props.store} *//>} />
        <Route path={'/Settings'} render={() => <Settings />} />
        <Route path={'/Login'} render={() => <LoginContainer />} />
      </div>
    </div>
  );
}

export default App;
