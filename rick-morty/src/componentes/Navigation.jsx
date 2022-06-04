import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom'
import '../index.css'

export default function Navigation() {
    let activeStyle = {
        textDecoration: "underline",
      };
    
    //   let activeClassName = "underline";
  return (
    <div>
    <Box sx={{flexGrow: 1}}>
      <AppBar sx={{backgroundColor:'#9C27B0'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rick And Morty
          </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',} }}>
                <nav>
                    <ul>
                        <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            HOME
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/Alive"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            ALIVE
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/Dead"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>DEAD</NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/Unknown"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>UNKNOWN</NavLink>
                        </li>
                    </ul>
                </nav>
            </Box> 
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
