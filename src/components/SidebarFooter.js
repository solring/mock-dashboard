import PropTypes from 'prop-types';

const SidebarFooter = (props) => {
  const { pic, user, email, onClick } = props;

  const imgSize = {
    width: "48px",
    height: "48px",
  }

  return (
    <a className={`d-flex text-dark ${props.className}`} onClick={onClick}>
      <div className="flex-shrink-0">
        <img src={pic} alt="profile" className="rounded-circle" style={imgSize} />
      </div>
      <div className="flex-shrink-1 ms-3">
        <h6 className="title mb-1">{user}</h6>
        <p className="subtitle text-secondary">{email}</p>
      </div>
    </a>
  );
};

SidebarFooter.propTypes = {
  pic: PropTypes.object,
  user: PropTypes.string,
  email: PropTypes.string,
  onClick: PropTypes.func
}

export default SidebarFooter;