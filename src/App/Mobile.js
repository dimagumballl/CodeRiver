import Menu from './Mobile/Menu/Menu'
import Profit from './Mobile/Profit/Profit'
import './Mobile/Mobile.css'
import '../common/Style/Style.css'
import {connect} from 'react-redux'
import {Component} from 'react'


class Mobile extends Component {
    render(){
        const{Id}=this.props
        return (
            <div className="Main">
            
              <div className="MenuM" style={{display:this.props.State.DefaultOperation.Menu?"flex":"none"}}>
              
                <Menu
                    Id={this.props.Id}
                />
              </div>
              
              <div className="ProfitM">
                  
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
    
  )(Mobile);

