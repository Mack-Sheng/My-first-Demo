export default {
    path:'/movie',
    component : () => import('@/views/movie'),
    children : [
        {
            path : 'city',
            component : () =>import('@/components/city')
        },
        {
            path : 'NowPlaying',
            component : () =>import('@/components/NowPlaying')
        },
        {
            path : 'ComingPlay',
            component : () =>import('@/components/ComingPlay')
        },
        {
            path : 'search',
            component : () =>import('@/components/search')
        },
    ]
}