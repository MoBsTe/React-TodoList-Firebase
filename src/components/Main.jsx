import React, { Children } from 'react';

const Main = ({ children }) => {
    return (
        <div className='Main'>
            {children}
        </div>
    );
}

export default Main;
