import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contact.class';
import ContactoBComponent from './contactoB';


const ContactoAComponents = () => {
    const Pordefecto = new Contacto('Jose','Melean','JD@gmail.com',true);
    const Pordefecto1 = new Contacto('Jose','Melean','JD@gmail.com',false);
    return (
        <div>
            <h2>Llamando persona:</h2>
            <ContactoBComponent contacto={Pordefecto}></ContactoBComponent>
            <ContactoBComponent contacto={Pordefecto1}></ContactoBComponent>
        </div>
        
    );
};





export default ContactoAComponents;
