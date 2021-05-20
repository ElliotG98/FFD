import React, { Component } from 'react';

function IfLoading(Component) {
    return function IfLoading({isLoading, ...props}) {
        if(!isLoading) return <Component {...props} />;
        return (
            <h1 style={{textAlign: 'center', fontsize: '30px'}}>Hold on, fetching data may take some time</h1>
            );
    };
}
export default IfLoading;