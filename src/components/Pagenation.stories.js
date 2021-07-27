import Pagenation from "./Pagenation"

export default {
  title: 'Primitives/Pagenation',
  component: Pagenation
};
const Template = (args) => <Pagenation {...args} />;
export const Default = Template.bind({});
Default.args = {
  curr: 2,
  window: 5,
  min: 1,
  max: 20,
}