import React from 'react';
import NavigationPanel from '../components/NavigationPanel';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isConnected: false };
        this.getConnected = this.getConnected.bind(this);
        this.setLogout = this.setLogout.bind(this);
    }
    
    getConnected() {
        this.setState({ isConnected: true });
    }

    setLogout() {
        this.setState({ isConnected: false });
    }


    render() {
        return (
            <div>
                <h1>Tweetos</h1>

                <NavigationPanel
                    login={this.getConnected}
                    logout={this.setLogout}
                    isConnected={this.state.isConnected}
                />
            </div>

        );
    }
}
export default MainPage;