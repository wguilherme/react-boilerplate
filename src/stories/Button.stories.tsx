import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/Button';
import "styles/setup.scss"
import "styles/global.scss"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Botão exemplo',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Botão exemplo',

  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Botão exemplo',
};
