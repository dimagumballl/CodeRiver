import {Component} from 'react'
import {connect} from 'react-redux'
import './ProfitMainInfo.css'
import shutterstock from '../../../../common/image/shutterstock_14778586.jpg'
import {keys} from "lodash"



class ProfitMainInfo extends Component {
    
  render(){
    const{Id}=this.props
    return (
      <div className="conteinerC">
        <div className="ProfitMainInfoHeader">
            <div style={{height: "120px",overflow:"hidden",maxHeight:"120px"}}>
                <img src={shutterstock}  className="ProfitMainInfoHeaderImg"></img>
            </div>
            <div className="ProfitMainInfoHeaderAvatar">
                <img src={this.props.State.DefaultOperation.ListOfUser[Id].avatar}  style={{width:"100%"}}></img>
            </div>
            <div className="ProfitMainInfoHeaderName">
                <div style={{fontFamily:"SourceSansPro-Semibold",fontSize:"24pt",color: "rgb(53, 64, 82)"}}>
                    {this.props.State.DefaultOperation.ListOfUser[Id].personal_info.sname} {this.props.State.DefaultOperation.ListOfUser[Id].personal_info.fname}
                </div>
                <div style={{fontFamily:"SourceSansPro-Regular",fontSize:"14pt",color: "rgb(203,209,217)"}}>
                    {this.props.State.DefaultOperation.ListOfUser[Id].personal_info.profession}
                </div>
            </div>
        </div>
        <div className="ProfitMainInfoBody">
            <div className="ProfitMainInfoBodyRow">
                <div className="ProfitMainInfoBodyRowT">
                    Email
                </div>
                <div className="ProfitMainInfoBodyRowC">
                    <p style={{overflowWrap:"break-word"}}>
                        {this.props.State.DefaultOperation.ListOfUser[Id].personal_info.email}
                    </p>
                    
                </div>
            </div>
            <div className="ProfitMainInfoBodyRow">
                <div className="ProfitMainInfoBodyRowT">
                    Mobile
                </div>
                <div className="ProfitMainInfoBodyRowC">
                    {this.props.State.DefaultOperation.ListOfUser[Id].personal_info.mobile}
                </div>
            </div>
            <div className="ProfitMainInfoBodyRow">
                <div className="ProfitMainInfoBodyRowT">
                    Skill Level
                </div>
                <div className="ProfitMainInfoBodyRowC">
                    {this.props.State.DefaultOperation.ListOfUser[Id].personal_info.skill_level}
                </div>
            </div>
            <div className="ProfitMainInfoBodyRow">
                <div className="ProfitMainInfoBodyRowT">
                    Paid Out Limit
                </div>
                <div className="ProfitMainInfoBodyRowC">
                    <div className="PayOutLimit">
                        <div  className="PayOutLimitF">
                            <div  className="PayOutLimitL" 
                            style={{width:(this.props.State.DefaultOperation.ListOfUser[Id].personal_info.paid_out_limit.n/(this.props.State.DefaultOperation.ListOfUser[Id].personal_info.paid_out_limit.m/100))+"%"}}
                            >
                            
                            </div>
                        </div>
                        <div style={{color:"rgb(41, 157, 245)", marginLeft:"10px",fontSize:"14pt"}}>
                            ${this.props.State.DefaultOperation.ListOfUser[Id].personal_info.paid_out_limit.n}
                        </div>
                        <div style={{color:"rgb(53, 64, 82)",fontSize:"14pt"}}>
                            /${this.props.State.DefaultOperation.ListOfUser[Id].personal_info.paid_out_limit.m}
                        </div>
                    </div>
                </div>
            </div>
            <div className="ProfitMainInfoBodyRow">
                <div className="ProfitMainInfoBodyRowT">
                    Bio
                </div>
                <div className="ProfitMainInfoBodyRowC">
                    <p>
                        {this.props.State.DefaultOperation.ListOfUser[Id].personal_info.bio}
                    </p>
                </div>
            </div>
            <div className="ProfitMainInfoBodyRow">
                <div className="ProfitMainInfoBodyRowT">
                    Skills
                </div>
                <div className="ProfitMainInfoBodyRowC">
                    <div className="SkillsRowB">
                    {
                        keys(this.props.State.DefaultOperation.ListOfUser[Id].personal_info.skills).map((key)=>
                            <div key={key} className="SkillsB" style={{backgroundColor:this.props.State.DefaultOperation.ListOfUser[Id].personal_info.skills[key].color}}>
                                {this.props.State.DefaultOperation.ListOfUser[Id].personal_info.skills[key].name}
                            </div>
                        )
                    }
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    );
  }
    
}
  

  export default connect(
    state=>({State:state}),
    
  )(ProfitMainInfo);