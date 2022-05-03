import React from "react";

const Member = ({ member, ...props }) => {
  return (
    <div className="member">
      <h3>
        {`${member.first_name} 
            ${member.last_name}`}
      </h3>
      <p>
        Member ID: {member.member_id}
        <br />
        Email: {member.email}
      </p>
    </div>
  );
};

export default Member;
