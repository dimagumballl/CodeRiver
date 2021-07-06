import './Primery.css'
import {connect} from 'react-redux'
import {Component} from 'react'
import {keys} from "lodash"
import serch from '../../../../common/image/search.png'
import Settings from '../../../../common/image/Settings.png'
import On from '../../../../common/image/on.png'
import Of from '../../../../common/image/of.png'

class Primery extends Component {
    render(){
      return (
        <div className="conteinerC">
          <div className="PrimeryMenu">
              <div className="PrimeryMenuH">
                <p>MENU</p>
              </div>
              <div className="PrimeryMenuItem">
                <p>Profit</p>
              </div>
              <div className="PrimeryMenuItem">
                <p>Explore</p>
              </div>
              <div className="PrimeryMenuItem">
                <p>Profile</p>
              </div>
              <div className="PrimeryMenuItem">
                <p>Photos</p> 
              </div>
              <div className="PrimeryMenuItem">
                <p>Videos</p>
              </div>
              <div className="PrimeryMenuItem">
                <p>Invite</p>
                  <div className="PrimeryMenuN"><p>
                    {this.props.State.DefaultOperation.ListOfUser[this.props.Id].invite}
                  </p>
                </div>
              </div>
              <div className="PrimeryMenuItem">
                <p>Music</p>
              </div>
              <div className="PrimeryMenuItem">
                <p>Candidates</p>
              </div>
              <div className="PrimeryMenuItem">
                <p>Calendar</p>
              </div>
              <div className="PrimeryMenuItem">
                <p>Feedback</p>
              </div>
              <div className="PrimeryMenuItem">
                <p>Help</p>
              </div>
          </div>
          <div className="PrimerySearch">
            <div className="PrimerySearchBar">
              <input placeholder="Search"></input>
              <img src={serch} style={{cursor:"pointer", marginBottom:"5px"}}></img>
            </div>
              
          </div>
          <div className="PrimeryFriends">
          <div className="PrimeryMenuH">
                <p>FRIENDS</p>
                <img src={Settings}style={{cursor:"pointer", marginRight:"30px"}}></img> 
          </div>
          {
            keys(this.props.State.DefaultOperation.ListOfUser[this.props.Id].friends).map((key)=>
              <div className="PrimeryFriendsBar">
                <div className="FconteinerR">
                    <div key={key} className="FLogo" >
                      <img className="FLogoA" src={this.props.State.DefaultOperation.ListOfUser[this.props.Id].friends[key].avatar}></img>
                      <img className="FLogoS" src={this.props.State.DefaultOperation.ListOfUser[this.props.Id].friends[key].status?On:Of}></img>
                      
                    </div>
                    <div  className="FconteinerC">
                      <div style={{color:"white"}}>{this.props.State.DefaultOperation.ListOfUser[this.props.Id].friends[key].name}</div>
                      <div style={this.props.State.DefaultOperation.ListOfUser[this.props.Id].friends[key].typing?{color:"white"}:{color:"rgb(124, 140, 160)"}}>{this.props.State.DefaultOperation.ListOfUser[this.props.Id].friends[key].typing?"Typing...":this.props.State.DefaultOperation.ListOfUser[this.props.Id].friends[key].profession}</div>
                      
                    </div>
                </div>
                <div className="PrimeryMenuN" style={this.props.State.DefaultOperation.ListOfUser[this.props.Id].friends[key].mes==0?{display:"none"}:{}}>
                  {this.props.State.DefaultOperation.ListOfUser[this.props.Id].friends[key].mes}
                </div>
              </div>
            )
          }
              
          </div>
        </div>
      );
    }
    
  }
  
  
  export default connect(
    state=>({State:state}),
    
  )(Primery);
  