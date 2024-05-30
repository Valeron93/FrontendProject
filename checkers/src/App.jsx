import { Sidebar, SidebarItem, AccountSidebarItem } from "./components/Sidebar";
import "./App.css";
import { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { CheckersBoard } from "./components/CheckersBoard";
import { Logo } from "./components/Logo";
import { Checker } from "./components/Checker";
import { Leaderboards } from "./components/Leaderboards";

function PlayTab() {
  return (
    <>
      <div className="board">
        <div className="checker-space">
          <Checker />
          <Checker />
          <Checker />
          <Checker />
        </div>
        <div className="board-space">
          <CheckersBoard />
        </div>
        <div className="checker-space">
          <Checker red />
          <Checker red />
          <Checker red />
        </div>
      </div>
    </>
  );
}

function App() {
  const [appState, setAppState] = useState("play");
  const [user, setUser] = useState(null);

  return (
    <div className="container">
      <Sidebar>
        <Logo />
        <SidebarItem
          text={"Play"}
          active={appState === "play"}
          onClick={() => {
            setAppState("play");
          }}
        />
        <SidebarItem
          text={"Leaderboards"}
          active={appState === "leaderboards"}
          onClick={() => {
            setAppState("leaderboards");
          }}
        />
        {user && (
          <>
            <SidebarItem
              text={"History"}
              onClick={() => {
                setAppState("history");
              }}
              active={appState === "history"}
            />
          </>
        )}
        <AccountSidebarItem
          user={user}
          active={appState === "login"}
          setAppState={setAppState}
        />
      </Sidebar>

      <div className="content">
        {appState === "play" && <PlayTab />}
        {appState === "leaderboards" && <Leaderboards />}
        {appState === "login" && (
          <LoginForm setAppState={setAppState} user={user} setUser={setUser} />
        )}
        {appState === "register" && (
          <RegisterForm
            user={user}
            setUser={setUser}
            setAppState={setAppState}
          />
        )}
        {appState === "history" && <>history</>}
      </div>
    </div>
  );
}

export default App;
