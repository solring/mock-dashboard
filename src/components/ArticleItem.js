import PropTypes from 'prop-types';

const ArticleItem = (props) => {
  const { title, category, time, creator, active, onClick } = props;

  const itemPadding = {
    padding: "12px"
  }

  return (
    <a
      className={`d-flex justify-content-between text-dark list-group-item-action list-group-item ${active?"active":""}`}
      onClick={onClick}
      style={itemPadding}
    >
      <div>
        <p className="small">{category}</p>
        <h6>{title}</h6>
      </div>

      <div className="text-end">
        <p className="small">{time}</p>
        <p className="small text-secondary mt-1">{creator}</p>
      </div>
    </a>
  );
}

ArticleItem.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  time: PropTypes.string,
  creator: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

export default ArticleItem;