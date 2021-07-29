import AssignmentScreen from "./AssignmentScreen"

const decos = [
  (story) => <div className="vh-100">{story()}</div>
];

export default {
  title: 'Screens/AssignmentScreen',
  component: AssignmentScreen,
  decorators: decos
}
const Template = (args) => <AssignmentScreen {...args} />
export const Default = Template.bind({})
Default.args = {

}