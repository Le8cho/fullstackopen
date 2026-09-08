const Course = (props) => {
  return (
    <div>
      <Header name={props.course.name}></Header>
      <Content parts={props.course.parts}></Content>
      <Summary parts={props.course.parts}></Summary>
    </div>
  );
};

const Header = (props) => <h1>{props.name}</h1>;

const Content = (props) => {
  if (props.parts !== null) {
    return props.parts.map((part) => <Part key={part.id} part={part}></Part>);
  } else {
    return <p></p>;
  }
};

const Summary = (props) => (
  <strong>
    total of exercises{" "}
    {props.parts.reduce((suma, actual) => suma + actual.exercises, 0)}
  </strong>
);

const Part = (props) => (
  <li>
    {" "}
    {props.part.name} {props.part.exercises}
  </li>
);

export default Course