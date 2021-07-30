import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';
import CustomCollapse from './CustomCollapse';
import ReplyEditor from './ReplyEditor';

import ArticleContent from './ArticleContent';

const ArticleThread = (props) => {
  const { title, category, thread } = props;

  // For Text Editor
  const [ toggle, setToggle ] = useState(false);

  const genArticles = () => {
    if(thread && thread.length > 0) {
      return (
        <ul className="ArticleThread__thread">
          {thread.map((article, i) =>
            <li key={i}>
              <ArticleContent {...article} />
            </li>
          )}
        </ul>
      );
    } else {
      return (
        <div className="alert alert-info">
          <h6>No articles in this thread.</h6>
        </div>
      );
    }
  };

  const footer = (
    <div className="d-flex justify-content-between mt-3">
      <div>
        <a className="me-4" onClick={() => {}}>
          <Icon name="navigate_before" size="lg" />
        </a>
        <a onClick={() => {}}>
          <Icon name="navigate_next" size="lg" />
        </a>
      </div>

      <div className="d-flex">
        <button className="btn btn-outline-primary me-3 btn-wide" role="button">
          Mark as read
        </button>
        <button className="btn btn-primary btn-wide" role="button"
          onClick={() => setToggle(true)}
        >
          Reply
        </button>
      </div>
    </div>
  );

  return (
    <div className="position-relative">
      <div className="card">

        <div className="card-header">
          <div className="d-flex justify-content-between">
            <div>
              <p className="small">{category}</p>
              <h6>{title}</h6>
            </div>
            <a className="btn btn-link link-inverted" onClick={(e) => {}}>
              <Icon name="more_vert" size="lg" />
            </a>
          </div>
        </div>

        <div className="card-body">
          {genArticles()}
        </div>
      </div>

      {footer}
      <CustomCollapse on={toggle}>
        <ReplyEditor
          onCancel={() => setToggle(false)}
          onSubmit={(e) => {}}
        />
      </CustomCollapse>
    </div>
  );
};

ArticleThread.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  thread: PropTypes.array,
};

export default ArticleThread;