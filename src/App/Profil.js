import Menu from './Menu/Menu'
import Profit from './Profit/Profit'
import './App.css'
import '../common/Style/Style.css'
import {connect} from 'react-redux'
import {Component} from 'react'

class Profil extends Component {
    render(){
        const{Id}=this.props
        return (
            <div className="Main">
            
              <div className="Menu">
              
                <Menu
                    Id={this.props.Id}
                />
              </div>
              <div style={{width:"25%"}}>
        
              </div>
              
              <div className="Profit">
                  
                <Profit
                    Id={this.props.Id}
                />
              </div>
            </div>
          );
    }
  
}

export default connect(
    state=>({State:state}),
    
  )(Profil);

