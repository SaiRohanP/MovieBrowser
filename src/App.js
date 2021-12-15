import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import AboutUs from './components/about';
import { Route, Switch } from 'react-router';
import Search from './components/search';
import { useEffect, useState } from 'react';
import Movie from './components/movie'

function App() {

  const [searchText,setSearchText] = useState('');
  const [searchResults,setSearchResults] = useState([]);

  useEffect(()=>{
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=bc3173ce9fa7cf4c415ed4ff68c3ca63&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })
    }
  },[searchText])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" component={AboutUs}/>
        <Route path="/search">
          <Search keyword={searchText} searchResults={searchResults}/>
        </Route>
        <Route path="/movies/:id" component={Movie}/>
      </Switch>
    </div>
  );
}

export default App;
