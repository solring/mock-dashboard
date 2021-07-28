import { useState } from 'react';
import PropTypes from 'prop-types';
import ArticleItem from './ArticleItem';
import CustomSelect from './CustomSelect';

const ArticleList = (props) => {
  const { list, selected, onItemSelected } = props;

  const filters = [
    "All",
    "Completed",
    "Open",
    "New",
  ]
  const [filter, setFilter] = useState(filters[0]);

  const doFilter = (f) => {
    //TODO
    return list;
  };
  let filtered = doFilter(filter);

  return (
    <nav>
      <CustomSelect
        name="articleFilter"
        selected={filter}
        list={filters}
        onSelect={((item, idx) => setFilter(item))}
      />
      <div className="list-group mt-2">
        {filtered.map((item, i) =>
          <ArticleItem
            key={i}
            {...item}
            onClick={() => onItemSelected(item, i)}
            active={i===selected}
          />
        )}
      </div>
    </nav>
  );
}

ArticleList.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.number,
  onItemSelected: PropTypes.func
}

export default ArticleList;