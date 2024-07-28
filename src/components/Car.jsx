export default function Car({ name, price, emoji }) {
  return (
    <div>
      {/* {emoji} {name} {price} */}
      {price > 2500000 ? (
        <li>
          {emoji} {name} {price}
        </li>
      ) : (
        ""
      )}
    </div>
  );
}
