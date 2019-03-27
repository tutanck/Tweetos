import React from 'react';


class NewPassW extends React.Component{

    render(){
        
        return (
           <div>
                <div>
                    <span>login</span>
                    <input type = 'text'/>  
                </div>
                <div>
                    <span>password</span>
                    <input type = 'password'/>  
                </div>
                <div>
                    <span>password confrimed</span>
                    <input type = 'password'/>  
                </div>
           </div>
          
        );
    }
}

export default NewPassW;
