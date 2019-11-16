import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


  const styles = theme => ({
    '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  
});

class AddStaff extends React.Component{

  constructor(props) {
		super(props);

		this.state = {
      firstname: '',
      lastname: '',
      username: '',
			emailid: '',
		  department: '',
      role: '',
			otp:'',
			submitted:false
		
		};
	}
 

  render(){
  const {classes} = this.props;
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        
        <Typography component="h1" variant="h4">
          Add Staff
        </Typography>
        <form className={classes.form} >            
              
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="firstname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={this.state.firstname}            
                 />
              	
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastname"
                value={this.state.lastname}
                              />  
            </Grid>
            
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="Username"
                // autoComplete="department"
                value={this.state.username}
              />  
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="department"
                label="Department"
                name="Department"
                // autoComplete="department"
                value={this.state.department}
                />
              	               
            </Grid>
            
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="role"
                label="Role"
                name="role"
                // autoComplete="subject"
                value={this.state.role}
                 />
              	                
              
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="emailid"
                label="Email Id"
                name="emailid"
                // autoComplete="otp"
                value={this.state.emailid}
                 />
              	                
              
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="otp"
                label="otp"
                name="otp"
                // autoComplete="otp"
                value={this.state.otp}
                />
              	                
              
            </Grid>
           
          </Grid>
           
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Add Staff
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
}
}

AddStaff.proptype ={
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AddStaff);
