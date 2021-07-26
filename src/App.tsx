import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import WishList from './pages/WishList';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact> <Home /> </Route>
          <Route path='/movies/:id' > <MovieDetails /> </Route>
          <Route path='/my-wish-list' > <WishList /> </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;