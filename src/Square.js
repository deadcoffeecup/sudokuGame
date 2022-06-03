export default function Square(props) {
  let { value, onChange } = props;
  if (value > 9) {
    value = 9;
  } else if (value < 0) {
    value = 0;
  }
  return (
    <input
      className='square'
      type='number'
      onChange={(event) => onChange(event)}
      value={value ? value : ''}
    ></input>
  );
}
