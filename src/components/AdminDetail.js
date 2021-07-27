import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import { Collapse } from 'react-bootstrap'

function AdminDetail(props) {
  const {
    id,
    name,
    email,
    accLevel,
    verified,
    profilePic,
    onDelete,
    onEdit
  } = props

  const [on, setOn] = useState(false)

  return (
    <div className="modal-dialog modal-dialog-centered" >
      <div className="modal-content" >
        <div className="modal-body">
          <div className="d-flex" >
            <div className="flex-shrink-0 me-3">
              <img className="profile-pic--lg" src={profilePic}/>
            </div>
            <div className="flex-grow-1">
              <p className="mb-1">{`#${id}`}</p>
              <p>{accLevel}</p>
              <h4 className="mb-2">{name}</h4>
              <p className="mb-2 text-muted"><small>{email}</small></p>
              <div>
                {verified && <span className="bg-info px-2">Verified</span>}
                <a className="d-block float-end" role="button" onClick={(e) => setOn(!on)}>
                  <Icon name="keyboard_arrow_down"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Collapse in={on}>
          <div> {/* essencial for collapse */}
          <div className="modal-footer pt-0">
            <button className="btn btn-outline-danger btn-wide me-3" role="button" onClick={onDelete}>
              Deactivate
            </button>
            <button className="btn btn-primary btn-wide" role="button" onClick={onEdit}>
              Edit
            </button>
          </div>
          </div>
        </Collapse>

      </div>
    </div>
  )
}

AdminDetail.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  accLevel: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
  profilePic: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
}

export default AdminDetail
