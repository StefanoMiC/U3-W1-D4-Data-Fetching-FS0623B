// PRIMA
// {
//   char: "Jafar"
//   chararters: ["Aladdin", "Jafar", "Lago", "Hercules", "Simba", "AristoCats", "Goofy", "Mickey"]
//  }

// DOPO
// {
//   char: {name: "Jafar"}
//   chararters: [{name:"Jafar"}, {....}, {....}, {....}, {....}, {....}, {....},{....}]
//  }

const Character = props => (
  <li style={{ display: "flex", justifyContent: "space-between" }}>
    <img src={props.char.imageUrl} alt={props.char.name} height="40" style={{ objectFit: "cover" }} />
    <span>{props.char.name}</span>
  </li>
);

export default Character;
