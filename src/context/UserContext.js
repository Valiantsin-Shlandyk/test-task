import { createContext, useReducer } from 'react';

const initialState = {
  users: [
    { id: 1, name: 'Андрей Смирнов', email: 'andrew@mail.com', role: 'Аналитик', accessLevel: 3 },
    { id: 2, name: 'Ирина Иванова', email: 'irina@mail.com', role: 'Оператор', accessLevel: 2 },
  ],
  logs: []
};

function reducer(state, action) {
  const now = new Date();
  const time = now.toLocaleTimeString('ru-RU');
  const date = now.toLocaleDateString('ru-RU');

  switch (action.type) {
    case 'UPDATE_USER': {
      const updatedUsers = state.users.map(user =>
        user.id === action.payload.id ? { ...user, [action.payload.field]: action.payload.value } : user
      );
      const user = state.users.find(u => u.id === action.payload.id);
      const log = `admin изменил ${action.payload.field === 'role' ? 'роль' : 'уровень доступа'} пользователя ${user.name} [${user[action.payload.field]} -> ${action.payload.value}] в ${time} ${date}`;
      return { ...state, users: updatedUsers, logs: [log, ...state.logs] };
    }
    case 'DELETE_USER': {
      const user = state.users.find(u => u.id === action.payload);
      const updatedUsers = state.users.filter(u => u.id !== action.payload);
      const log = `admin удалил пользователя ${user.name} в ${time} ${date}`;
      return { ...state, users: updatedUsers, logs: [log, ...state.logs] };
    }
    case 'CLEAR_AUDIT': {
      return {...state, logs: []}
    }
    default:
      return state;
  }
}

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
}
