import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

import Icon from './Icon';

const SidebarItem = (props) => {
  const {
    icon = "",
    text
  } = props


  return (
    <Nav.Item className="bg-info text-primary p-3 SidebarItem border-left border-primary">
      <Icon name={icon} className="mr-3"/>
      {text}
    </Nav.Item>
  )
};

SidebarItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default SidebarItem;
