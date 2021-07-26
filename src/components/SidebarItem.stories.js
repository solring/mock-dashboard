import SidebarItem from './SidebarItem';

export default {
  title: 'Sidebar/SidebarItem',
  component: SidebarItem,
};

const Template = (args) => <SidebarItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  icon: "assessment",
  text: "Item Title",
  active: false
};

export const Active = Template.bind({});
Active.args = {
  ...Normal.args,
  active: true
}
