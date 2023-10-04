import React, { useEffect, useState } from "react";
import Head from "../../components/Home/Head";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Table from "../../components/Listing/Table";
import Footer from "../../components/Listing/Footer";
import Spinner from "../../components/Fallback/Spinner"
import AddButton from "../../components/Listing/AddButton";
import { getForms } from "../../utils/axios";

const ListingPage = () => {
  const [forms, setForms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchForms = async () => {
    try {
      const response = await getForms();
      setForms(response);
    } catch (error) {
      console.error("Error fetching forms:", error);
    } finally {
      setIsLoading(false);
    }
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
            <Table
              datas={forms}
              columns={["No", "Form Title", "Description", "Responses"]}
            />
          </div>
        </div>
      </div>
      <Footer />
      {isLoading && (  <Spinner/>)}
    </>
  );
};

export default ListingPage;
