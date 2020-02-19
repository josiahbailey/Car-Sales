import { combineReducers } from 'redux'

import { featureReducer } from './featureReducers'
// import { additionalFeatureReducer } from './additionalFeatureReducers'

export const rootReducer = combineReducers({
    featureReducer,
    // additionalFeatureReducer
})