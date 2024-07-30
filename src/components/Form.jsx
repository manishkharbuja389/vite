export default function Form() {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          //   onChange={function demo(e) {
          //     return handleChange(e);
          //   }}
        />
      </form>
    </div>
  );
}
