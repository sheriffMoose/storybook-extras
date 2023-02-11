import { readFileSync } from 'fs';
import { dirname, join } from 'path';

export default () => {
    return {
        name: 'resources-resolver',
        transform(code, fileName) {
            if (/\.(ts|tsx)$/.test(fileName)) {
                code = new CodeProcessor(fileName, code) //
                    .processTemplate()
                    .processStyles()
                    .getCode();

                return { fileName, code, map: null };
            }
        },
    };
};

class CodeProcessor {
    templateUrlRegex = /templateUrl.*['`"](.*)['`"]/;
    styleUrlsRegex = /styleUrls.*\[(.*)\]/;

    constructor(private fileName: string, private code: string) {}

    private _readContent(resource) {
        const fileName = join(dirname(this.fileName), resource);
        return readFileSync(fileName, 'utf-8');
    }

    private _getResources(regex) {
        const matches = this.code.match(regex)?.[1] || '';
        return matches
            .split(/['`", ]/g)
            .filter(Boolean)
            .map(resource => this._readContent(resource));
    }

    processTemplate() {
        const regex = this.templateUrlRegex;
        const template = this._getResources(regex)?.[0];
        if (template) {
            this.code = this.code.replace(regex, `template: \`\n${template}\n\``);
        }
        return this;
    }

    processStyles() {
        const regex = this.styleUrlsRegex;
        const styles = this._getResources(regex);
        if (styles.length) {
            this.code = this.code.replace(regex, `styles: [\`\n${styles.join('\n\`, \`\n')}\n\`]`);
        }
        return this;
    }

    getCode() {
        return this.code;
    }
}
