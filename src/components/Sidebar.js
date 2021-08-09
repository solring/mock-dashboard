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

      <h1 className={`logo ${simple ? "logo--sm":""} mb-5 flex-grow-0 flex-shrink-0`}>
        <a className="text-hidden-logo" href="/">ANSWER</a>
      </h1>

      <ul className="flex-grow-1 flex-shrink-1 overflow-scroll">
        {itemList.map((item, idx) => (
          <SidebarItem
            key={idx}
            url={item.link}
            text={simple ? "" : item.title}
            icon={item.icon}
            active={item.active}
            onSelect={() => onSelect(item, idx)}
          />
        ))}
      </ul>
      { userData &&
        <SidebarFooter className="footer flex-grow-0 flex-shrink-0" {...userData} simple={simple}/>
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
