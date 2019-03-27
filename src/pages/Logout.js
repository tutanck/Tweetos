import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';





class Logout extends React.Component {
    render() {
       const {classes} = this.props //const classes = this.props.classes;
        return (
            <Button
                onClick={this.props.deconnect}
                variant="contained" color="secondary"
                className={classes.button}>
                Deconnexion
            </Button>
        );
    }
}

const styles =  {
    button: {
      margin: 2
    },
  };


  export default withStyles(styles)(Logout); 



