import React from 'react';
import {addComment} from "../services/service";

class Posteur extends React.Component{

    componentDidMount(){
        //composant qui permet de composer un message et de posteur
        addComment().then(function (response) {
            const data = response.data;
    console.log(response.data);
    this.setState({"truc",data.comments})
})        //A appeler depuis le composant
    .catch(function (error) {
        console.log(error);
    });

    }
    render(){
        return (
            <textarea name="posteur" cols="40" rows="5"></textarea>
        )
    }
}
;//composant qui permet de composer un message et de le poster
/*.then(function (response) {
    console.log(response.data);
})        //A appeler depuis le composant
    .catch(function (error) {
        console.log(error);
    });*/
