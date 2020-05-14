import React from 'react';

import {Container} from './styles';

const SwitchPage = (props) => {
    return(
        <Container>
            <button onClick={props.prevPage}>Anterior</button>
            <input type="text" readOnly value={props.page} style={{background: '#fff'}}/>
            <button onClick={props.nextPage}>Próximo</button>
        </Container>
    );
}

export default SwitchPage;