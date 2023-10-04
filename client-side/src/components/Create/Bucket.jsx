import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeDocument } from "../../redux/slices/documentSlice";
const Bucket = ({ document }) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-5 bg-white shadow cursor-pointer rounded-xl">
      <div className="flex">
        <div className="flex-1 py-5 pl-5 overflow-hidden">
          <ul>
            <li className="text-1xl text-gray-600 uppercase">
              FieldType: {document.fieldType}
            </li>
            <li>Field label: {document.question}</li>
            <li>Field placeholder: {document.placeHolder}</li>
            <li>Options: {document.options.join(", ")}</li>
          </ul>
        </div>

        <div className="flex-none pt-2.5 pr-2.5 pl-1">
          <button
            onClick={() => dispatch(removeDocument(document.id))}
            type="button"
            className="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M8 9h8v10H8z" opacity=".3" />
              <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const BucketList = () => {
  const documents = useSelector((state) => state.documents);

  return (
    <div>
      {documents.map((document) => (
        <Bucket key={document.id} document={document} />
      ))}
    </div>
  );
};

export default BucketList;
