import ArticleItem from './ArticleItem';

const decorator = (story) => (
  <div className="border border-info">{story()}</div>
);

export default {
  title: 'Article/Item',
  component: ArticleItem,
  decorators: [decorator]
}

const Template = (args) => <ArticleItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Question about homework.",
  category: "Homework 1",
  creator: "Emily Y",
  time: "4 hr ago",
  active: false
}

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  active: true
}

