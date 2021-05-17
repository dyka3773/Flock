import React from 'react';

const TokenContext = React.createContext(null);

export const TokenProvider = TokenContext.Provider;

export default TokenContext;