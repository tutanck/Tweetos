import axios from 'axios';//a commenter si je veux tester cote serveur
//const axios = require('axios'); // a utiliser pour tester une servlet cotee serveur

const addPost = (ukey, text) => {

    const url = `http://localhost:8080/ProjetSergio/comment?ukey=${ukey}&msg=${text}`;
    console.log(url);//affichage

    return axios.get(url);
};

const getConnexion = (login, password) => {

    const url = `http://localhost:8080/ProjetSergio/user/login?login=${login}&password=${password}`;
    console.log(url);

    return axios.get(url);
};

export {
    getConnexion, addPost
}

//getConnexion("toto","tata");
//addPost("5252", "loololo"); //teste d appele de servlet cote serveur
