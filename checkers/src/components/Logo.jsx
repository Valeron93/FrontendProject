import checkersLogo from "../assets/CheckersLogo.svg";

export function Logo() {
  return (
    <div className="logo aurore-font">
      <img className="logo-icon" src={checkersLogo} />
      <div className="logo-text">Checkers</div>
    </div>
  );
}
