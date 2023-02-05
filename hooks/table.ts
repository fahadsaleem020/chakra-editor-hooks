import { UseTable, Matrix, TableReducer } from "@retap/types";
import { useState, useReducer, useEffect, useMemo } from "react";

const tableReducer: TableReducer = (prev, { type, payload }) => {
  switch (type) {
    case "activate": {
      for (const columns of prev.slice(0, payload?.rowIndex! + 1)) {
        columns
          .slice(0, payload?.cellIndex! + 1)
          .flatMap((cell) => (cell.isActive = true));
      }
      return [...prev];
    }
    case "deactivate": {
      prev.flatMap((cells) => cells.flatMap((cell) => (cell.isActive = false)));
      return [...prev];
    }
    case "generateRows": {
      for (let item = 0; item < payload?.rows!; item++) {
        prev.push([]);
      }
      return [...prev];
    }
    case "generateColumns": {
      for (let item = 0; item < payload?.columns!; item++) {
        prev.flatMap((cells) => cells.push({ isActive: false }));
      }
      return [...prev];
    }
    case "clear": {
      prev = [];
      return [...prev];
    }
    default:
      throw new Error("unknown table action");
  }
};

const useTable: UseTable = ({ columns, rows }) => {
  const [matrix, updateMatrix]: Matrix = useState({ columns, rows });
  const [table, updateTable] = useReducer(tableReducer, []);
  const [withHeader, setWithHeader] = useState(true);

  const tableProps = useMemo(
    () => ({
      matrix,
      table,
      withHeader,
      updateTable,
      updateMatrix,
      setWithHeader,
    }),
    [matrix, table, withHeader]
  );

  useEffect(() => {
    updateTable({ type: "generateRows", payload: { rows } });
    updateTable({ type: "generateColumns", payload: { columns } });
    return () => updateTable({ type: "clear" });
  }, [columns, rows]);
  return tableProps;
};

export { useTable };
