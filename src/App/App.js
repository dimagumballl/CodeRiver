import {Component} from 'react'
import {connect} from 'react-redux'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Profil from './Profil'
import Mobile from './Mobile'
import './App.css'
import '../common/Style/Style.css'



function App(props) {
  
 
  const matches = useMediaQuery('(min-width:1150px)');

    return (
      <div>
        {matches?<Profil Id={props.State.DefaultOperation.FS}/>:<Mobile Id={props.State.DefaultOperation.FS}/>}
         
         
      </div>
      
     
      
    );
  
  
}

export default connect(
  state=>({State:state}),
  
)(App);
