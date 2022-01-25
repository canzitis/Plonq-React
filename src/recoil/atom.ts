import { atom } from 'recoil';

const initialState = {
    pageLoaded: false,
};

export const PageLoaded = atom({
    key: 'PageLoaded',
    default: initialState,
});
