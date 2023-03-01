import { Options } from '@storybook/types';
import { AngularConfig } from './types';

export const previewHead = (head, options: Options & AngularConfig) => {
    const upgradeInsecureRequests = options.upgradeInsecureRequests && options.configType === 'PRODUCTION';

    const metaTag = `<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />`;

    return `
${head}
${upgradeInsecureRequests ? metaTag : ''}
`;
};
