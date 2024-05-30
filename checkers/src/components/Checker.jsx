const checkerColorRed = "#771d1d";
const checkerColorWhite = "white";

export function Checker({ red = false }) {
  return (
    <div
      style={{ backgroundColor: red ? checkerColorRed : checkerColorWhite }}
      className="checker"
    ></div>
  );
}
