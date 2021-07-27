import AdminForm from "./AdminForm"
import { userdata } from '../utils/mockdata'

export default {
  title: 'Admin/AdminForm',
  component: AdminForm
};
const Template = (args) => <AdminForm {...args} />;

export const EditMode = Template.bind({});
EditMode.args = {
  userData: userdata,
  editMode: true,
}

export const EditMode_Verified = Template.bind({});
EditMode_Verified.args = {
  userData: {
    ...userdata,
    verified: true,
  },
  editMode: true,
}

export const AddMode = Template.bind({});
AddMode.args = {
  userData: null,
  editMode: false,
}
