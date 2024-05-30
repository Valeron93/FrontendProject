export function Sidebar({ children }) {
  return <div className="sidebar kanit-font">{children}</div>;
}

export function SidebarItem({ text, active, onClick }) {
  return (
    <div
      className={`sidebar-item ${active && "sidebar-item-active"}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
export function AccountSidebarItem({ user, active, setAppState }) {
  if (user) {
    const { username } = user;

    return (
      <div
        className={`account-sidebar-item ${active && "sidebar-item-active"}`}
        onClick={() => {
          setAppState("userProfile");
        }}
      >
        {username}
      </div>
    );
  }

  return (
    <div
      className={`account-sidebar-item ${active && "sidebar-item-active"}`}
      onClick={() => {
        setAppState("login");
      }}
    >
      Login
    </div>
  );
}
