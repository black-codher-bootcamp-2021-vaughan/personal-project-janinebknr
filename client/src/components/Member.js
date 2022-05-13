import React from "react";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";

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
        {props.stored === "admin" ? (
          <>
            <button type="button" className="btn-view">
              <FaEye /> View
            </button>
            <button type="button" className="btn-edit">
              <FaPen /> Edit
            </button>
            <button type="button" className="btn-delete">
              <FaTrashAlt /> Delete
            </button>
          </>
        ) : props.stored === "present" ? (
          <button type="button" className="btn-cancel">
            Remove
          </button>
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
