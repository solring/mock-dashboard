import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

import Header from './Header';
import CustomSelect from './CustomSelect';
import ArticleList from './ArticleList';
import ArticleThread from './ArticleThread';

import { articles, article1, article2} from '../utils/mockdata';

const mockThread = [article1, article2];

function AssignmentScreen(props) {

  // TODO: dynamically fetch course list
  const courseList = [
    "Course 1",
    "Course 2",
    "Course 3",
  ];

  const [course, setCourse] = useState(courseList[0]);
  const [articleNum, setArticleNum] = useState(-1);
  const [thread, setThread] = useState([]);

  useEffect(() => {
    // TODO: Fetch course List
    setCourse(courseList[0]);
  }, []);

  // Handlers
  const onCourseSelect = (item, idx) => {
    setCourse(item);
    // TODO: fetch articles of the course
  };

  const onArticleSelect = (item, idx) => {
    setArticleNum(idx);
    // TODO: fetch the article thread
    setThread(mockThread);
  };

  return (
    <div>

      <Header title="Assignment">
        <CustomSelect
          name="Course"
          selected={course}
          list={courseList}
          onSelect={onCourseSelect}
        />
      </Header>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-4 mb-4">
            <ArticleList list={articles} selected={articleNum} onItemSelected={onArticleSelect}/>
          </div>
          <div className="col-12 col-lg-8">
          { articles && articles.length > 0 && articleNum >= 0 &&
            <ArticleThread
              {...articles[articleNum]}
              thread={thread}
            />
          }
          </div>
        </div>

      </div>
    </div>
  );
};

AssignmentScreen.propTypes = {

};

export default AssignmentScreen;

