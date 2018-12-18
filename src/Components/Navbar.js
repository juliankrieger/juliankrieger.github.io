import React from "react";
import * as Colors from '@material-ui/core/colors'
import {MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from '@material-ui/core/styles';

const buttonStyle = {
  marginLeft: 20,
  marginRight: 20
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.grey[900]
    },
    secondary: {
      main: Colors.grey[300]
    },
  },
})

function Navbar(props) {

  return (
    <div>
    <MuiThemeProvider theme={theme}>
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" color="secondary">
              Home
            </Typography>
            <Button style={buttonStyle} color="secondary" href="https://juliankrieger.github.io/up-for-grabs.net/"> Up For Grabs </Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}


export default Navbar;
