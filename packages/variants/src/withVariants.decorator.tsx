import { makeDecorator } from "@storybook/addons";
import { DECORATOR_NAME, PARAM_KEY } from "./addon.constants";
import { Variants } from "./variants.model";

export const withVariants = makeDecorator({
  name: DECORATOR_NAME,
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: false,
  wrapper: (storyFn, context) => {
    const story: any = storyFn(context);

    const variants = new Variants(storyFn as any, context as any);
    if (!variants.isEnabled()) {
      return story;
    }

    return { ...story, template: variants.getTemplate() };
  },
});
