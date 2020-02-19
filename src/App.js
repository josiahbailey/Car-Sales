import React from 'react';

import { connect } from 'react-redux'
import { addFeature, removeFeature } from './actions/featureActions'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({ additionalPrice, car, additionalFeatures, addFeature, removeFeature }) => {
   return (
      <div className="boxes">
         <div className="box">
            <Header car={car} />
            <AddedFeatures removeFeature={removeFeature} car={car} />
         </div>
         <div className="box">
            <AdditionalFeatures addFeature={addFeature} additionalFeatures={additionalFeatures} />
            <Total car={car} additionalPrice={additionalPrice} />
         </div>
      </div>
   );
};

const mapStateToProps = state => {
   // console.log(state)
   return {
      additionalPrice: state.featureReducer.additionalPrice,
      car: state.featureReducer.car,
      additionalFeatures: state.featureReducer.additionalFeatures
   }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
