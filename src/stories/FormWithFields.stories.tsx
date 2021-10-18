import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from 'components/Form/useFormWithFields';

import "styles/setup.scss"
import "styles/global.scss"

export default {
  title: 'Components/Brainy/Form with fields',
  component: Form,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Form>;


const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Default = Template.bind({});

Default.args = {
  fields: [
    {
      name: "Nome",
      label: "Digite seu nome"
    },
    {
      name: "Telefone",
      label: "Digite seu telefone"
    }
  ],
  submitLabel: 'Botão exemplo',
};

