import React, { useState } from "react";
import Head from "../../components/Home/Head";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Listing/Footer";
import Bucket from "../../components/Create/Bucket";
import Adding from "../../components/Create/Adding";
import { createForm } from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { clearDocuments } from "../../redux/slices/documentSlice";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [formData, setFormData] = useState({
    formTitle: "",
    formDescription: "",
  });

  const [formErrors, setFormErrors] = useState({
    formTitle: "",
  });

  const { formTitle, formDescription } = formData;

  const documents = useSelector((state) => state.documents);
  const documentsWithoutIds = documents.map(({ id, ...rest }) => rest);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    if (documentsWithoutIds.length === 0) {
      setFormErrors({
        ...formErrors,
        formFields: "At least one field is required.",
      });
      return;
    }

    const formData = {
      title: formTitle,
      description: formDescription,
      fields: documentsWithoutIds,
    };

    try {
      await createForm(formData);
      setFormData({
        formTitle: "",
        formDescription: "",
      });
      dispatch(clearDocuments());
      navigate("/admin/forms");
    } catch (error) {
      console.error("Error creating form:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formTitle) {
      errors.formTitle = "Form Title is required.";
    } else {
      setFormErrors({ ...formErrors, formTitle: "" });
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <Head active={"AddForm"} />
      <Breadcrumb current={"ADD NEW FORM"} />
      <div className="mt-10 mb-150 flex items-center justify-center w-full">
        <form className="w-full max-w-[65%]">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="formTitle"
              >
                Form Title
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                  formErrors.formTitle && "border-red-500"
                }`}
                id="formTitle"
                name="formTitle"
                placeholder="Enter form title"
                type="text"
                value={formTitle}
                onChange={handleInputChange}
              />
              {formErrors.formTitle && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.formTitle}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="formDescription"
              >
                Description
              </label>
              <textarea
                className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="formDescription"
                name="formDescription"
                placeholder="Something about the form..."
                value={formDescription}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex h-full mb-5 pb-5 bg-gray-100">
            <div className="m-auto pt-2 min-w-[75%]">
              <div>
                <Adding formFieldsError={formErrors.formFields} />
                <Bucket />
              </div>
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className={`shadow bg-teal-400 ${"hover:bg-teal-400"} focus:shadow-outline w-[20%] focus:outline-none text-white font-bold py-2 px-4 rounded`}
                type="button"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </div>
            <div className="md:w-2/3" />
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default CreatePage;
