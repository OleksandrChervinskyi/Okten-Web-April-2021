import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../servises/jsonPlaceHolder";
import {getUsersAction} from "../../redux/create-action";

export const Users = () => {
    const {users} = useSelector(({jsonReducer: {bigData}}) => bigData)
    const dispatch = useDispatch()

    const showUsers = () => {
        if (!users.length) {
            getUsers().then(value => dispatch(getUsersAction(value.data)))
            console.log('get Users from https://jsonplaceholder.typicode.com/')
        }else {
            console.log('get Users from redux store')
        }
    }

    useEffect(() => {
        showUsers()
    }, [])


    return (
        <>
            {(!users.length || !users) && <p>Loading ...</p>}
            {users.map(user => <li key={user.id}><h3>{user.name}</h3><p>{user.username}</p></li>)}
        </>
    )
}