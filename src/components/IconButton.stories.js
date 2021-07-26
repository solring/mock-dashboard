import IconButton from './IconButton';

export default {
  title: 'Primitives/IconButton',
  component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "add",
  title: "Button title",
};