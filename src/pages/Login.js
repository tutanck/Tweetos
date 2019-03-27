import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { getConnexion } from "../services/service"
import { Snackbar, TextField } from '@material-ui/core';
import { Link } from "react-router-dom";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { log: "", mdp: "", msg: undefined };
        this.handleChangeLog = this.handleChangeLog.bind(this);
        this.handleChangeMdp = this.handleChangeMdp.bind(this);
    }

    handleChangeLog(event) {
        this.setState({ log: event.target.value });
    }
    handleChangeMdp(event) {
        this.setState({ mdp: event.target.value });
    }

    handleCloseMsg = () => {
        this.setState({ msg: undefined });
    };

    connexion(l, p) {
        const self = this;
        getConnexion(l, p)
            .then(function (response) {
                const data = response.data;
                console.log(response.data);
                if (data.error) {//si la cle erreur existe
                    console.log(data.error)//affiche le message d erreur
                    self.setState({ msg: data.error/*error.message*/ })
                }
                else {

                }

            })
            .catch(function (error) {
                //self.setState({ msg: "Probleme de connexion"/*error.message*/ })
                self.props.login();
                self.props.history.push("/welcome");
            });
    }

    render() {
        const { classes } = this.props;
        console.log(this.props.login)

        return (
            <form>
                <h3>Ouvrir un session</h3>

                <TextField
                    required
                    label="Login"
                    className={classes.textField}
                    value={this.state.log}
                    onChange={this.handleChangeLog}
                />

                <TextField
                    required
                    label="Mot de Passe"
                    type="password"
                    className={classes.textField}
                    value={this.state.mdp}
                    onChange={this.handleChangeMdp}
                />

                <div>
                    <Button
                        onClick={() => this.connexion(this.state.log, this.state.mdp)}
                        variant="contained"
                        color="primary"
                        className={classes.button}>
                        Connexion
                    </Button>

                    <div>
                        <Link
                            to="/signin"
                            className={classes.button}>
                            Pas encore inscrit?
                        </Link>

                        <Link
                            to="/newpassw"
                            className={classes.button}>
                            Mot de place oublié?
                        </Link>
                    </div>
                </div>

                <Snackbar
                    autoHideDuration={6000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={!!this.state.msg}
                    onClose={this.handleCloseMsg}
                    message={this.state.msg}
                />
            </form>
        );
    }
}

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});
export default withStyles(styles)(Login);