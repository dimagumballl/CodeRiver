import './ProfitMain.css'
import {keys} from "lodash"
import {Component} from 'react'
import {connect} from 'react-redux'
import ProfitEarningsHistory from './ProfiEarningHistory/ProfiEarningHistory'
import ProfitReferrer from './ProfitReferrer/ProfitReferrer'
import ProfitMainInfo from './ProfitMainInfo/ProfitMainInfo'
import up from '../../../common/image/Aup.png'
import down from '../../../common/image/Ado.png'

class ProfitMain extends Component  {
  
  render(){
    const{Id}=this.props
    return (
      <div className="conteinerR">
        <div className="conteinerC" style={{padding:"35px"}}>
            <div className="ProfiEarningHistory">
              <ProfitEarningsHistory
                Id={Id}
              />
            </div>
            <div className="ProfitStats">
                <div className="ProfitStatsConteiner">
                  <div className="ProfitStatsConteinerF1">
                    {this.props.State.DefaultOperation.ListOfUser[Id].stats.new_orders.n}
                  </div>
                  <div className="ProfitStatsConteinerF2" style={{color:"rgb(70, 149, 217)"}}>
                    NEW ORDER
                  </div>
                  <div className="ProfitStatsConteinerF3">
                    <div className="ProfitStatsConteinerF3C1" style={this.props.State.DefaultOperation.ListOfUser[Id].stats.new_orders.up?{backgroundColor:"rgb(27, 185, 52)"}:{backgroundColor:"rgb(240, 83, 82)"}}>
                        <img src={this.props.State.DefaultOperation.ListOfUser[Id].stats.new_orders.up?up:down}></img>
                    </div>
                    <div className="ProfitStatsConteinerF3C2">
                      {this.props.State.DefaultOperation.ListOfUser[Id].stats.new_orders.in}% {this.props.State.DefaultOperation.ListOfUser[Id].stats.new_orders.up?"INCREASE":"DECREASE"}
                    </div>
                  </div>
                </div>
                <div className="ProfitStatsConteiner">
                  <div className="ProfitStatsConteinerF1">
                    {this.props.State.DefaultOperation.ListOfUser[Id].stats.totals_sales.n}
                  </div>
                  <div className="ProfitStatsConteinerF2" style={{color:"rgb(33, 187, 57)"}}>
                    TOTAL SALES
                  </div>
                  <div className="ProfitStatsConteinerF3">
                    <div className="ProfitStatsConteinerF3C1" style={this.props.State.DefaultOperation.ListOfUser[Id].stats.totals_sales.up?{backgroundColor:"rgb(27, 185, 52)"}:{backgroundColor:"rgb(240, 83, 82)"}}>
                        <img src={this.props.State.DefaultOperation.ListOfUser[Id].stats.totals_sales.up?up:down}></img>
                    </div>
                    <div className="ProfitStatsConteinerF3C2">
                      {this.props.State.DefaultOperation.ListOfUser[Id].stats.totals_sales.in}% {this.props.State.DefaultOperation.ListOfUser[Id].stats.totals_sales.up?"INCREASE":"DECREASE"}
                    </div>
                  </div>
                </div>
                <div className="ProfitStatsConteiner">
                  <div className="ProfitStatsConteinerF1">
                    ${this.props.State.DefaultOperation.ListOfUser[Id].stats.total_paid_out.n}
                  </div>
                  <div className="ProfitStatsConteinerF2" style={{color:"rgb(242, 168, 10)"}}>
                    TOTAL PAID OUT
                  </div>
                  <div className="ProfitStatsConteinerF3">
                    <div className="ProfitStatsConteinerF3C1" style={this.props.State.DefaultOperation.ListOfUser[Id].stats.total_paid_out.up?{backgroundColor:"rgb(27, 185, 52)"}:{backgroundColor:"rgb(240, 83, 82)"}}>
                        <img src={this.props.State.DefaultOperation.ListOfUser[Id].stats.total_paid_out.up?up:down}></img>
                    </div>
                    <div className="ProfitStatsConteinerF3C2">
                      {this.props.State.DefaultOperation.ListOfUser[Id].stats.total_paid_out.in}% {this.props.State.DefaultOperation.ListOfUser[Id].stats.total_paid_out.up?"INCREASE":"DECREASE"}
                    </div>
                  </div>
                </div>
                <div className="ProfitStatsConteiner">
                  <div className="ProfitStatsConteinerF1">
                    {this.props.State.DefaultOperation.ListOfUser[Id].stats.new_customers.n}
                  </div>
                  <div className="ProfitStatsConteinerF2" style={{color:"rgb(252, 86, 94)"}}>
                    NEW CUSTOMERS
                  </div>
                  <div className="ProfitStatsConteinerF3">
                    <div className="ProfitStatsConteinerF3C1" style={this.props.State.DefaultOperation.ListOfUser[Id].stats.new_customers.up?{backgroundColor:"rgb(27, 185, 52)"}:{backgroundColor:"rgb(240, 83, 82)"}}>
                        <img src={this.props.State.DefaultOperation.ListOfUser[Id].stats.new_customers.up?up:down}></img>
                    </div>
                    <div className="ProfitStatsConteinerF3C2">
                      {this.props.State.DefaultOperation.ListOfUser[Id].stats.new_customers.in}% {this.props.State.DefaultOperation.ListOfUser[Id].stats.new_customers.up?"INCREASE":"DECREASE"}
                    </div>
                  </div>
                </div>
            </div>
            <div className="ProfitReferrer">
              <ProfitReferrer
                Id={Id}
              />
            </div>
        </div>
        <div className="conteinerC" style={{width:"30%",paddingRight:"35px",paddingTop:"35px",paddingBottom:"35px"}}>
            <div className="ProfitMainInfo">
              <ProfitMainInfo
                Id={Id}
              />
            </div>
            <div className="ProfitEvents">
              <div className="ProfitEventsRow">
                  
                    <div style={{fontFamily:"SourceSansPro-Regular",fontSize:"14pt",color:"rgb(203,209,217)",marginTop:"30px"}}>
                      Upcoming Events with {this.props.State.DefaultOperation.ListOfUser[Id].personal_info.fname}
                    </div>
                  
                </div>
              {
                keys(this.props.State.DefaultOperation.ListOfUser[Id].personal_event).map((key)=>(
                <div className="ProfitEventsRow">
                  <div className="ProfitEventsRowC">
                    <div style={{fontFamily:"SourceSansPro-Semibold",fontSize:"16pt",color:"rgb(53, 64, 82)"}}>
                      {this.props.State.DefaultOperation.ListOfUser[Id].personal_event[key].name}
                    </div>
                    <div style={{fontFamily:"SourceSansPro-Regular",fontSize:"14pt",color:"rgb(203,209,217)"}}>
                      {this.props.State.DefaultOperation.ListOfUser[Id].personal_event[key].data}
                    </div>
                  </div>
                  <div className="ProfitEventsRowS" style={{backgroundColor:this.props.State.DefaultOperation.ListOfUser[Id].personal_event[key].skills.color}}>
                    {this.props.State.DefaultOperation.ListOfUser[Id].personal_event[key].skills.name}
                  </div>
                </div>
                ))
              }
                
            </div>
        </div>
      </div>
    );
  }
    
  }
  
  
  export default connect(
    state=>({State:state}),
    
  )(ProfitMain);