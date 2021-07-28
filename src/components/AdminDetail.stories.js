import AdminDetail from "./AdminDetail"
import { userdata } from '../utils/mockdata'

export default {
  title: 'Admin/AdminDetail',
  component: AdminDetail
}

const Template = (args) => <AdminDetail {...args} />
export const Default = Template.bind({})
Default.args = {
  ...userdata,
  id: 1,
  show: true
}

export const Verified = Template.bind({})
Verified.args = {
  ...Default.args,
  verified: true
}
