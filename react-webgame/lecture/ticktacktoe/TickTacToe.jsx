import React, { useCallback, useEffect, useReducer } from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "O",
  tableData: [Array(3).fill(""), Array(3).fill(""), Array(3).fill("")],
  recentCell: [-1, -1],
};

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      // state.winner = action.winner : 이렇게 하면 안됨
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL:
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    case CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };

    case RESET_GAME:
      return {
        ...state,
        turn: "O",
        tableData: [Array(3).fill(""), Array(3).fill(""), Array(3).fill("")],
        recentCell: [-1, -1],
      };
    default:
      return state;
  }
};

const TickTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickTable = useCallback(() => {
    //dispatch 안에들어가는 건 action
    dispatch({
      type: SET_WINNER,
      winner: "0",
    });
  }, []);

  useEffect(() => {
    const [row, cell] = state.recentCell;
    if (row < 0) return;
    let win = false;
    if (
      state.tableData[row][0] === state.turn &&
      state.tableData[row][1] === state.turn &&
      state.tableData[row][2] === state.turn
    ) {
      win = true;
    }
    if (
      state.tableData[0][cell] === state.turn &&
      state.tableData[1][cell] === state.turn &&
      state.tableData[2][cell] === state.turn
    ) {
      win = true;
    }
    if (
      state.tableData[0][0] === state.turn &&
      state.tableData[1][1] === state.turn &&
      state.tableData[2][2] === state.turn
    ) {
      win = true;
    }
    if (
      state.tableData[0][2] === state.turn &&
      state.tableData[1][1] === state.turn &&
      state.tableData[2][0] === state.turn
    ) {
      win = true;
    }
    console.log(win, state.row, state.cell, state.tableData, state.turn);
    if (win) {
      dispatch({ type: SET_WINNER, winner: state.turn });
      dispatch({ type: RESET_GAME });
      //무승부
    } else {
      let all = true; // => 무승부라는 뜻
      state.tableData.forEach((row) => {
        row.forEach((cell) => {
          //하나라도 차지 않은 칸이 있다면 무승부가 아니다.
          if (!cell) {
            all = false;
          }
        });
      });
      if (all) {
        dispatch({ type: SET_WINNER, winner: null });
        dispatch({ type: RESET_GAME });
      } else {
        dispatch({ type: CHANGE_TURN });
      }
    }
  }, [state.recentCell]);
  return (
    <>
      <Table
        onClick={onClickTable}
        tableData={state.tableData}
        dispatch={dispatch}
      />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default TickTacToe;
