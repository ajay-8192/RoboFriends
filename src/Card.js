import React from 'react';

const Card = ({id, name, email}) => (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw shadow-2">
        <img src={`https://robohash.org/${id}`} alt="robot"/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
);

export default Card;
