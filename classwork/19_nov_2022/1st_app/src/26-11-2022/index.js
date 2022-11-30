import Guest from "./guest";
import User from "./user";

const Welcomeuser = () => {
  let username = "hasnain ahmad";
  let guestname = "waqas ahmad";
  return (
    <div>
      <h1>
        welcome{" "}
        {username === "" ? (
          <Guest guestname={guestname}></Guest>
        ) : (
          <User name={username} />
        )}
      </h1>
    </div>
  );
};
export default Welcomeuser;
