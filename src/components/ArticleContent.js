import PropTypes from 'prop-types';
import Icon from './Icon';

const ArticleContent = (props) => {
  const { thumbnail, creator, time, content, attaches, editable } = props;

  const genAttachment = () => {
    if (attaches && attaches.length > 0) {

      return (
        <ul className="overflow-scroll w-100">
          {attaches.map((a, i) =>
            <li key={i} className="me-3 d-inline-block">
              <button className="btn btn-primary custom-button fw-bold" onClick={a.onClick}>
                <Icon className="me-2" name="attach_file" size="lg" />
                {a.name}
              </button>
            </li>
          )}
        </ul>
      );
    }
  };

  return (
    <div className="d-flex">

      <div className="flex-shrink-0 flex-grow-0 pe-2">
        <img className="profile-pic" src={thumbnail}/>
      </div>

      <div className="flex-shrink-1 flex-grow-1">
        <div className="d-flex justify-content-between">
          <div>
            <p className="fw-bold">{creator}</p>
            <small className="text-secondary">{time}</small>
          </div>
          {editable &&
            <div>
              <a className="link-inverted me-4" href="#">
                <Icon  name="star_outline" size="lg" />
              </a>
              <a className="link-inverted me-4" href="#">
                <Icon  name="edit" size="lg" />
              </a>
            </div>
          }
        </div>

        <p className="my-3">
          {content}
        </p>

        {genAttachment()}

      </div>
    </div>
  );
};

ArticleContent.propTypes = {
  thumbnail: PropTypes.string,
  creator: PropTypes.string,
  time: PropTypes.string,
  content: PropTypes.string,
  attaches: PropTypes.array,
  editable: PropTypes.bool
}

export default ArticleContent;