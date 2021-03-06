import Sidebar from './Sidebar';
import profile from '../assets/images/andychen.jpeg';

const decos = [
  (story) => <div className="vh-100">{story()}</div>
];

export default {
  title: 'Sidebar/Sidebar',
  component: Sidebar,
  decorators: decos
}

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemList: [
    { title: "Settings", icon: 'settings', active: true},
    { title: "Assignment", icon: 'assessment', active: false},
    { title: "Admin", icon: 'people', active: false},
    { title: "Questions", icon: 'question_answer', active: false},
    { title: "Course", icon: 'video_library', active: false},
  ],
};

export const Login = Template.bind({});
Login.args = {
  ...Default.args,
  userData: {
    pic: profile,
    user: "David Lee",
    email: "david12lee@email.cc"
  }
}

export const Simple = Template.bind({});
Simple.args = {
  ...Login.args,
  simple: true
}