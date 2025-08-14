function User(data){ //prop
    console.log(data)
    let {name, age, email} = data.user
    return (
        // <h1>User Component for {data.name} {data.age}</h1>
        // <h1>User Component for {name} {age}</h1>
        <div className="card m-3" style={{width: '12rem'}}>
            <div className="card-body">
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{age}</p>
            </div>
        </div>
    )
}

export default User