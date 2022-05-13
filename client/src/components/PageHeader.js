import React from "react";

const PageHeader = (props) => {
  return (
    <div className="pageTitle container">
      {props.page === "absent" ? (
        <>
          <h2>Let's check in!</h2>
          <p>
            Type the Member ID or last name to find the member, then click
            "Check-in"
          </p>
        </>
      ) : props.page === "present" ? (
        <h2>Who's present?</h2>
      ) : (
        <h2>Manage members</h2>
      )}
    </div>
  );
};

export default PageHeader;
