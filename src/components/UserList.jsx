import React from 'react';
import { Paper, Typography, Box, Select, MenuItem, TextField, Button } from '@mui/material';
import DOMPurify from 'dompurify';

function UserList({ users, dispatch }) {
  return (
    <Box>
      {users.map(user => (
        <Paper key={user.id} sx={{ p: 2, my: 1, display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
          <Typography><strong>Имя:</strong> {DOMPurify.sanitize(user.name)}</Typography>
          <Typography><strong>Email:</strong> {DOMPurify.sanitize(user.email)}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1}}>
            <Select
              value={user.role}
              onChange={(e) => dispatch({ type: 'UPDATE_USER', payload: { id: user.id, field: 'role', value: e.target.value } })}
              sx={{ mr: 2 }}
            >
              <MenuItem value="Аналитик">Аналитик</MenuItem>
              <MenuItem value="Оператор">Оператор</MenuItem>
              <MenuItem value="Администратор">Администратор</MenuItem>
            </Select>
            <TextField
              label="Уровень доступа"
              type="number"
              inputProps={{ min: 1, max: 5 }}
              value={user.accessLevel}
              onChange={(e) => dispatch({ type: 'UPDATE_USER', payload: { id: user.id, field: 'accessLevel', value: parseInt(e.target.value) } })}
              sx={{ width: 100, mr: 2 }}
            />
            <Button color="error" onClick={() => dispatch({ type: 'DELETE_USER', payload: user.id })}>Удалить</Button>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}

export default UserList;