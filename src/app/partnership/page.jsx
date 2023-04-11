import React from "react";
import BecomeApartner from "../components/BecomeApartner/BecomeApartner";
import BreadcrumbsClient from "../components/utils/Breadcrumbs/BreadcrumbsClient";

const page = () => {
    const breadcrumbs = [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'Became a partner',
        },
      ]
  return (
    <main>
      <header className="simple-page-header">
        <div className="p-4 lg:px-8">
          <h1>Join fitndur - become our partner</h1>
          <p>
            1000s of users are looking to find out about your fitness business,
            let us help you to reach out to them.
          </p>
          <BreadcrumbsClient breadcrumbs={breadcrumbs}/>
        </div>
      </header>
      <BecomeApartner />
    </main>
  );
};

export default page;
