import React, { useState, useEffect, useCallback } from 'react';

import mockAPI from './delayedPromiseHook';

const AsyncChildComponent = ({ styles, title, delayTime, isSuccess }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [asyncDataMsg, setAsyncDataMsg] = useState('');

    const setLocalStates = useCallback(
        ({ isLoading, msg }) => {
            setIsLoading(isLoading);
            setAsyncDataMsg(msg);
        },
        [setIsLoading, setAsyncDataMsg],
    );

    const apiCallDispatch = useCallback(
        async () => {
            setLocalStates({ isLoading: true, msg: '' });
            mockAPI(delayTime, isSuccess)
                .then(response => setLocalStates({ isLoading: false, msg: response }))
                .catch(response => setLocalStates({ isLoading: false, msg: response }))
        },
        [delayTime, isSuccess, setLocalStates],
    );

    useEffect(() => {
        apiCallDispatch()
    }, [apiCallDispatch]);

    return (
        <div style={{ ...styles }}>
            <h3>{title}</h3>
            {
                isLoading ?
                    <h4>Loading...</h4> :
                    <p>{asyncDataMsg}</p>
            }
        </div>
    );
};

export default AsyncChildComponent;;