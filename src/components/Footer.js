import React from 'react';

function Footer() {

    return(
        <>
        <footer className="footer mt-auto bg-light">
            <div className="container text-center">
                <span className="text-muted">© John Westermeyer {new Date().getFullYear()}</span>
            </div>
        </footer>
        </>
    )

}

export default Footer;