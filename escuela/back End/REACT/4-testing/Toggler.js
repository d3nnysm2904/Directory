import React from 'react';
import './Toggler.css';


const Toggler = () =>
{

    const [ isShowing, setIsShowing ] = useState( true );
    return (
        <div className='Toggler'>
            <button className='Toggler-btn' onClick={ () => setIsShowing( !isShowing ) } ></button>
            { isShowing && <h1 className='Toggler-text'>Hello world</h1> }

        </div >
    );

};
export default Toggler;