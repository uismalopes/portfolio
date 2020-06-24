import React from 'react';
import {Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';

const Routes = ()=>{
    return(
        <HashRouter>
            <NavBar />
            <div className="h-100 justify-content-center align-items-center flex-content-center">
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/works" component={Works} />
            </div>
        </HashRouter>
    );
}

export default Routes;