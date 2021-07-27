import ReplyEditor from "./ReplyEditor"

export default {
  title: 'Article/ReplyEditor',
  component: ReplyEditor
};
const Template = (args) => <ReplyEditor {...args} />;
export const Default = Template.bind({});
Default.args = {
  onSubmit: () => {}
}