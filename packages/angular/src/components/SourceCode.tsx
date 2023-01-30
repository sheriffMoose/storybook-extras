import React, { FC } from 'react';
import { SyntaxHighlighter, TabsState } from '@storybook/components';
import { getSourceCode } from '../helpers';
import { useAddonContext } from './AddonContext';

export const SourceCode: FC<any> = () => {
    const { state } = useAddonContext();
    const { context } = state;

    if (!context) {
        return null;
    }

    const items = context;

    return (
      <TabsState>{
        items.map(item => (
          <div key={item.id} id={item.id} title={item.file.split('/').pop()}>
            <SyntaxHighlighter
              language={item.language}
              showLineNumbers
              format={true}
              copyable={false}
              padded
            >
              {item.sourceCode}
            </SyntaxHighlighter>
          </div>
        ))
      }
      </TabsState>
    );
};
