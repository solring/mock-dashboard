import Icon from './Icon';
import PropTypes from 'prop-types';

function NumPagenation(props) {
  const {
    curr, window = 5,
    min, max,
    onIndex = () => {},
  } = props;

  let nums = [];
  let start = Math.max(min, curr - Math.floor((window+1)/2));
  let end = Math.min(max, start + window - 1);

  for(let i = start; i<end+1; i++) {
    nums.push(i);
  }

  const onNext = () => {
    if(curr === max) return;
    onIndex(curr+1);
  }

  const onPrev = () => {
    if(curr === min) return;
    onIndex(curr-1);
  }

  return (
    <nav aria-label="page-navigation" className="">
      <ul className="pagination justify-content-end border-primary">
        <li key="prev" className="page-item">
          <a className="page-link" onClick={onPrev}>
            <Icon name="navigate_before" size="md"/>
          </a>
        </li>

        {min && <li key={min} className="page-item"><a className="page-link" onClick={() => onIndex(min)}>{min}</a></li>}
        {min &&
          <li key="upperEllipsis" className="page-item text-primary">
            <a className="page-link" onClick={() => {}}>...</a>
          </li>
        }

        {
          nums.map((n) =>
            <li key={n} className={`page-item d-none d-md-block ${ n === curr ? "active" : ""}`}>
              <a className="page-link" onClick={() => onIndex(n)}>{n}</a>
            </li>
          )
        }

        {max &&
          <li key="lowerEllipsis" className="page-item text-primary">
            <a className="page-link" onClick={() => {}}>...</a>
          </li>
        }
        {max && <li key={max} className="page-item"><a className="page-link" onClick={()=>onIndex(max)}>{max}</a></li>}

        <li key="next" className="page-item">
          <a className="page-link" onClick={onNext}>
            <Icon name="navigate_next" size="md"/>
          </a>
        </li>
      </ul>
    </nav>
  )
};

NumPagenation.propTypes = {
  curr: PropTypes.number,
  window: PropTypes.number,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onIndex: PropTypes.func,
}

export default NumPagenation;
