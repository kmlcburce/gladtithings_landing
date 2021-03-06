import Colors from "./Colors";

export default{
    name: 'Good Terms',
    app_route: 'https://app.gladtithings.com/',
    copyright: 'Copyright © 2022 Good Terms LLC.',
    headerMenu: [{
        title: 'About',
        route: '/about',
        type: 'internal',
        style: null
    }, {
        title: 'Contact',
        route: '/contact-us',
        type: 'internal',
        style: null
    }, {
        title: 'Donate',
        route: '/donate',
        type: 'internal',
        style: null
    }, {
        title: 'Register',
        type: 'external',
        route: 'signup',
        style: null
    }, {
        title: 'Login',
        type: 'external',
        route: 'signin',
        style: {
            borderRadius: 20,
            height: 40,
            paddingLeft: 20,
            paddingRight: 20,
            border: 'solid 1px ' + Colors.secondary
        }
    }]
}