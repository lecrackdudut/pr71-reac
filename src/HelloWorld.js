import React, { useState } from 'react';

function HelloWorld(props) {
    const [affiche, setAffiche] = useState(0);

    const button = <button onClick={handleClick}>Dire bonjour à {props.name}</button>;
    const bonjour = <>Hello {props.name}!</>;

    function handleClick() {
        setAffiche(1);
    }

    return (
        <p>
            {affiche ? bonjour : button}
        </p>
    );
}

export default HelloWorld;
