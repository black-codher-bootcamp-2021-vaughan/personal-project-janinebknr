import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Search from "./components/Search";
import Header from "./components/Header";
import Login from "./components/Login";
import MemberList from "./components/MemberList";

import "./App.css";

// Services that call our API endpoints
import {
  getAllMembers,
  updateMemberAttendance,
} from "./services/memberService";

function App() {
  const [members, setMembers] = useState(null);
  const [membersPresent, setMembersPresent] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  // GET member data from database
  useEffect(() => {
    async function getMembers() {
      if (!members) {
        const response = await getAllMembers();
        setMembers(response);
      }
    }
    getMembers();
  }, [members]);

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

  async function search(value) {
    // Filter database if member_id includes any numbers in the search term
    let searchResults = members.filter((member) => {
      if (value === "") {
        return member;
      } else if ((member.member_id + "").indexOf(value) > -1) {
        // } else if (member.last_name.toLowerCase().includes(value.toLowerCase())) {
        return member;
      }
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
                stored="absent"
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
              <MemberList members={membersPresent} stored="present" />
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
              <MemberList members={members} stored="admin" />
            </>
          )}
        />
      </Router>
    </>
  );
}

export default App;
