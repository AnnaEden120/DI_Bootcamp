import {rootReducer} from './rootReducer'
import {configureStore } from '@reduxjs/toolkit'
import {composeWithDevTools} from 'redux-devtools-extension'


let store=configureStore({ reducer: rootReducer })

export {store}