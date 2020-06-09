import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';

const Routes = ()=>{
    return(
        <BrowserRouter>
            <div className="content-navbar">
                <NavBar />
            </div>
            <div className="h-100 d-flex justify-content-center align-items-center flex-wrap">
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/works" component={Works} />
            </div>
        </BrowserRouter>
    );
}

export default Routes;