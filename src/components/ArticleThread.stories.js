import ArticleThread from "./ArticleThread";
import { article1, article2 } from '../utils/mockdata';

export default {
  title: 'Article/ArticleThread',
  component: ArticleThread
};

const Template = (args) => <ArticleThread {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Please check this file for me, thanks!",
  category: "Chapter Assignment 2 / HTML&CSS",
  thread: [
    {...article1, editable: false},
    {...article2, editable: true}
  ]
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
  thread: []
}