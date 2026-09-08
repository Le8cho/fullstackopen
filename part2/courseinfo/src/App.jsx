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

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
