import React, { FC } from "react";
import { SyntaxHighlighter, TabsState } from "@storybook/components";
import { getSourceCodeItems } from "../helpers";


export const SourceCode: FC<any> = ({ api, state }) => {
  const { docs, components, services } = state;

  if (!docs) { return null; }

  const items = getSourceCodeItems(docs, { components, services });

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
}
