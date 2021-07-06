import './ProfitHeader.css'
import On from '../../../common/image/on.png'
import Of from '../../../common/image/of.png'
import Dropdown from '../../../common/image/Dropdown.png'

import {Component} from 'react'
import {connect} from 'react-redux'

class ProfitHeader extends Component {
  render(){
    const{Id}=this.props
    return (
      <div className="PHconteinerR">
          
          <div style={{fontSize:"24pt",color:"rgb(53, 64, 82)", marginLeft:"30px"}}>
            Your Profit
          </div>
          <div className="PHconteinerRLogo">
            <div className="FLogo" style={{marginRight:"10px"}}>
                <img className="FLogoA" src={this.props.State.DefaultOperation.ListOfUser[this.props.Id].avatar}></img>
                <img className="FLogoS" src={this.props.State.DefaultOperation.ListOfUser[this.props.Id].status?On:Of}></img>
            </div>
            <div className="conteinerC">
                <div className="conteinerR">
                    {this.props.State.DefaultOperation.ListOfUser[this.props.Id].personal_info.fs}
                </div>
                <div className="conteinerR">
                    {this.props.State.DefaultOperation.ListOfUser[this.props.Id].rang}
                </div>
            </div>
            <img src={Dropdown} style={{width:"7px",height:"4px", margin:"30px", cursor:"pointer"}}></img>
          </div>
      </div>
    );
  }
    
}
  

  export default connect(
    state=>({State:state}),
    
  )(ProfitHeader);