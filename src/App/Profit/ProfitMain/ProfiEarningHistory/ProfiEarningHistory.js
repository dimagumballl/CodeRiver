import './ProfitEarningHistory.css'
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from '@progress/kendo-react-charts';

import {Component} from 'react'
import {connect} from 'react-redux'

class ProfiEarningsHistory extends Component  {
  render(){
    const{Id}=this.props
    return (
      <div className="conteinerC">
        <div  className="EHconteinerR">
          <div style={{color:"rgb(53, 64, 82)"}}>
            Earnings History
          </div>
          <div   className="EHconteinerRButtons">
              <div className="EHconteinerRButtonsN">
                Weekly
              </div>
              <div className="EHconteinerRButtonsA">
                Montly
              </div>
              <div className="EHconteinerRButtonsN">
                Yearly
              </div>
          </div>
        </div>
        <div  className="EHGconteinerR">
          <Chart pannable zoomable style={{height:"100%"}}>
          
          
          <ChartValueAxis>
            <ChartValueAxisItem narrowRange={false} majorGridLines={{visible:false}} line={{visible:false, }} majorTicks={{visible:false}} min={0} max={500} color="rgb(203,209,217)"  majorUnit={100} majorGridLines={{color:"rgb(230,230,230)"}}  />
          </ChartValueAxis>
          <ChartCategoryAxis >
            <ChartCategoryAxisItem baseUnit="months"  majorTicks={{visible:false}}  categories={this.props.State.DefaultOperation.ListOfUser[Id].ernings_history.categori}  color="rgb(203,209,217)"/>
          </ChartCategoryAxis>
          <ChartSeries>
            
            {this.props.State.DefaultOperation.ListOfUser[Id].ernings_history.N.map((item, idx) => 
              <ChartSeriesItem
                key={idx}
                type="line"
                tooltip={{ visible: true, padding:{top:5,bottom:5,left:10,right:10}, background:"rgba(0, 0, 0, 0.5)", color:"white",  }}
                data={item.data}
                name={item.name}
                color={item.color}
                markers={{size:3}}
                
                
              />
            )}
          </ChartSeries>
        </Chart>
      </div>
      </div>
      
        
      
    );
  }
    
  }
  
  
  export default connect(
    state=>({State:state}),
    
  )(ProfiEarningsHistory);