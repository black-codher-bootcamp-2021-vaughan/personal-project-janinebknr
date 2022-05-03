import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";
import Header from "./components/Header";
import Login from "./components/Login";
import { updateMemberAttendance } from "./services/memberService";
import "./App.css";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllMembers } from "./services/memberService";
import MemberList from "./components/MemberList";

function App() {
  const [members, setMembers] = useState(null);
  const [membersPresent, setMembersPresent] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    async function getMembers() {
      if (!members) {
        const response = await getAllMembers();
        setMembers(response);
      }
    }
    getMembers();
  }, [members]);

  // console.log(members.length);

  const markAsAttended = async (id) => {
    console.log(id);
    setMembersPresent(
      membersPresent.concat(members.filter((member) => member.member_id === id))
    );
    setMembers([
      ...members.map((member) => {
        if (member.member_id === id) {
          member.present = true;
        }
        return member;
      }),
    ]);
    await updateMemberAttendance(id);
  };

  function search(value) {
    console.log("Receiving search term from the search component: ", value);
    const searchResults = members.filter((member) => {
      // console.log("Member", member.last_name);
      // console.log("Value", value);
      return value == member.member_id;
    });
    console.log(searchResults);
    setMembers(searchResults);
  }

  return (
    <>
      <Router>
        <Route path="/login" component={() => <Login />} />
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header />
              <Search
                search={search}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <MemberList
                members={members}
                stored="check-in-list"
                markAsAttended={markAsAttended}
                // memberCount={memberCount}
              />
            </>
          )}
        />
        <Route
          exact
          path="/present"
          render={() => (
            <>
              <Header />
              <MemberList members={membersPresent} stored="check-in-list" />
            </>
          )}
        />
        <Route
          exact
          path="/members"
          render={() => (
            <>
              <Header />
              <Search />
              <MemberList members={members} stored="member-list" />
            </>
          )}
        />
      </Router>
    </>
  );
}

export default App;
