const path = require('path');

module.exports = {
    template: {
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css'
                }
            ]
        }
    },
    theme: {
        fontFamily: {
            base: '"Montserrat", sans-serif',
            fontSize: '62.5%'
        }
    }
};