import ArticleContent from "./ArticleContent";
import { article1 } from '../utils/mockdata';

export default {
  title: 'Article/ArticleContent',
  component: ArticleContent
}

const Template = (args) => <ArticleContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...article1,
  editable: false
};

export const Editable = Template.bind({});
Editable.args = {
  ...Default.args,
  editable: true
};