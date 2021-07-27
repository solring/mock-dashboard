import ArticleList from './ArticleList';

export default {
  title: 'Article/ArticleList',
  component: ArticleList,
};

const dummyList = [
  {
    title: "Unknown problem about setting",
    category: "Homework 3",
    creator: "Emily Collins",
    time: "1 day ago"
   },
  {
    title: "Cannot find reference files.",
    category: "Homework 5",
    creator: "J Baron",
    time: "3 hrs ago"
   },
  {
    title: "Permission required.",
    category: "Homework 2",
    creator: "David Lewis",
    time: "3 days ago"
   },
  {
    title: "Is overdue homework acceptable?",
    category: "General",
    creator: "CK Lin",
    time: "12 hrs ago"
   },
]

const Template = (args) => <ArticleList {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: dummyList,
  selected: 1,
  onItemSelected: () => {}
};
