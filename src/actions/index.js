import { checkoutSlice,authSlice,successMsgSlice, userSlice } from "../Reducer";

export const checkoutActions=checkoutSlice.actions;
export const authActions=authSlice.actions;
export const successMsgActions=successMsgSlice.actions;
export const userActions=userSlice.actions;


// export const increaseQuantity=()=>{
//    return{
//         type:'increaseQuantity'
//    }
       
   
// }
// export const decreaseQuantity=()=>{
//     return{
//         type:'decreaseQuantity'
//     }
// }
// export const updateTotal=()=>{
//     return{
//         type:'updateTotal'
//     }
   
// }
// export const cartReset=()=>{
//     return{
//         type:'cartReset'
//     }
// }