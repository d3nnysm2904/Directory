import React from 'react';

const FixedComponents = ( props ) =>
{
    return (
        <div>

            <p>Hello i am a fixed component </p>
            <p>Here are some numbers </p>
            <p>{ props.FavNum }</p>
            <p>{ props.FavNum + 1 }</p>
            <p>{ props.FavNum + 2 }</p>


        </div>
    );

};

FixedComponents.defaultProps = {
    favNum: 42
};

export default FixedComponents;