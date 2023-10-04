import React from "react";
import { useNavigate } from "react-router-dom";

const Table = ({ datas }) => {
  const navigate = useNavigate();
  return (
    <>
      {datas.length === 0 ? (
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
              <th>Responses</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((form, index) => (
              <tr key={form._id}>
                <td>{index + 1}</td>
                <td>
                  <div
                    className="d-flex align-items-center cursor-pointer"
                    onClick={() => navigate(`/admin/forms/${form._id}`)}
                  >
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{form.title}</p>
                    </div>
                  </div>
                </td>
                <td>{form.description}</td>
                <td
                  className="cursor-pointer"
                  onClick={() => navigate(`/admin/forms/${form._id}`)}
                >
                  {form.responseCount}
                </td>
                <td
                  className="cursor-pointer text-blue-800 underline"
                  onClick={() => navigate(`/forms/${form._id}`)}
                >
                  Click
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
