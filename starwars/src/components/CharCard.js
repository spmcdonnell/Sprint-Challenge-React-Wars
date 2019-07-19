import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    width: 28%;
    background-color: #ececec;
    padding: 2%;
    margin-bottom: 2%;
    border-radius: 10px;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.5);
`;

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
`;

function CharCard({ person }) {
    return (
        <CardDiv className="card">
            <h2>{person.name}</h2>
            <StyledUl>
                <li>Birth year: {person.birth_year}</li>
                <li>Height: {person.height}cm</li>
                <li>Weight: {person.mass}cm</li>
            </StyledUl>
        </CardDiv>
    );
}

export default CharCard;
