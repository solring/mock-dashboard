import PropTypes from 'prop-types';

import Icon from './Icon';

const SidebarItem = (props) => {
  const {
    text,
    icon = "",
    active = false,
    onSelected
  } = props


  return (
    <li className={`bg-info SidebarItem ${ active ? "active" : ""}`} >
      <a className={`d-flex align-items-center text-bold`}
        onClick={onSelected}>
        <Icon name={icon} className="d-block" size="lg"/>
        <p className="mx-3">
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
  onSelected: PropTypes.func
};

export default SidebarItem;
