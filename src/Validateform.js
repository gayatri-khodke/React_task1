import React from 'react';

function Validateform({userData}) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr>
              {user.map((field) => (
                <td>{field}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Validateform;
