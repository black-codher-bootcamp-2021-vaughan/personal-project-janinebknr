import React from "react";

const Member = ({ member, ...props }) => {
  //Nested Destructuring
  const { first_name, last_name, member_id, photo_url } = member;

  return (
    <div className="member">
      <img src={photo_url} alt={first_name} />
      <div className="details">
        <h3 className="member-name">
          {first_name} {last_name}
        </h3>
        <p>Member ID: {member_id}</p>
      </div>
      <div className="member-buttons">
        {props.stored === "member-list" ? (
          <>
            <button type="button" className="btn-view">
              View
            </button>
            <button type="button" className="btn-edit">
              Edit
            </button>
            <button type="button" className="btn-delete">
              Delete
            </button>
          </>
        ) : (
          <button
            type="button"
            className="btn-check-in"
            onClick={() => props.markAsAttended(member_id)}
          >
            Check-in
          </button>
        )}
      </div>
    </div>
  );
};

export default Member;
