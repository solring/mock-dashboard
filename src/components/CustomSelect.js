import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { Dropdown } from 'react-bootstrap';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    className="link-inverted h6 px-3"
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <Icon
      className="align-middle text-primary ms-1"
      name="keyboard_arrow_down" size="md"
    />
  </a>
));

const CustomSelect = (props) => {
  const { name, selected, list, onSelect } = props;

  const selectId = `select_${name}`;

  return (
    <Dropdown>
    <Dropdown.Toggle as={CustomToggle} id={selectId}>
      {selected}
    </Dropdown.Toggle>
    <Dropdown.Menu aria-labelledby={selectId}>
      {list.map((item, i) => (
        <Dropdown.Item eventKey={i} onClick={() => onSelect(item, i)}>{item}</Dropdown.Item>
      ))}
    </Dropdown.Menu>
    </Dropdown>
  );
};

CustomSelect.propTypes = {
  name: PropTypes.string,
  selected: PropTypes.string,
  list: PropTypes.array,
  onSelect: PropTypes.func
}

export default CustomSelect;