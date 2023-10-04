import React from "react";

const Responses = ({ datas }) => {
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
              <th>Date</th>
              <th>Labels</th>
              <th>Responses</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((response, index) => (
              <tr key={response._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{response.Date}</p>
                    </div>
                  </div>
                </td>
                <td>
                  {response.fields.map((field, fieldIndex) => (
                    <div key={field._id}>
                      <strong>{field.label}:</strong>
                    </div>
                  ))}
                </td>
                <td>
                  {response.fields.map((field, fieldIndex) => (
                    <div key={field._id}>
                      <strong>Response:</strong>{" "}
                      {Array.isArray(field.response)
                        ? field.response.join(", ")
                        : field.fieldType === "select"
                        ? field.response.label
                        : field.response}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Responses;
