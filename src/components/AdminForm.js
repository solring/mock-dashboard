import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

function AdminForm(props) {
  const {
    userData,
    editMode = false,
    show = false,
    onSubmit,
    onVerify,
    onDelete,
  } = props;

  const [state, setState] = useState({
    name: "",
    email: "",
    verified: false,
    verifyDate: "",
    accLevel: "",
    lecture: false,
    coupon: false,
    msg: false,
    setting: false,
    task: false
  });

  const accessLevels = [
    "Admin",
    "TA",
    "Student",
  ]

  const customAccess = [
    ["lecture", "Lecture"],
    ["coupon", "Coupon"],
    ["msg", "Message"],
    ["setting", "Settings"],
    ["task", "Task Menu"],
  ]

  useEffect(() => {
    if(userData)
      setState(userData);
  }, [userData]);

  // renderers
  const verifyTag = () => {
    if(state.verified) {
      return (
          <div className="d-flex justify-content-between align-items-center" >
          <p>
            <Icon className="align-text-bottom text-primary" name="check_circle" size="md"/> Verified
          </p>
          <p><small>{state.verifyDate}</small></p>
      </div>
      );
    } else {
      return (
        <div>
        <Icon className="align-text-bottom text-danger" name="warning" size="md"/> Unverified
      </div>
      );
    }
  };

  const verificationBlk = (
      <React.Fragment>

      <h4 className="mb-3" >Verification</h4>

      {verifyTag()}
      <button
        className="btn btn-outline-primary btn-tall w-100 mt-3"
        role="button" disabled={state.verified}
        onClick={onVerify}
      >
        Send Verification Mail
      </button>

      </React.Fragment>
  );

  const userBlk = (
    <React.Fragment>

    <h4 className="mb-3">Account</h4>

    <div className="mb-3" >
      <label class="form-label" forHtml="username">
        <small>Name</small>
      </label>
      <input id="username" type="text" class="form-control"
        placeholder="Username" required
        value={state.name}
        onChange={ (e) => setState({...state, name: e.target.value}) }
        disabled={editMode}
      />
    </div>
    <div>
      <label class="form-label" forHtml="useremail">
        <small>Email</small>
      </label>
      <input id="useremail" type="email" class="form-control"
        placeholder="Email" required
        value={state.email}
        onChange={ (e) => setState({...state, email: e.target.value}) }
        disabled={editMode}
      />
    </div>

    </React.Fragment>
  )

  const accessBlk = (
    <React.Fragment>

    <h4 className="mb-3">Access Level</h4>

    <select className="form-select"
      value={state.accLevel}
      onChange={(e) => setState({...state, accLevel: e.target.value})}
    >
      {accessLevels.map((ele) => (
        <option value={ele}>{ele}</option>
      ))}
    </select>
    </React.Fragment>
  )

  const customBlk = (
    <React.Fragment>

    <h4 >Custom Access</h4>

    <ul>
      {customAccess.map((e) => {
        const [attr, title] = e;
        const id = `checkBox_${attr}`;
        return (
          <li key={attr} className="form-check mt-3" >
            <input class="form-check-input" type="checkbox"
              value={attr} id={id}
              onChange={(e) => setState({...state, [attr]: e.target.value})}
            />
            <label class="form-check-label" forHtml={id}>
              {title}
            </label>
          </li>
        )
      })}
    </ul>
    </React.Fragment>
  )

  const delBlk = (
    <React.Fragment>

    <h4 className="mb-3">Deactivate Account</h4>

    <p className="text-danger">
      <Icon name="warning" size="md" />
      This cannot be undone!
    </p>
    <button className="btn btn-outline-danger btn-tall w-100 my-3" onClick={onDelete}>
      Deactivate This Account
    </button>

    </React.Fragment>
  )

  return (
      <div className="modal-dialog modal-dialog-scrollable">
        <form className="modal-content" onSubmit={onSubmit(state)}>

          <div className="modal-header border-botton-0">
            <h3>{editMode? "Edit ": "New "}Admin</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <ul class="list-w-divider">

              <li key="account">
                {userBlk}
              </li>
              <li key="verify" >
                {verificationBlk}
              </li>
              <li key="access">
                {accessBlk}
              </li>
              <li key="custom-access">
                {customBlk}
              </li>
              { editMode &&
                <li key="delete-account">
                  {delBlk}
                </li>
              }

            </ul>
          </div>

          <div className="modal-footer" >
            <button className="btn btn-outline-primary btn-wide me-3" data-bs-dismiss="modal" aria-label="Cancel">
              Cancel
            </button>
            <button className="btn btn-primary btn-wide" role="submit">
              {editMode? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
  )
};

AdminForm.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    verified: PropTypes.bool.isRequired,
    accLevel: PropTypes.string.isRequired,
    lecture: PropTypes.bool.isRequired,
    coupon: PropTypes.bool.isRequired,
    msg: PropTypes.bool.isRequired,
    setting: PropTypes.bool.isRequired,
    task: PropTypes.bool.isRequired,
  }),
  onSubmit: PropTypes.func,
  onVerify: PropTypes.func,
  onDelete: PropTypes.func,
  editMode: PropTypes.bool,
  show: PropTypes.bool,
};

export default AdminForm;
