import AdminScreen from "./AdminScreen";

const decos = [
  (story) => <div className="vh-100">{story()}</div>
];

export default {
  title: 'Screens/AdminScreen',
  component: AdminScreen,
  decorators: decos
};

const Template = (args) => <AdminScreen {...args} />;
export const Default = Template.bind({});
Default.args = {

};