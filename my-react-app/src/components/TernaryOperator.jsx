function Age () {
    const age = 15;

    return (
        <div>
            <h2>Apply for a Kenyan ID</h2>
            {age >= 18 ? <p>You can apply for a Kenyan ID!</p> : <p>You cannot apply for a Kenyan ID</p>}
        </div>
    )
}
export default Age;