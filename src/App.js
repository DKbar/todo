import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './Components/common/Preloader';
import HeaderContainer from './Components/Header/HeaderContainer'
import LoginContainer from './Components/Login/LoginContainer';
import PaymentsContainer from './Components/Payments/PaymentsContainer';
import Settings from './Components/Settings/Settings';
import TodoContainer from './Components/Todo/Todo/TodoContainer';
import TodoListsContainer from './Components/Todo/TodoLists/TodoListsContainer';
import { initializeApp } from './Redux/app-reducer';



class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp();
  }
  render(){
    if (!this.props.initialized){
      return <Preloader />
    }
    
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
}

const mapStateToProps = (state) => {
  return{
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);
