import { AutoRc } from 'auto';

/** Auto configuration */
export default function rc(): AutoRc {
    return {
        plugins: [
            //
            'all-contributors',
            'conventional-commits',
            'first-time-contributor',
            [
                'gh-pages',
                {
                    buildCommand: 'npm run build && npm run build:storybook',
                    dir: './demo/storybook-static',
                },
            ],
            'npm',
            'released',
        ],
    };
}
