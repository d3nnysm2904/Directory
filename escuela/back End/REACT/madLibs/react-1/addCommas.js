function addCommas ( num )
{
    let x = num.toLocaleString();
    const comas = x.split( ',' );
    return comas;
}

module.exports = addCommas;