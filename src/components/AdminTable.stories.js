import AdminTable from "./AdminTable"
import { users } from '../utils/mockdata';

export default {
  title: 'Admin/AdminTable',
  component: AdminTable
};
const Template = (args) => <AdminTable {...args} />;
export const Default = Template.bind({});
Default.args = {
  list: users,
}