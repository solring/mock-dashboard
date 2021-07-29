import React, { useState, useEffect } from 'react';

import Header from './Header';
import IconButton from './IconButton'
import AdminTable from './AdminTable';
import Pagenation from './Pagenation';
import AdminDetail from './AdminDetail';
import AdminForm from './AdminForm';

import { users } from '../utils/mockdata';

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
    //TODO: fetch user list
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
    setUserEdit({
      userData: {
        name: "",
        email: "",
        verified: false
      },
      editMode: false
  });
    setToggleForm(true);
  }

  const onEditUser = (userdata, idx) => {
    setUserEdit({ userData: userdata, editMode: true });
    setToggleForm(true);
  }


  return (
    <div>
      <Header title="Administration">
        <IconButton
          icon="add"
          title="Add new user"
          onClick={onNewUser}
        />
      </Header>

      <div className="px-4">
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
      </div>

      <AdminDetail
        {...user}
        show={toggleDetail}
        onClose={() => setToggleDetail(false)}
      />

      <AdminForm
        {...userEdit}
        show={toggleForm}
        onClose={() => setToggleForm(false)}
      />
    </div>
  )
};