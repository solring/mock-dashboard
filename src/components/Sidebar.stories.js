import Sidebar from './Sidebar';
import profile from '../assets/images/andychen.jpeg';

export default {
  title: 'Sidebar/Sidebar',
  component: Sidebar
}

const dummyHandler = () => {};

const Template = (args) => <Sidebar {...args} />

export const Default = Template.bind({});
Default.args = {
  itemList: [
    { title: "Title 1", icon: 'settings', active: true},
    { title: "Title 2", icon: 'assessment', active: false},
    { title: "Title 3", icon: 'people', active: false},
    { title: "Title 4", icon: 'question_answer', active: false},
    { title: "Title 5", icon: 'video_library', active: false},
  ],
  onItemSelected: dummyHandler,
  userData: {
    pic: profile,
    user: "David Lee",
    email: "david12lee@email.cc"
  }
};
