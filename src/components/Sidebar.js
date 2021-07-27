import PropTypes from 'prop-types';

import SidebarItem from './SidebarItem';
import SidebarFooter from './SidebarFooter';

import './Sidebar.css';

const Sidebar = (props) => {
  const {
    itemList,
    onItemSelected,
    userData = { pic: null, user: "User", email: "test@email"}
  } = props;

  return (
    <nav className="bg-info Sidebar vh-100 d-flex flex-column">

      <h1 className="logo mb-5 flex-grow-0 flex-shrink-0">
        <a className="text-hidden-logo" href="#">ANSWER</a>
      </h1>

      <ul className="flex-grow-1 flex-shrink-1 overflow-scroll">
        {itemList.map((item, idx) => (
          <SidebarItem key={idx} text={item.title} icon={item.icon} active={item.active} onSelected={onItemSelected}/>
        ))}
      </ul>

      <SidebarFooter className="footer flex-grow-0 flex-shrink-0" {...userData}/>
    </nav>
  )
};

Sidebar.propTypes = {
  itemList: PropTypes.array.isRequired,
  onItemSelected: PropTypes.func,
  userData: PropTypes.object,
}

export default Sidebar;
