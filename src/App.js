import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/HomePage/Home';
import Footer from './pages/Footer/Footer';
function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/">
            <Navbar />
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
