import './Menu.css'
import Primery from "./Primery/Primery"
import Secondary from './Secondary/Secondary';
import {connect} from 'react-redux'
import {Component} from 'react'

class Menu extends Component{
  
  render(){
    const{Id}=this.props
    return (
      <div className="conteinerR">
        <div className="Secondary">
          <Secondary
            Id={Id}
          />
        </div>
        <div className="Primery">
          <Primery
            Id={Id}
          />
        </div>
      </div>
    );
  }
    
}
  
export default connect(
    state=>({State:state}),
    
)(Menu);
  