import Home from '../pages/Home.jsx'
import Contact from '../pages/Contact.jsx' 
import Information from '../pages/Information.jsx'
import Products from '../pages/Products.jsx' 

export let router = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/information',
        element: <Information />
    },
    {
        path: '/products',
        element: <Products />
    },
]