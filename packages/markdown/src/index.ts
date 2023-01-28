export { storyIndexers, webpack } from './preset';

if (module && module.hot && module.hot.decline) {
    module.hot.decline();
}