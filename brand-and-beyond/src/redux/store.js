import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginreducer from './loginreducer/loginreducer';
import Signupreducer from './signupreducer/signupreducer';
import toastreducer from './toast/toastreducer';
import Publicblogreducer from './publicblogreducer/publicblogreducer';
import ownblogreducer from './ownblogs/ownblogreducer';
import adminreducer from './adminreducer/adminreducer';
import thunk from 'redux-thunk';


const rootreducer = combineReducers({ loginreducer, Signupreducer, toastreducer, ownblogreducer, Publicblogreducer, adminreducer })




const store = createStore(rootreducer, applyMiddleware(thunk));
export default store


