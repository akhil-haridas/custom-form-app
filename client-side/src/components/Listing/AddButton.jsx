import React from 'react'
import {Link, useNavigate} from "react-router-dom"
const AddButton = () => {
  const navigate = useNavigate()
  return (
      <div className="" style={{ float: "right", marginBottom: "2rem" }}
      onClick={()=>navigate('/admin/create')}>
      <Link className="boxed-btn">Add New Form</Link>
    </div>
  );
};

export default AddButton