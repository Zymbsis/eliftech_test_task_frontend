import { createContext, useContext } from 'react';

export const EventContext = createContext();
export const useEventContext = () => useContext(EventContext);
