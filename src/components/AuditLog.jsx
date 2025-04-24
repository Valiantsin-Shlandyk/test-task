import React from 'react';
import { Paper, Box, Typography, Button} from '@mui/material';

function AuditLog({ logs, dispatch }) {
  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{display: 'flex'}}>
        <Typography variant="h6">Журнал действий</Typography>
        <Button variant='outlined' size='small' onClick={() => dispatch({type: 'CLEAR_AUDIT'})} sx={{ml: 4}}>Очистить</Button>
      </Box>
      {logs.map((log, index) => (
        <Typography key={index} variant="body2" sx={{pt: 2}}>{log}</Typography>
      ))}
    </Paper>
  );
}

export default AuditLog;
