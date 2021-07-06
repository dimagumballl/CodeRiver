import {createStore} from 'redux';  
import Reducer from './Redusers/Reduser';  
 

 
export default function configureStore() {  
  return createStore(Reducer);
}