import Sidebar from './Sidebar';
import profile from '../assets/images/andychen.jpeg';

export default {
  title: 'Sidebar/Sidebar',
  component: Sidebar
}

const dummyHandler = () => {};

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
  onItemSelected: dummyHandler,
  userData: {
    pic: profile,
    user: "David Lee",
    email: "david12lee@email.cc"
  }
};
