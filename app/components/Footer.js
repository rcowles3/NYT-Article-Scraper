import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <hr className="featurette-divider"/>
                <p className="text-center">
                    Application Developed For Educational Purposes By 
                    <a href="https://rcowles.com">
                        Ryan Cowles
                    </a> &middot; 2017 UofA Coding Bootcamp
                        </p>
                <br />
                <p
                    className="text-center">
                    <a href="#">Back to top</a>
                </p>
            </footer>
        )
    }
}

export default Footer;