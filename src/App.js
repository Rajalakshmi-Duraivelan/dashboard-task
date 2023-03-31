
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { BlankPage } from './Components/Blankpage';
import { Border } from './Components/Borders';
import { Buttonpage } from './Components/Buttons';
import Cards from './Components/Cards';
import { Colorpage } from './Components/Colors';
import Dashboard from './Components/Dashboard';
import { NoPage } from './Components/Nopage';
import { Sidebar } from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/buttons">
          <Buttonpage />
        </Route>
        <Route path="/cards">
          <Cards />
        </Route>
        <Route path="/colors">
          <Colorpage />
        </Route>        
        <Route path="/borders">
          <Border />
        </Route>
        <Route path="/no-page">
          <BlankPage />
        </Route>
        <Route path="/blank-page">
          <NoPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
