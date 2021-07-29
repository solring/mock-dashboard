import Icon from './Icon';
import  PropTypes  from 'prop-types';


const AdminTable = (props) => {
  const {list, onSelect, onEdit } = props;
  const schema = [
    "ID",
    "Name",
    "Email",
    "Verified",
    ""
  ]

  const BlockLink = (props) => (
    <a className="d-block h-100 text-dark" onClick={() => onSelect(props.item, props.idx)}>
      {props.children}
    </a>
  );

  return (
    <table className="table table-hover align-middle">
      <thead>
        <tr key="header">
          {schema.map( (s, i) => <th key={i}>{s}</th>)}
        </tr>
      </thead>
      <tbody>
          {list.map( (item, i) => (
            <tr key={i}>
              <td key="id"><BlockLink item={item} idx={i} >{`#${item.id? item.id: i}`}</BlockLink></td>
              <td key="name"><BlockLink item={item} idx={i} >{item.name}</BlockLink></td>
              <td key="email"><BlockLink item={item} idx={i} >{item.email}</BlockLink></td>
              <td key="verified"><BlockLink item={item} idx={i} >{item.verified ? "Yes" : "No"}</BlockLink></td>
              <td key="btns" className="text-end">
                <a className="link-inverted" onClick={() => onSelect(item, i)}>
                  <Icon className="me-4" name="visibility" size="md" />
                </a>
                <a className="link-inverted" onClick={() => onEdit(item, i)}>
                  <Icon name="edit" size="md" />
                </a>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
};

AdminTable.propTypes = {
  list: PropTypes.array,
  onSelect: PropTypes.func,
  onEdit: PropTypes.func,
}

export default AdminTable;