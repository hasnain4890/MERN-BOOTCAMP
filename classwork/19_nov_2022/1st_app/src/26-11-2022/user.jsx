const User = (props) => {
  console.log("props", props.name);
  return (
    <div>
      {props.name}
      <h1>this is user ({props.name}) wala component</h1>
    </div>
  );
};
export default User;
