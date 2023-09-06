import { atom } from "recoil";

export const WINDOW_SIZE = atom({
    key: "windowSize",
    default: [
        {
            width: window.innerWidth,
        },
    ],
});

export const CENTER_PROJECT = atom({
    key: "centerProject",
    default: 0,
});
