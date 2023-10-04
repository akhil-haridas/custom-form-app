import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import Head from "../../components/Home/Head";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Listing/Footer";
import AddButton from "../../components/Listing/AddButton";
import { getFormResponses } from "../../utils/axios";
import Responses from "../../components/Listing/Responses";

const ResponsePage = () => {
  const { id } = useParams();

  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchFormResponses = async () => {
      try {
        const response = await getFormResponses(id);
        setResponses(response);
      } catch (error) {
        console.error("Error fetching form responses:", error);
      }
    };

    fetchFormResponses();
  }, [id]);

    console.log(responses);
  return (
    <>
      <Head active={"forms"} />
      <Breadcrumb current={"FORMS RESPONSES"} />
      <div className="latest-news mb-150">
        <div className="container">
          <div className="row">
            <AddButton />
            <Responses datas={responses} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResponsePage;
