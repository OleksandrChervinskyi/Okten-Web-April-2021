import { useParams } from "react-router"
import { useEffect, useState } from 'react'
import { UserDetailsReturn } from "./UserDetailsReturn"
import { getUser } from "../../services/AllServices"


export const UserDetails = (props) => {

    const [user, setUser] = useState([])


    const oneUser = async (id) => {
        if (!props.location.state) {

            // From location.state
            getUser(id).then(valeu => setUser(valeu.data))
            console.log('User from json.palace...');

        } else {
            
            // From json.placeholder.com
            const {item} = props.location.state

            setUser({...item})
            console.log('User from location.state');
        }
    }

    const { id } = useParams()
    useEffect(() => {
        oneUser(id)

    }, [])

    return (
        <>
            <UserDetailsReturn item={user} />
        </>
    )
}