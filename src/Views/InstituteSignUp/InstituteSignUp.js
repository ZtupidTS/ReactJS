import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const styles = (theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class InstituteSignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      institutename : "",
      institutebranch: "",
      institutecode: "",
      domainemailid: ""
    }
  }
    render(){
        const {classes} = this.props;

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                
                <Typography component="h1" variant="h4">
                Sign Up
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="institutename"
                    label="Institute Name"
                    name="institutename"
                    autoFocus
                    value={this.state.institutename}
                    onChange={e => this.setState({ institutename: e.target.value })}             
   
                
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    // required
                    fullWidth
                    id="institutebranch"
                    label="Institute Branch"
                    name="institutebranch"
                    autoFocus
                    value={this.state.institutebranch}
                    onChange={e => this.setState({ institutebranch: e.target.value })}             
      
                
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="institutecode"
                    label="Institute Code"
                    type="institutecode"
                    id="institutecode"
                    value={this.state.institutecode}
                    onChange={e => this.setState({ institutecode: e.target.value })}             
     
                
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="domainemailid"
                    label="Domain Email-Id"
                    type="domainemailid"
                    id="domainemailid"
                    value={this.state.domainemailid}
                    onChange={e => this.setState({ domainemailid: e.target.value })}             
      
                
                />
                
                {/* <Link to="/inbox" > */}
                    <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
                {/* </Link> */}
                
                </form>
            </div>
            <Box mt={8}>
            </Box>
            </Container>
        );
    }
}
export default withStyles(styles) (InstituteSignUp);