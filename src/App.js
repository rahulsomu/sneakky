import { useState, useEffect } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Hero from './components/Hero';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { Shoe } from './Context/Shoe';
import Address from './components/Address';
import Payment from './components/Payment';
import ThankYou from './components/ThankYou';
import { authActions } from './actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loginState = localStorage.getItem('isLoggedIn');
    dispatch(authActions.updateLoginState(loginState));
  }, []);
  const [details, setDetails] = useState({
    name: 'Nike Presto 2021 Edition',
    price: 12999,
  });

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastname: '',
    phoneNo: '',
    addressL1: '',
    addressL2: '',
    pincode: '',
  });
  const [size, setSize] = useState({
    none: '',
  });
  return (
    <div className="app">
      <Shoe.Provider
        value={{
          details,
          userDetails,
          setUserDetails,
          size,
          setSize,
        }}
      >
        <Header bg="#B3E140" />
        <Switch>
          <Route exact path="/" component={Hero} />
        </Switch>
        <Switch>
          <Route path="/cart" component={Cart} />
        </Switch>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route path="/address" component={Address} />
        </Switch>
        <Switch>
          <Route path="/payment" component={Payment} />
        </Switch>
        <Switch>
          <Route path="/thankyou" component={ThankYou} />
        </Switch>
      </Shoe.Provider>
    </div>
  );
}

export default App;
