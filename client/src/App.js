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

  useEffect(() => {
    async function getMembers() {
      if (!members) {
        const response = await getAllMembers();
        setMembers(response);
      }
    }

    getMembers();
  }, [members]);

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
              <MemberList members={members} />
            </>
          )}
        />
      </Router>
    </>
  );
}

export default App;
