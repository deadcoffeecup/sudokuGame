export const Ranking = ({ ranking }) => {
  return (
    <ul className='ranking-list'>
      <h3>Winners:</h3>
      {ranking.map((el) => (
        <li key={el.userName}>
          {el.userName}
          <ul>
            <li> {el.timeDone}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
};
