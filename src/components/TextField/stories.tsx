import { Story, Meta } from "@storybook/react/types-6-0";
import { Person } from "@styled-icons/material-outlined";

import TextField, { TextFieldProps } from ".";

export default {
  title: "Form/TextField",
  component: TextField,
  args: {
    name: "username",
    icon: <Person />,
    initialValue: "",
    placeholder: "Username"
  },
  argTypes: {
    onInput: { action: "changed" },
    icon: {
      control: {
        type: "boolean"
      }
    }
  }
} as Meta<TextFieldProps>;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

withError.args = {
  error: "Ops...something is wrong"
};
