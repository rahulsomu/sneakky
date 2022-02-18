// import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  checkoutSlice,
  authSlice,
  successMsgSlice,
  userSlice,
} from '../Reducer/index';

// const store = createStore(checkoutSlice.reducer);
const store = configureStore({
  reducer: {
    checkoutDetails: checkoutSlice.reducer,
    authentication: authSlice.reducer,
    successMsg: successMsgSlice.reducer,
    userDetails: userSlice.reducer,
  },
});
export default store;
