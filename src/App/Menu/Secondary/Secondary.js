import './Secondary.css'
import {connect} from 'react-redux'
import {Component} from 'react'
import {keys} from "lodash"
import {CreateAction} from '../../../Store/Action/MainAction'
import Grid from '../../../common/image/Grid.png'
import Settings from '../../../common/image/Settings.png'

class Secondary extends Component {
  render(){
    const{Id}=this.props
    const{DefaultOperation}=this.props.State
    return (
      <div className="conteinerC">
        <div className="UsersList">
          
            {
              keys(DefaultOperation.ListOfUser).map((key) =>
                <div key={key} className="UesrLogo"> 
                  <img src={DefaultOperation.ListOfUser[key].avatar}></img>
                  <div className="UesrLogoN" style={key==Id?{display:"none"}:{}} onClick={()=>this.props.SelectUser(key)}>

                  </div>
                  
                  
                </div>  
              )
            }
        </div>
        <div className="ToolsBar">
          <img src={Grid} style={{cursor:"pointer", marginRight:"15px"}}></img>
          <img src={Settings}style={{cursor:"pointer"}}></img> 
        </div>
      </div>
    );
  }
  
}
  
export default connect(
  state=>({State:state}),
  dispatch => ({
    SelectUser: (value) => {
        dispatch(CreateAction("SELECT_USER", value))
    }
  })
)(Secondary);

  