if (module && module.hot && module.hot.decline) {
    module.hot.decline();
}

export * from './withVariants.decorator';