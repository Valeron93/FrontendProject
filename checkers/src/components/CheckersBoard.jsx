export function CheckersBoard() {
  const tableSize = 8;
  const createTable = () => {
    let table = [];
    for (let i = 1; i <= tableSize; i++) {
      let row = [];
      for (let j = 1; j <= tableSize; j++) {
        row.push(
          <td
            key={`col${j}`}
            className={(i + j) % 2 === 0 ? "tile tile-dark" : "tile tile-light"}
          ></td>
        );
      }
      table.push(<tr key={`row${i}`}>{row}</tr>);
    }
    return table;
  };

  return (
    <div className="checkers-board">
      <table cellSpacing={0} cellPadding={0} className="checkers-table">
        <tbody>{createTable()}</tbody>
      </table>
    </div>
  );
}
