

const RandomNumRange = ( { min = 1, max = 10 } ) =>
{
    const rand = Math.floor( Math.random() * ( max - min ) ) + min;
    return <span>Rand Is: { rand }</span>;
}




