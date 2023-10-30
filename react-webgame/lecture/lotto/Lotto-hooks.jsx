import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Ball from "./Ball";

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  //hooks는 절대 조건문 안에 넣으면 안된다.
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  //useMemo 함수 결과 값을 기억, 두 번째 파라미터가 바뀌기 전까지
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  let timeouts = useRef([]);

  //하나의 패턴
  //componentDidUpdate만, componentDidMount (X)
  const mounted = useRef(false);
  useEffect(() => {
    if(!mounted.current){
      mounted.current = true;
    }else{
      //ajax 요청
    }
  }, [/* 바뀌는 값 */]);

  useEffect(() => {
    //useEffect 안에서 useState 사용하면 안된다.
    console.log("useEffect");
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    setTimeout(() => {
      setWinBalls(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, []); //빈 배열이면 componentDidMount와 동일
  // 배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행

  //useCallback은 함수를 기억, 두 번째 파라미터에 변경되는 값을 감지할 값을 넣어야 된다.
  //자식 컴포넌트에 콜백 함수를 넘길 때 useCallback을 사용해야 한다.
  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
};

export default Lotto;
