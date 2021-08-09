import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Select from './CustomSelect'
import Icon from './Icon'

function ReplyEditor(props) {
  const { onSubmit, onCancel } = props

  const textOptions = [
    "Body Text",
    "Header 1",
    "Header 2",
    "Header 3",
  ]
  const [textOp, setTextOp] = useState(textOptions[0])
  const [content, setContent] = useState("")

  const tools = [
    "format_bold",
    "format_italic",
    "format_list_bulleted",
    "format_list_numbered",
    "insert_photo",
    "insert_link",
    "code",
  ]

  const toolbar = (
    <ul className="d-flex ReplyEditor__toolbar">
      <li key="text option" className="me-4">
        <Select
          name="textStyle"
          selected={textOp}
          list={textOptions}
          onSelect={setTextOp}
        />
      </li>
      {tools.map((t, i) =>(
        <li className="me-4" key={i}>
          <a className="link-inverted" onClick={() => {}}>
            <Icon name={t} size="lg" />
          </a>
        </li>
      ))}
    </ul>
  )

  const buttonFooter = (
    <div className="text-end mt-4">
      <button className="btn btn-outline-primary me-3 btn-wide"
        role="button" onClick={() => onCancel()}>
        Cancel
      </button>
      <button className="btn btn-primary btn-wide" role="button" onClick={() => onSubmit(content)}>
        Reply
      </button>
    </div>
  )

  return (
    <div className="card">
      <div className="card-header">
        {toolbar}
      </div>

      <div className="card-body">
        <textarea className="form-control"
          placeholder="Reply an answer..."
          style={{height: "200px"}}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {buttonFooter}
      </div>
    </div>
  )
}

ReplyEditor.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
}

export default ReplyEditor

