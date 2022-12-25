import { type StoryObj, type Meta } from "@storybook/angular";
import Button from "./button.component";

const meta: Meta<Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["docsPage"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    isInDocs: true,
  },
};

export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
