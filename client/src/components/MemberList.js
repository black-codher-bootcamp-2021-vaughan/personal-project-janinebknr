import React from "react";
import Member from "./Member";

const MemberList = ({ members, ...props }) => {
  //   const renderMember = (user) => {
  //   };
  return (
    <div id="content" className="container">
      {members && members.length > 0 ? (
        members.map((member) => (
          <Member key={member._id} member={member} {...props} />
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default MemberList;
