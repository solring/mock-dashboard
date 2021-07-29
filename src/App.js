import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import AdminScreen from './components/AdminScreen';
import AssignmentScreen from './components/AssignmentScreen';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {

  const menu = [
    { title: "Dashboard", icon: 'assessment', link: "/"},
    { title: "Questions", icon: 'question_answer', link: "/"},
    { title: "Assignment", icon: 'assignment', link: "/assignment"},
    { title: "Course", icon: 'video_library', link: "/"},
    { title: "Admin", icon: 'people', link: "/admin"},
    { title: "Settings", icon: 'settings', link: "/"},
  ]
  const [actives, setActives] = useState(Array(menu.length).fill(false));

  let itemList = menu.map((e, i) => ({...e, active: actives[i]}));

  const onSelect = (item, idx) => {
    let newArr = Array(menu.length).fill(false);
    newArr[idx] = true;
    setActives(newArr);
    //window.location.href = menu[idx].link;
    window.location.assign(menu[idx].link);
  }


  return (
    <Router>

    <div className="row g-0 vh-100">
      <div className="col-2 col-lg-3 h-100">
        <Sidebar itemList={itemList} onSelect={onSelect}/>
      </div>

      <div className="col-10 col-lg-9 h-100">
        <Switch>
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route path="/admin">
            <AdminScreen />
          </Route>
          <Route path="/assignment">
            <AssignmentScreen />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
