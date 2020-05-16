import React from 'react';
import PropTypes from 'prop-types';

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

SwitchPage.propTypes ={
    prevPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired
}

export default SwitchPage;