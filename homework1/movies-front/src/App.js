import React from "react";
import CreateElementExample from './createElementExample';
import ComponentExample from './componentExample';
import PureComponentExample from './pureComponentExample';
import FunctionalComponentExample from './functionalComponentExample';

const App = () => {
    return (
        <div className="App">
            Hello world
            <CreateElementExample message="Create Element"/>
            <ComponentExample message="Component"/>
            <PureComponentExample message="Pure component"/>
            <FunctionalComponentExample message='Functional component'/>
        </div>
    );
};


export default App;

