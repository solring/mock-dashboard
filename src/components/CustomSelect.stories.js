import CustomSelect from './CustomSelect';

const decorator = (story) => (
  <div className="border border-info">{story()}</div>
);

export default {
  title: 'Primitives/Select',
  component: CustomSelect,
  decorators: [decorator]
};

const simpleOnSelect = (item, idx) => {
};

const Template = (args) => <CustomSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "sample",
  selected: "Init value",
  list: [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
  ],
  onSelect: simpleOnSelect,
};