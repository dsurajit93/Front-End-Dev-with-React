function Two(){

    let style = {
        color: 'red',
        backgroundColor: 'yellow'
    }

    return (
        <div className="box">
            <h1 style={style}>Component Two</h1>
            <h2 style={{color: 'green', textDecoration: 'underline'}}>CSS</h2>
        </div>
    )
}


export default Two