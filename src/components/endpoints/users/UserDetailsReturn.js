export const UserDetailsReturn = ({ item }) => {
    // While waiting response from server
    if (!item.name) {
        return 'loading...'
    }
    
    const { name, username, email, address: { street, city } } = item

    return (
        <>
            <h1>Hello, my name is {name} {username}</h1>
            <div>
                <h2>Sms about me</h2>
                <p>Email - {email}</p>
                <p>Live in {city} on {street}</p>
            </div>
        </>
    )
}
