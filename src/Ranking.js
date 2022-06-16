export const Ranking = ({ ranking }) => {
  return (
    <ul>
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
