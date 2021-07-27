import Icon from './Icon';
import  PropTypes  from 'prop-types';

const AdminTable = (props) => {
  const {list} = props;
  const schema = [
    "ID",
    "Name",
    "Email",
    "Verified",
    ""
  ]
  return (
    <table className="table table-hover align-middle">
      <thead>
        <tr>
          {schema.map( s => <th>{s}</th>)}
        </tr>
      </thead>
      <tbody>
          {list.map( (item, i) => (
            <tr className="">
              <td>{`#${i}`}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.verified ? "Yes" : "No"}</td>
              <td className="text-end">
                <Icon className="me-4" name="visibility" size="md" />
                <Icon name="edit" size="md" />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
};

AdminTable.propTypes = {
  list: PropTypes.array,
}

export default AdminTable;