import React, { useCallback, useEffect, useRef } from "react";
import { CLICK_CELL } from "./TickTacToe";

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
  const ref = useRef([]);
  useEffect(() => {
    console.log(rowIndex);
    ref.current = [rowIndex, cellIndex, dispatch, cellData];
  }, [rowIndex, cellIndex, dispatch, cellData]);

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return <td onClick={onClickTd}>{cellData}</td>;
};

export default Td;
