import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todos from './todo';
import {connect} from 'react-redux';
import * as serviceWorker from '../../serviceWorker';

function Latihan(){
    return(
        <div>
            Ini Adalah Home
        </div>
    )
}

export default Latihan;