import React from 'react';
import useToggleState from './hooks/useToggle';

const Mood = () =>
{
    const [ happy, toggleHappy ] = useToggleState();
    const [ dark, setDark ] = useToggleState( false );
    // const [ happy, setHappy ] = useState( true );
    // const [ dark, setDark ] = useState( false );
    // const changeMood = () => toggleHappy();
    // const toggleDark = () =>
    // {
    //     setDark( mode => !mode );
    // };
    return (
        <div className={ dark ? 'Clicker-dark' : 'Clicker-ligth' } >
            <h1>
                { happy ? '😊' : '😔' }
            </h1>
            <button onClick={ toggleHappy }>Change Mood</button>
            <button onClick={ setDark } >Toggle Dark/Ligth </button>
        </div >

    );
};
export default Mood;;