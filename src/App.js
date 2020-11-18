import React, { Component } from 'react';
import './App.css';
import Profile from './Profile'
class App extends Component {
  state = { 
    show : true
   };
   showorhide=()=>{
     this.setState({show: !this.state.show})
   }
  render() { 
    return ( 
<div>  
   <div>
   <button onClick ={this.showorhide}>bush button</button>
    {this.state.show && <Profile/>}
   </div> 

</div> 
     );
  }
}
 
export default App;