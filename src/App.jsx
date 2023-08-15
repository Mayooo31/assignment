import "bootstrap/dist/css/bootstrap.min.css";
import TableContainer from "./components/TableContainer";
import { Table } from "react-bootstrap";
// Redux
import { useSelector } from "react-redux";

const App = () => {
  const characters = useSelector((state) => state.characters.characters);

  return (
    <Table variant="dark" striped hover>
      <TableContainer data={characters} space={0} />
    </Table>
  );
};

export default App;
