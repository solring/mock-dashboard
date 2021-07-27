import Icon from './Icon';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { title } = props;

  const headerPadding = {
    padding: "32px"
  }

  return (
    <header className="p-4 d-flex justify-content-between"
      style={headerPadding}>
      <h2 className="h5 me-4 flex-grow-0 flex-shrink-0">
        {title}
      </h2>
      <div className="flex-grow-1 flex-shirnk-1">
        {props.children}
      </div>
      <div className="flex-grow-0 flex-shrink-0">
        <a className="link-inverted me-4" href="#">
          <Icon  name="notifications" size="lg" />
        </a>
        <a className="link-inverted" href="#">
          <Icon  name="search" size="lg" />
        </a>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string
}

export default Header;