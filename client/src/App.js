import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";
import Header from "./components/Header";
import Login from "./components/Login";
import "./App.css";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllMembers } from "./services/memberService";
import MemberList from "./components/MemberList";

function App() {
  const [members, setMembers] = useState(null);
  const [membersPresent, setMembersPresent] = useState([]);

  useEffect(() => {
    async function getMembers() {
      if (!members) {
        const response = await getAllMembers();
        setMembers(response);
      }
    }

    getMembers();
  }, [members]);

  const markAsAttended = (id) => {
    console.log(id);
    setMembersPresent(
      membersPresent.concat(members.filter((member) => member.member_id === id))
    );
    setMembers([
      ...members.map((member) => {
        if (member.member_id === id) {
          // book.read = true;
        }
        return member;
      }),
    ]);
  };

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
              <Search />
              <MemberList
                members={members}
                stored="check-in-list"
                markAsAttended={markAsAttended}
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
