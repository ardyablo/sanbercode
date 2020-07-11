import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home2 from './Latihan2/Home';
import LifeCycle from './Latihan2/LifeCycleComp';
import Soal3 from './minggu2/hari2/soal3';
import Soal4 from './minggu2/hari2/soal4';
import Lifting from './minggu2/hari5/soal1';
import Redux from './minggu3/hari4/latihan';
import Uncontrol from './minggu2/hari4/soal4baru';
import Control from './minggu2/hari4/soal3';

function Home(){
    return(
        <Router>
            <div>
                <h3>Selamat Datang di Pelajaran React JS!</h3>
                <p>Bisa dilihat script-nya juga lho... :)</p>
                <ul>
                    <li><Link to="/dasar">React JS Dasar (Class & Function)</Link></li>
                    <li><Link to="/lc">LifeCycle</Link></li>
                    <li><Link to="/compose">Composing Component</Link></li>
                    <li><Link to="/extract">Extracting Component</Link></li>
                    <li><Link to="/lifting">Lifting State Up</Link></li>
                    {/* <li><Link to="/user">Hooks</Link></li> */}
                    <li><Link to="/redux">Redux</Link></li>
                    <li><Link to="/uncontrol">Uncontrolled List</Link></li>
                    <li><Link to="/control">Controlled List</Link></li>
                </ul>
            </div>

            <Switch>
                <Route path="/dasar"><Home2/></Route>
                <Route path="/lc"><LifeCycle/></Route>
                <Route path="/compose"><Soal3/></Route>
                <Route path="/extract"><Soal4/></Route>
                <Route path="/lifting"><Lifting/></Route>
                <Route path="/redux"><Redux/></Route>
                <Route path="/uncontrol"><Uncontrol/></Route>
                <Route path="/control"><Control/></Route>
            </Switch>
        </Router>  
    )
}

export default Home;