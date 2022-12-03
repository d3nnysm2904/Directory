const Bouncer = ( props ) =>
{
    let reply;
    if ( props.age < 18 )
    {
        reply = "you can't enter 🙅‍♂️";
    } else if ( props.age < 21 )
    {
        reply = 'You can enter , but no drinking 🚫 ';
    } else
    {
        reply = <span>You can enter and drink 👍👌
            <img src=" https://media4.giphy.com/media/iOz3p2txHIo4U/giphy.webp?cid=ecf05e4708rvi3hb54mb5i72c2ky2ed30ubgpelt5oeerqpz&rid=giphy.webp&ct=g" />
        </span>;
    }
    return (

        <div>
            <p>
                <b>Bouncer:
                </b>How old are you   </p>

            <p>
                <b>You:</b>
                I am { props.age } years old   </p>
            <p>Bouncer:{ reply }</p>
        </div >

    );
};