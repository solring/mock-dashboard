import SidebarItem from './SidebarItem';

export default {
  title: 'Sidebar/SidebarItem',
  component: SidebarItem,
};

const Template = (args) => <SidebarItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  icon: "accessment",
  text: "Item Title",
};
