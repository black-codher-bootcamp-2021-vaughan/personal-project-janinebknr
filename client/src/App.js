import React, { useState, useEffect } from "react";
import Search from "./components/Search";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllMembers } from "./services/memberService";

function App() {
  const [members, setMembers] = useState(null);

  useEffect(() => {
    async function getMembers() {
      if (!members) {
        const response = await getAllMembers();
        setMembers(response);
      }
    }

    getMembers();
  }, [members]);

  const renderMember = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.first_name} 
          ${user.last_name}`}
        </h3>
        <p>
          Member ID: {user.member_id}
          <br />
          Email: {user.email}
        </p>
      </li>
    );
  };

  return (
    <>
      <Search />
      <div>
        <ul>
          {members && members.length > 0 ? (
            members.map((member) => renderMember(member))
          ) : (
            <p>No members found</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
