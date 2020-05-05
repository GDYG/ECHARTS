import Canvas1 from '../components/Canvas1.js'
import Canvas2 from '../components/Canvas2.js'
import New from '../components/new/New.js'
import New2 from '../components/new/New2.js'

const Route = [
    {
        path: '/',
        component: Canvas1,
        exact: true
    },
    {   
        path: '/canvas',
        component: Canvas2,
        routes: [
            {
                path: '/canvas/',
                component: New,
                exact: true
            },
            {
                path: '/canvas/new2',
                component: New2
            }
        ]
    }

]


export default Route;