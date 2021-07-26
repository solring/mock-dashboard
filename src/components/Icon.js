import './Icon.css';
import PropTypes from 'prop-types';

const Icon = ({ name, size = "md", ...props}) => (
  <span className={`align-middle material-icons icon icon--${size}`}>{name}</span>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['md', 'lg']),
}

export default Icon;