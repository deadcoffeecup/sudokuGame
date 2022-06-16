export const Ranking = ({ ranking }) => {
  const convertSecToSecAndMin = (time) => {
    let hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return `Time: ${hours}:${minutes}:${seconds}`;
  };

  return (
    <ul className='ranking-list'>
      <h3>Winners:</h3>
      {ranking.map((el) => (
        <li key={el.userName}>
          {el.userName}
          <ul>
            <li> {convertSecToSecAndMin(el.timeDone)}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
};
