import React from "react";
import Head from "../../components/Home/Head";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Table from "../../components/Listing/Table";
import Footer from "../../components/Listing/Footer";
import AddButton from "../../components/Listing/AddButton";
const ListingPage = () => {
  return (
    <>
      <Head active={"forms"} />
      <Breadcrumb current={"CURRENT FORMS"} />
      <div className="latest-news mb-150">
        <div className="container">
          <div className="row">
            <AddButton />
            <Table users={[]} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListingPage;
