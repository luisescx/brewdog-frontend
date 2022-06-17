import { Story, Meta } from "@storybook/react/types-6-0";
import Heading, { HeadingProps } from ".";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    children: {
      type: "string"
    },
    lineLeft: {
      control: {
        type: "boolean"
      }
    }
  }
} as Meta<HeadingProps>;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;

Default.args = {
  children: "BrewDog",
  color: "white",
  lineLeft: true
};
