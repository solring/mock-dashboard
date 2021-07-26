import SidebarFooter from './SidebarFooter';
import profile from '../assets/images/andychen.jpeg';

export default {
  title: 'Sidebar/SidebarFooter',
  component: SidebarFooter,
};

const Template = (args) => <SidebarFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  pic: profile,
  user: "User Name",
  email: "test@email.cc"
};

