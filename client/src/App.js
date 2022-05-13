import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Search from "./components/Search";
import Header from "./components/Header";
import Login from "./components/Login";
import MemberList from "./components/MemberList";
import PageHeader from "./components/PageHeader";

import "./App.css";

// Services that call our API endpoints
import {
  getAllMembers,
  updateMemberAttendance,
} from "./services/memberService";

function App() {
  const [members, setMembers] = useState(null);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const [membersPresent, setMembersPresent] = useState([]);

  // GET member data from database
  useEffect(() => {
    document.title = "Regyster";
    console.log("Search message inside useEffect: ", searchTerm);

    async function getMembers() {
      if (!members) {
        const response = await getAllMembers();
        setMembers(response);
      }
    }
    getMembers();
  }, [members, searchTerm]);

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

  const presentCount = membersPresent.length;

  // Filtering with search bar
  async function search(value) {
    console.log("Search message inside value: ", value);

    // Filter database if member_id includes any numbers in the search term
    let searchResults = members.filter((member) => {
      if (value === "") {
        return member;
      } else if (
        (member.member_id + "").indexOf(value) > -1 &&
        !member.present
      ) {
        // } else if (member.last_name.toLowerCase().includes(value.toLowerCase())) {
        return member;
      }
    });
    setFilteredMembers(searchResults);
  }

  return (
    <>
      <Router>
        <Route path="/login" component={() => <Login />} />
        <Route
          exact
          path="/"
          render={() => (
            <div className="invert">
              <Header presentCount={presentCount} />
              <PageHeader page="absent" />
              <Search
                search={search}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <MemberList
                members={filteredMembers}
                stored="absent"
                markAsAttended={markAsAttended}
                // memberCount={memberCount}
              />
            </div>
          )}
        />
        <Route
          exact
          path="/present"
          render={() => (
            <>
              <Header presentCount={presentCount} />
              <PageHeader page="present" />
              <MemberList members={membersPresent} stored="present" />
            </>
          )}
        />
        <Route
          exact
          path="/members"
          render={() => (
            <>
              <Header presentCount={presentCount} />
              <PageHeader page="admin" />
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
