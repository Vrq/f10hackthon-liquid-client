import React from 'react';
import { MDBFooter } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter className="text-center font-small businesshq-bg  darken-2">
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: L337 Projects 
            </p>
        </MDBFooter>
    );
}

export default Footer;