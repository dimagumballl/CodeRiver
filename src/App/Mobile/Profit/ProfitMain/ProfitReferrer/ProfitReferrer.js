import {Component} from 'react'
import {connect} from 'react-redux'
import {keys} from "lodash"
import './ProfitReferrer.css'
import SortMarks from '../../../../../common/image/Sort-marks.png'



class ProfitReferrer extends Component {
    
  render(){
    const{Id}=this.props
    return (
      <div className="conteinerC">
        <div className="ProfitReferrerRH">
            <div className="ProfitReferrerCN" style={{fontSize:"24pt"}}>
                Referrer
            </div>
            <div className="ProfitReferrerC">
                Views
            </div>
            <div className="ProfitReferrerC">
                Sales
            </div>
            <div className="ProfitReferrerC">
                Conversion
            </div>
            <div className="ProfitReferrerC" style={{cursor: "pointer"}}> 
                Total
                <img src={SortMarks} style={{ marginLeft:"20px"}}></img>
            </div>
        </div>
        {   
        
        keys(this.props.State.DefaultOperation.ListOfUser[Id].Referrer).map((key)=>
            <div className="ProfitReferrerR" key={key} style={key%2==0?{backgroundColor:"rgb(245,248,250)"}:{}}>
                <div className="ProfitReferrerCN">
                    {this.props.State.DefaultOperation.ListOfUser[Id].Referrer[key].name}
                </div>
                <div className="ProfitReferrerC">
                    {this.props.State.DefaultOperation.ListOfUser[Id].Referrer[key].views}
                </div>
                <div className="ProfitReferrerC">
                    {this.props.State.DefaultOperation.ListOfUser[Id].Referrer[key].sales}
                </div>
                <div className="ProfitReferrerC">
                    {this.props.State.DefaultOperation.ListOfUser[Id].Referrer[key].coversion}%
                </div>
                <div className="ProfitReferrerC">
                    ${this.props.State.DefaultOperation.ListOfUser[Id].Referrer[key].total}
                    
                </div>
            </div>
            )
        }
        
      </div>
    );
  }
    
}
  

  export default connect(
    state=>({State:state}),
    
  )(ProfitReferrer);