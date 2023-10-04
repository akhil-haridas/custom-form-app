import React, { useEffect, useState } from "react";
import Head from "../../components/Home/Head";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Table from "../../components/Listing/Table";
import Footer from "../../components/Listing/Footer";
import AddButton from "../../components/Listing/AddButton";
import { getForms } from "../../utils/axios";
const ListingPage = () => {
  const [forms, setForms] = useState([]);

  const fetchForms = async () => {
    const response = await getForms();
    setForms(response);
  };
  useEffect(() => {
    fetchForms();
  }, []);

  return (
    <>
      <Head active={"forms"} />
      <Breadcrumb current={`CURRENT FORMS(${forms.length})`} />
      <div className="latest-news mb-150">
        <div className="container">
          <div className="row">
            <AddButton />
            <Table datas={forms} columns={ ["No","Form Title","Description","Responses"]} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListingPage;
