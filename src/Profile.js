import React, { Component } from 'react';
class Profile extends Component {
    state = {
        fullName:'Riadh',
        bio:'Messaoud',
        profession:'full stack developper'
      }
    render() { 
        return ( 

 <div>
     <div>
     <h1>{this.state.fullName} </h1>
           <h3> {this.state.bio} </h3>
           <h3> {this.state.profession} </h3>

     </div>       
     </div>


         );
    }
}
 
export default Profile  ;