import HomeScreen from "./HomeScreen";

export default {
  title: 'Screens/HomeScreen',
  component: HomeScreen
};
const Template = (args) => <HomeScreen {...args} />;
export const Default = Template.bind({});
Default.args = {

};