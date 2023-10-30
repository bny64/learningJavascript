import React, { useCallback } from "react";
import { CLICK_CELL, CHANGE_TURN } from "./TickTacToe";

const Td = ({ rowIndex, cellIndex, dispatch, celData }) => {
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    dispatch({ type: CHANGE_TURN });
  }, []);

  return <td onClick={onClickTd}>{celData}</td>;
};

export default Td;
