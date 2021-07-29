import PropTypes from 'prop-types';

import SidebarItem from './SidebarItem';
import SidebarFooter from './SidebarFooter';

import './Sidebar.css';

const Sidebar = (props) => {
  const {
    itemList,
    onSelect,
    userData,
    simple = false
  } = props;

  return (
    <nav className="bg-info Sidebar h-100 d-flex flex-column">

      <h1 className="logo mb-5 flex-grow-0 flex-shrink-0">
        <a className="text-hidden-logo" href="/">ANSWER</a>
      </h1>

      <ul className="flex-grow-1 flex-shrink-1 overflow-scroll">
        {itemList.map((item, idx) => (
          <SidebarItem
            key={idx}
            text={item.title}
            icon={item.icon}
            active={item.active}
            onSelect={() => onSelect(item, idx)}
          />
        ))}
      </ul>
      { userData &&
        <SidebarFooter className="footer flex-grow-0 flex-shrink-0" {...userData}/>
      }
    </nav>
  )
};

Sidebar.propTypes = {
  itemList: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  userData: PropTypes.object,
  simple: PropTypes.bool,
}

export default Sidebar;
