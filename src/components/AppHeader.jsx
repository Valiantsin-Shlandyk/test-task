import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import React from 'react';


function AppHeader() {
    const { auth, setAuth } = useContext(AuthContext);

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Панель управления</Typography>
          {auth && <Button color="inherit" onClick={() => setAuth(false)}>Выйти</Button>}
        </Toolbar>
      </AppBar>
    );
  }

export default AppHeader;