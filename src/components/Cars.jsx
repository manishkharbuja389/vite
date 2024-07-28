import Car from "./Car";

export default function Cars() {
  //   const cars = ["BMW", "TOYOTA", "TATA", "HONDA"];
  const cars = [
    { name: "BMW", price: 2000000, emoji: "🚗" },
    { name: "TOYOTA", price: 3000000, emoji: "🚗" },
    { name: "TATA", price: 1000000, emoji: "🚗" },
    { name: "HONDA", price: 5000000, emoji: "🚗" },
  ];

  return (
    <div>
      <ul>
        {cars.map((car) => (
          // <li key={car}>{car}</li>

          // <li key={car.name}>
          //   {car.name} ${car.price} {car.emoji}
          // </li>

          <Car
            key={car.name}
            name={car.name}
            price={car.price}
            emoji={car.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
