import Icon from './Icon';

export default {
  title: 'Primitives/Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  name: "accessment",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  name: "accessment",
  size: "large",
};