export const Ranking = ({ ranking }) => {
  return (
    <ul>
      {ranking.map((el) => (
        <li key={el.id}>
          {el.userName}
          <ul>
            <li> {el.timeDone}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
};
