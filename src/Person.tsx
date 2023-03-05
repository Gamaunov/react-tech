interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  Brazil = "Brazil",
  France = "France",
  Russia = "Russia",
}

const Person = (props: Props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person: {props.isMarried ? "is" : "is not "} married</h1>
      {props.friends.map((friend: string) => (
        <h1>{friend}</h1>
      ))}
      <h1>{props.country}</h1>
    </div>
  );
};

export default Person;
