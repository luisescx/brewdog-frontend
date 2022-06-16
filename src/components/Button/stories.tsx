import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string"
    },
    minimal: {
      control: {
        type: "boolean"
      }
    }
  }
} as Meta<ButtonProps>;

export const Default: Story<ButtonProps> = (args) => (
  <div style={{ width: "400px" }}>
    <Button {...args} />
  </div>
);

Default.args = {
  children: "Sign in now"
};
