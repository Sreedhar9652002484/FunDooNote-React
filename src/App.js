import logo from './logo.svg';
import './App.css';
import SigninForm from './components/signin';
import SignupForm from './components/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/signin' element={< SigninForm />}></Route>
        <Route exact path='/signup' element={< SignupForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
