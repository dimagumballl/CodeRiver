import { SelectUser } from './JScomponents/SelectUser';
import { Display } from './JScomponents/Display';

import initialState from './initialState';


 function DefaultOpration(state = initialState, action){
    switch(action.type) {
        
        case "SELECT_USER": {

            return SelectUser(state, action)
        }
        case "DISPLAY": {

            return Display(state, action)
        }
       
        default: return state;
    }
} 
export default DefaultOpration;