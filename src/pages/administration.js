import React from "react";
import store from "../redux/redux_store";
import { connect } from "react-redux";
class Administration extends React.Component {
  
  render() {
    console.log("Administartion store", store);
    const { loginUser } = store.getState();
    const { usersData } = this.props;
    return (
      <div className="App">
        {loginUser.loginUser && usersData && usersData.length > 0 ? (
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {usersData.map((user,index) => {
              return (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <table><tbody><tr><td>There are no users.</td></tr></tbody></table>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { usersData: state.usersData };
};
export default connect(mapStateToProps)(Administration);
