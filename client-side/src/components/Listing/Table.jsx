import React from "react";
const users = [
  {
    _id: "1",
    FullName: "John Doe",
    description: "john.doe@example.com",
  },
  {
    _id: "2",
    FullName: "Jane Smith",
    description: "jane.smith@example.cmple.com",
  },
  // Add more dummy data as needed
];

const Table = () => {
  return (
    <>
      {users.length === 0 ? (
        <div className="table align-middle mb-0 bg-white">
          <h4>CURRENTLY NO FORMS</h4>
        </div>
      ) : (
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>No.</th>
              <th>Form Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{user.FullName}</p>
                    </div>
                  </div>
                </td>
                <td>{user.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
