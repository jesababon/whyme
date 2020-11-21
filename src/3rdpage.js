import React from 'react';

var showing=[];
var users = ['James', 'Nora', 'Matthew', 'Joe', 'Susan'];

class Third extends React.Component{
   constructor(props){
      super(props);
      this.state = {showing};
   }
   
   addToShow = () =>{
      let addition= users[0]
      this.setState(() => showing=addition)
      users.shift();
      console.log(addition)
   }
  
  render(){
      return (
         <ul>

               <p>
               <button onClick={this.addToShow}>
               Press
               </button>
               {showing}
            </p>
         </ul>
      );
   }  
}

export default Third;