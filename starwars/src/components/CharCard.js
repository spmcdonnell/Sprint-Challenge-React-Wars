import React from 'react';

function CharCard({ person }) {
    return (
        <div className="card">
            <h2>{person.name}</h2>
        </div>
    );
}

export default CharCard;
