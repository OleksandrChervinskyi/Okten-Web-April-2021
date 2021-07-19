import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAlbums} from "../../servises/jsonPlaceHolder";
import {getAlbumsAction} from "../../redux/create-action";

export const Album = () => {
    const {albums} = useSelector(({jsonReducer: {bigData}}) => bigData)
    const dispatch = useDispatch()

    const showAlbums = () => {
        if (!albums.length) {
            getAlbums().then(value => dispatch(getAlbumsAction(value.data)))
            console.log('get Albums from https://jsonplaceholder.typicode.com/')
        }else {
            console.log('get Albums from redux store')
        }
    }

    useEffect(() => {
        showAlbums()
    }, [])


    return (
        <>
            {(!albums.length || !albums) && <p>Loading ...</p>}
            {albums.map(album => <li key={album.id}><h3>{album.title}</h3><p> UserId - {album.userId}</p></li>)}
        </>
    )
}