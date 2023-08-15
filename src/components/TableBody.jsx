import { useState } from "react";
import TableContainer from "./TableContainer";
// Redux
import { deleteCharacter } from "../store/slices/charactersSlice";
import { useDispatch } from "react-redux";
// Css and icons
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import "../index.css";

const TableBody = ({ data, space }) => {
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);

  const values = Object.values(data.data);
  const hasChildren =
    data.children.has_nemesis?.records?.length > 0 ||
    data.children.has_secrete?.records?.length > 0;

  console.log(data);

  return (
    <>
      <tbody style={{ position: "relative", left: `${space}px` }}>
        <tr>
          <td>
            {hasChildren && (
              <ChevronRightIcon
                className="expand-icon"
                onClick={() => setExpand(!expand)}
                style={{
                  rotate: expand ? "90deg" : "0deg",
                }}
              />
            )}
          </td>
          {values.map((title) => {
            return <td key={title}>{title}</td>;
          })}
          <td>
            <button
              className="delete-icon"
              onClick={() => dispatch(deleteCharacter(values[0]))}
            >
              <XMarkIcon />
            </button>
          </td>
        </tr>
      </tbody>

      {hasChildren && expand && (
        <TableContainer
          data={
            data.children.has_nemesis?.records ||
            data.children.has_secrete?.records
          }
          space={space + 50}
        />
      )}
    </>
  );
};

export default TableBody;
