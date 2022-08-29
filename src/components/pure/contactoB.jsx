import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contact.class';

const ContactoBComponent = ({contacto}) => {
    return (
        <div>
            <h1>Nombre:{ contacto.nombre }</h1>
            <h2>Apellido:{ contacto.apellido }</h2>
            <h3>Email: { contacto.email}</h3>
            <h3>Conectado:{ contacto.conectado ? 'Contacto En Línea' : 'Desconectado' }</h3>
        </div>
    );
};


ContactoBComponent.propTypes = {
contacto:PropTypes.instanceOf(Contacto)
};


export default ContactoBComponent;
