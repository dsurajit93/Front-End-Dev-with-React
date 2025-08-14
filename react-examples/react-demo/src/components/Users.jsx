import User from "./User"

const Users = () => {

    let users = [
        {name: "ajay", age: 20, email: "ajay@gmail.com"},
        {name: "bijay", age: 22, email: "bijay@gmail.com"},
        {name: "bimal", age: 23, email: "bimal@gmail.com"},
        {name: "ashok", age: 25, email: "ashok@gmail.com"},
        {name: "Raju", age: 19, email: "raju@gmail.com"},
    ]
  return (
    <div className="d-flex">
      {
        users.map((user, index) => (
            <User key={index} user={user} />
        ))
      }
    </div>
  )
}

export default Users
