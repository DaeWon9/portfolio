import { atom } from 'recoil';

export const WINDOW_SIZE = atom({
    key : 'windowSize',
    default : [{
        width : window.innerWidth,
        height : window.innerHeight
    }]
})