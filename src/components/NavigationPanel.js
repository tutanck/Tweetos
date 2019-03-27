import React from 'react';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Signin from '../pages/Signin'
import NewPassW from '../pages/NewPassW';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AccueilPage from "../pages/AcceuilPage";
import PrivateRoute from "../components/PrivateRoute";

//importe browser router je le renomme en router et route et link

class NavigationPanel extends React.Component {

    render() {
        return (
            <Router>
                <Route path="/login" exact render={
                    props => <Login
                        {...props}
                        login={this.props.login}
                    />
                } />
                {/* <Route path="/login" exact component={Login} /> */}
                <Route path="/signin" component={Signin} />
                <Route path="/logout" component={Logout} />
                <Route path="/newpassw" component={NewPassW} />
                <PrivateRoute
                    path="/welcome"
                    component={AccueilPage}
                    isAuthenticated={this.props.isConnected}
                />
            </Router>
        );
    }
}
export default NavigationPanel;