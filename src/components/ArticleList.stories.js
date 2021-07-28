import ArticleList from './ArticleList';
import { articles } from '../utils/mockdata';

export default {
  title: 'Article/ArticleList',
  component: ArticleList,
};

const Template = (args) => <ArticleList {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: articles,
  selected: 1,
};
