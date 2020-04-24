export default function HexCoordTrans(props) {

  const newLeft = props.left * 43.30127;
  const newTop = props.top * 37.5;

  return (
    {
      left: newLeft,
      top: newTop
    }
  );
}