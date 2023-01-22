import React, { useState } from 'react';
import Toggle from './Toggle';


const History = ( { formData, toggle } ) =>
{

    let history;
    let choice;
    if ( toggle )
    {

        history = [
            [ `In a far away country the ${ formData.adj } ${ formData.noun } was getting ready to figth the ${ formData.adj2 } ${ formData.noun2 }` ],

            [ `There was a  ${ formData.adj2 } ${ formData.noun2 } who loved a ${ formData.adj } ${ formData.noun } ` ],

            [ `Once upon a time , a ${ formData.adj }  ${ formData.noun } was born , some say this creature will defeat the ${ formData.adj2 }  ${ formData.noun2 } ` ]
        ];
        const idx = Math.floor( Math.random() * history.length );
        choice = history[ idx ];
    }
    else { return <div>Create History</div>; }





    return ( <div>
        { choice }
    </div> );



};

export default History;