import React from 'react';

class Signin extends React.Component {

    render() {
        return (
            <div>

                <div>
                    <span>Nom*</span>
                    <input type="text" />
                </div>

                <div>
                    <span>Prenom*</span>
                    <input type="text" />
                </div>
                <div>
                    <span>login*</span>
                    <input type="text" />
                </div>

                <div>
                    <span>password*</span>
                    <input type="password" />
                </div>

            </div>
        );
    }

}
export default Signin;