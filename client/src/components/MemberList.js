import React from "react";
import Member from "./Member";

const MemberList = ({ members, ...props }) => {
  //   const renderMember = (user) => {
  //   };
  return (
    <div className="container">
      {members && members.length > 0 ? (
        members.map((member) => (
          <Member
            key={member.member_id}
            member={member}
            stored="memberlist"
            {...props}
          />
        ))
      ) : (
        <p>No members found</p>
      )}
    </div>
  );
};

export default MemberList;
