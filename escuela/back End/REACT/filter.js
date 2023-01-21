
removing a color;
setColors( colors => colors.filter( colorObj => colorObj.color !== color ) );

another way to change psotion, this is for the circle app somewhere in REACT;

setColors( colors => (
    colors.map( ( colorObj, idx ) => (
        idx === i
            ? { ...colorObj, x: getRandom(), y: getRandom() } : colorObj
    ) )
) );