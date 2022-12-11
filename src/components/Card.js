import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={classes.card}>
      <h1>{props.people.length} Birthday today</h1>

      {props.people.map(person => (
        <div className={classes.data} key={person.id}>
          <div>
            <img src={person.image} href={person.name} />
          </div>

          <div>
            <h1>{person.name}</h1>
            <p>{person.age} years</p>
          </div>
        </div>
      ))}

      <button onClick={props.deleteHandler}>Clear All</button>
  </div>
  );
};

export default Card;