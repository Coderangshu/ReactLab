import React from 'react';

const date = new Date();
let onlyYear = date.getFullYear();

function Footer() {
    return (
        <footer>
            <p>&copy; {onlyYear} E-Commerce Site</p>
        </footer>
    );
}

export default Footer;
