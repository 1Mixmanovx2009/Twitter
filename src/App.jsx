import './App.css'
import LoginRoates from "./routes/LoginRoates"
import DashboardRoates from "./routes/DashboardRoates"

function App() {
  const token = false
  if(token){
    return<DashboardRoates/>
  }

  else {
    return <LoginRoates/>
  }
}

export default App
