import React, { useState, useEffect } from 'react';

import Header from './Header';
import IconButton from './IconButton'
import AdminTable from './AdminTable';
import Pagenation from './Pagenation';
import AdminDetail from './AdminDetail';
import AdminForm from './AdminForm';

import { users } from '../utils/mockdata';
import Icon from './Icon';

const NUMBER_PER_PAGE = 7;

export default function AdminScreen() {

  const [userList, setUserList] = useState([]);

  const [page, setPage] = useState(1); // Note: page starts from 1 for pagenation
  const [user, setUser] = useState({});
  const [userEdit, setUserEdit] = useState({});
  const [toggleDetail, setToggleDetail] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);

  const pagesLen = Math.floor(userList.length / NUMBER_PER_PAGE) + 1;

  useEffect(() => {
    setUserList( users.map((item, i) => ({...item, id: i})) )
  }, [])

  // Helper functions
  const listPage = (p) => {
    if (p <= 1)
      return userList.slice(0, NUMBER_PER_PAGE);

    if(p > pagesLen) p = pagesLen;
    const start = (p-1) * NUMBER_PER_PAGE;
    const end = Math.min(userList.length, start + NUMBER_PER_PAGE);
    return userList.slice(start, end);
  }

  // Handlers
  const onPageChange = (i) => {
    setPage(i);
  }

  const onUserSelect = (e, i) => {
    setUser(e);
    setToggleDetail(true);
  }

  const onNewUser = () => {
    setUserEdit({});
    setToggleForm(true);
  }

  const onEditUser = (userdata, idx) => {
    setUserEdit(userdata);
    setToggleForm(true);
  }


  return (
    <div className="container-fluid" >
      <Header title="Administration">
        <IconButton
          icon="add"
          title="Add new user"
          onClick={onNewUser}
        />
      </Header>

      <AdminTable
        list={listPage(page)}
        onSelect={onUserSelect}
        onEdit={onEditUser}
      />

      <Pagenation
        curr={page}
        window={5}
        min={1}
        max={pagesLen}
        onIndex={onPageChange}
      />

      <div className={`modal fade ${toggleDetail ? "show" : ""}`}>
        <AdminDetail {...user} onClose={() => setToggleDetail(false)}/>
      </div>


      <div className={`modal fade ${toggleForm ? "show" : ""}`}>
        <AdminForm {...userEdit} onClose={() => setToggleForm(false)}/>
      </div>
    </div>
  )
};
