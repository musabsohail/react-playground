import { createContext } from 'react';
export const counterContext = createContext({
    countValue: undefined,
    changeCounter: () => { },
})