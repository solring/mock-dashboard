import Icon from './Icon';
import PropTypes from 'prop-types';

const IconButton = (props) => {
  const { icon, title, onClick } = props;
  return (
    <a
      className="link-inverted h6 p-3"
      onClick={onClick}
    >
      <Icon className="align-middle text-primary me-2" name={icon} size="lg" />
      {title}
    </a>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
}

export default IconButton;