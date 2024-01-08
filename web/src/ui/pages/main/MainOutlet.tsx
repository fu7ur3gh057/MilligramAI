import React from 'react';
import styled from "styled-components";

import {devices} from "../../../utils/screenUtil";

const MainOutlet = () => {
    return (
        <Container>

        </Container>
    );
};

export default MainOutlet;


const Container = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-columns: minmax(50px, auto);
    grid-template-areas: 
    "main main main main main main"
    "bottom bottom bottom bottom bottom bottom";

    @media ${devices.laptop} {
        grid-template-areas:
           //"nav nav nav nav nav nav"
                "left main main main main right"
    }
`;