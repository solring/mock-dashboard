import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { Modal } from 'react-bootstrap';

function AdminForm(props) {
  const {
    userData,
    editMode = false,
    onSubmit,
    onVerify,
    onDelete,
    onClose,
    show,
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
      <label className="form-label" htmlFor="username">
        <small>Name</small>
      </label>
      <input id="username" type="text" className="form-control"
        placeholder="Username" required
        value={state.name}
        onChange={ (e) => setState({...state, name: e.target.value}) }
        disabled={editMode}
      />
    </div>
    <div>
      <label className="form-label" htmlFor="useremail">
        <small>Email</small>
      </label>
      <input id="useremail" type="email" className="form-control"
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
      {accessLevels.map((ele, i) => (
        <option key={i} value={ele}>{ele}</option>
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
            <input className="form-check-input" type="checkbox"
              value={attr} id={id}
              onChange={(e) => setState({...state, [attr]: e.target.value})}
            />
            <label className="form-check-label" htmlFor={id}>
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
      <Modal show={show} onHide={onClose}
        className="modal-dialog-scrollable"
      >
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit(state);
        }}
        >

          <Modal.Header className="border-botton-0 pb-0">
            <h3>{editMode? "Edit ": "New "}Admin</h3>
            <button
              className="btn-close" type="button"
              aria-label="Close" onClick={onClose}>
            </button>
          </Modal.Header>

          <Modal.Body>
            <ul className="list-w-divider">

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
          </Modal.Body>

          <Modal.Footer className="py-3" >
            <button className="btn btn-outline-primary btn-wide me-3" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-primary btn-wide" role="submit">
              {editMode? "Update" : "Add"}
            </button>
          </Modal.Footer>
        </form>
      </Modal>
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
  onClose: PropTypes.func,
  show: PropTypes.bool,
};

export default AdminForm;

