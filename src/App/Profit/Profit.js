import {Component} from 'react'
import {connect} from 'react-redux'
import './Profit.css'
import ProfitMain from './ProfitMain/ProfitMain'
import ProfitHeader from './ProfitHeader/ProfitHeader'


class Profit extends Component {
  render(){
    const{Id}=this.props
    return (
      <div className="conteinerC">
        <div className="ProfitHeader">
          <ProfitHeader
            Id={Id}
          />
        </div>
        <div className="ProfitMain">
          <ProfitMain
            Id={Id}
          />
        </div>
      </div>
    );
  }
    
}
  

  export default connect(
    state=>({State:state}),
    
  )(Profit);