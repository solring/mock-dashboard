import Header from './Header';
import CustomSelect from './CustomSelect';
import IconButton from './IconButton';

const decorator = (story) => (
  <div className="border border-info">{story()}</div>
);

export default {
  title: 'Header/Header',
  component: Header,
  decorators: [decorator]
}

const list = [
  "Course 1",
  "Course 2",
  "Course 3",
];

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Page Title"
}

export const Assessment = Template.bind({});
Assessment.args = {
  title: "Assessment",
  children: (
    <CustomSelect
      name="Course"
      selected="Course"
      list={list}
      onSelected={() => {}}
    />
  )
}

export const Admin = Template.bind({});
Admin.args = {
  title: "Administration",
  children: (
    <IconButton
      title="Add New Admin"
      icon="add"
    />
  )
}