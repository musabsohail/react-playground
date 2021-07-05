import React, { useState } from 'react';

import AsyncChildComponent from './AsyncChildComponent';
import { counterContext } from './counterContext';

const mainDashboardStyles = {
    display: 'flex',
    height: '100vh',
    minWidth: '100%',
    justifyContent: 'space-around',
}

const childComponentStyles = {
    width: '350px',
    height: '350px',
    backgroundColor: '#bdac8a',
    margin: '55px 20px',
    textAlign: 'center',
}

const btnStyle = {
    display: 'block',
    height: '60px',
    width: '120px'
};


const MainDashboardComponent = () => {
    const [count, setCount] = useState(0);


    return (
        <div style={{ ...mainDashboardStyles }} >
            <div style={{ ...childComponentStyles }}>
                <h1>Count Value is {count}</h1>
            </div>
            <counterContext.Provider value={{ countValue: count, changeCounter: setCount }}>
                <CounterButton />
            </counterContext.Provider>
            <AsyncChildComponent
                title='first component'
                styles={childComponentStyles}
                delayTime={2000}
                isSuccess
            />
            <AsyncChildComponent
                title='second component'
                styles={childComponentStyles}
                delayTime={4000}
                isSuccess
            />
            <AsyncChildComponent
                title='3rd component'
                styles={childComponentStyles}
                delayTime={8000}
                isSuccess
            />            <AsyncChildComponent
                title='4th component'
                styles={childComponentStyles}
                delayTime={12000}
                isSuccess={false}
            />            <AsyncChildComponent
                title='5th component'
                styles={childComponentStyles}
                delayTime={30000}
                isSucces={false}
            />
        </div>
    );
};

const CounterButton = () => {
    const { changeCounter } = React.useContext(counterContext);

    return (<div style={{ ...childComponentStyles }}>
        <button style={{ ...btnStyle }} onClick={() => changeCounter(prev => prev + 1)}>Add +1</button>
        <button style={{ ...btnStyle }} onClick={() => changeCounter(prev => prev - 1)}>Subtract -1</button>
    </div>);
}

export default MainDashboardComponent;