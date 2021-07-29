import PropTypes from 'prop-types';

import Icon from './Icon';

const SidebarItem = (props) => {
  const {
    text,
    icon = "",
    active = false,
    onSelect
  } = props


  return (
    <li className={`bg-info SidebarItem ${ active ? "active" : ""}`} >
      <a className={`d-flex align-items-center`}
        onClick={onSelect}>
        <Icon name={icon} className="d-block" size="lg"/>
        <p className="mx-3 fw-bold">
          {text}
        </p>
      </a>
    </li>
  )
};

SidebarItem.propTypes = {
  icon: PropTypes.string,
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onSelect: PropTypes.func
};

export default SidebarItem;
