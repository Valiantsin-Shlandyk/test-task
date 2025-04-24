import React, { useContext, useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import UserList from './UserList';
import AuditLog from './AuditLog';
import { UserContext } from '../context/UserContext';

function Dashboard() {
  const [tab, setTab] = useState(0);
  const { state, dispatch } = useContext(UserContext);

  return (
    <Box>
      <Tabs value={tab} onChange={(e, val) => setTab(val)}>
        <Tab label="Пользователи" />
        <Tab label="Аудит" />
      </Tabs>
      {tab === 0 && <UserList users={state.users} dispatch={dispatch} />}
      {tab === 1 && <AuditLog logs={state.logs} dispatch={dispatch}/>}
    </Box>
  );
}

export default Dashboard;
