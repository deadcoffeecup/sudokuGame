export default function Square(props) {
  return (
    <input
      className='square'
      type='number'
      onChange={(event) => props.onChange(event)}
    ></input>
  );
}
