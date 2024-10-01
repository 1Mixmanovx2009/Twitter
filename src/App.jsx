import React, { useContext } from 'react';
import './App.css'
import LoginRoates from "./routes/LoginRoates"
import DashboardRoates from "./routes/DashboardRoates"
import { Context } from './context/AuthContext'

function App() {
  const { token } = useContext(Context); 

  if(token) {
    return <DashboardRoates/>
  } else {
    return <LoginRoates/>
  }
}

export default App;
