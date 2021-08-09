import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Icon from './Icon';

const SidebarItem = (props) => {
  const {
    text,
    icon = "",
    active = false,
    url,
    onSelect
  } = props


  return (
    <li className={`bg-info SidebarItem ${ active ? "active" : ""}`} >
      <Link to={url} className={`d-flex align-items-center`}
        onClick={onSelect}>
        <Icon name={icon} className="d-block" size="lg"/>
        <p className="mx-3 fw-bold">
          {text}
        </p>
      </Link>
    </li>
  )
};

SidebarItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  active: PropTypes.bool,
  url: PropTypes.string,
  onSelect: PropTypes.func
};

export default SidebarItem;
