import React from "react";
import styled from "styled-components";
import "./components.css";
import { useRef } from "react";

const Gameboard = () => {
  let count = 0;
  const firstPlayer = [];
  const secondPLayer = [];
  let player1 = false;
  let player2 = false;
  const winPossibilites = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const playingBoard = [];
  //first player O ,second player X

  function ploting(cellNumber, cellRef) {
    count = count + 1;
    if (count % 2 === 1) {
      cellRef.current.innerHTML = "O";
      firstPlayer.push(cellNumber);
    }
    if (count % 2 === 0) {
      cellRef.current.innerHTML = "X";
      secondPLayer.push(cellNumber);
    }
    win_condition();
  }
  function win_condition() {
    let winner;
    for (let r = 0; r < 8; r++) {
      let scount = 0;
      for (let t = 0; t < 3; t++) {
        if (firstPlayer.includes(winPossibilites[r][t]) === true) {
          scount++;
        }
        if (scount === 3) {
          console.log(firstPlayer);
          player1 = true;
          result.current.innerHTML = "First Player Wins";
          clearBoard();
        }
      }
    }
    for (let r = 0; r < 8; r++) {
      let scount = 0;
      for (let t = 0; t < 3; t++) {
        if (secondPLayer.includes(winPossibilites[r][t]) === true) {
          scount++;
        }
        if (scount === 3) {
          console.log(winner);
          player2 = true;
          result.current.innerHTML = "Second Player Wins";
          clearBoard();
        }
      }
    }
    if (playingBoard.length === 9 && player1 === false && player2 === false) {
      result.current.innerHTML = "Draw";
    }
  }
  function on_going_game(cellNumber, cellRef) {
    if (playingBoard.includes(cellNumber) === true) {
      return;
    }
    console.log(playingBoard.includes(cellNumber));
    playingBoard.push(cellNumber);
    ploting(cellNumber, cellRef);
  }

  function clearBoard() {
    window.location.reload();
  }

  const block_1 = useRef();
  const block_2 = useRef();
  const block_3 = useRef();
  const block_4 = useRef();
  const block_5 = useRef();
  const block_6 = useRef();
  const block_7 = useRef();
  const block_8 = useRef();
  const block_9 = useRef();
  const result = useRef();

  return (
    <>
      <Game_head>Tic Tac Toe</Game_head>

      <Board>
        <div>
          <button
            ref={block_1}
            className="game_box"
            onClick={() => on_going_game(1, block_1)}
          ></button>
          <button
            ref={block_2}
            className="game_box"
            onClick={() => on_going_game(2, block_2)}
          ></button>
          <button
            ref={block_3}
            className="game_box"
            onClick={() => on_going_game(3, block_3)}
          ></button>
        </div>
        <div>
          <button
            ref={block_4}
            className="game_box"
            onClick={() => on_going_game(4, block_4)}
          ></button>
          <button
            ref={block_5}
            className="game_box"
            onClick={() => on_going_game(5, block_5)}
          ></button>
          <button
            ref={block_6}
            className="game_box"
            onClick={() => on_going_game(6, block_6)}
          ></button>
        </div>
        <div>
          <button
            ref={block_7}
            className="game_box"
            onClick={() => on_going_game(7, block_7)}
          ></button>
          <button
            ref={block_8}
            className="game_box"
            onClick={() => on_going_game(8, block_8)}
          ></button>
          <button
            ref={block_9}
            className="game_box"
            onClick={() => on_going_game(9, block_9)}
          ></button>
        </div>
      </Board>
      <Result ref={result}>Play</Result>
      <ClearBoard onClick={clearBoard}>Restart</ClearBoard>
    </>
  );
};

const Board = styled.div`
  align-items: center;

  display: flex;
  flex-direction: column;
`;
const Game_head = styled.p`
  color: #f9f9f9;
  text-align: center;
  font-weight: 20px;
  font-size: 33px;
  font-family: "Press Start 2P", cursive;
`;

const Result = styled.p`
  text-align: center;
  font-size: 24px;
  color: #22ff00;
`;

const ClearBoard = styled.button`
  display: block;
  margin: 0 auto;
  font-size: 18px;
  color: #1a120b;
  padding: 5px 9px;
  border-radius: 5px;
  background-color: #82aae3;
  font-family: "Press Start 2P", cursive;
  &:hover {
    background-color: #eafdfc;
    box-shadow: 0.5px 0.5px 0.5px #82aae3;
  }
`;
export default Gameboard;
