import TableHead from "./TableHead";
import TableBody from "./TableBody";

const TableContainer = ({ data, space }) => {
  const keys = Object.keys(data[0].data);

  return (
    <>
      <TableHead data={keys} space={space} />

      {data.map((row, index) => {
        return (
          <TableBody
            // Pridal jsem index protoze dva itemy maji stejne ID
            key={row.data.ID + index}
            data={row}
            space={space}
          />
        );
      })}
    </>
  );
};

export default TableContainer;
