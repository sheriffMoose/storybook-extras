import { webpackFinal } from './preset/webpackFinal';

if (module && module.hot && module.hot.decline) {
    module.hot.decline();
}

export default {
    webpackFinal,
};
