import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPhotos} from "../../servises/jsonPlaceHolder";
import {getPhotosAction} from "../../redux/create-action";

export const Photos = () => {
    const {photos} = useSelector(({jsonReducer: {bigData}}) => bigData)
    const dispatch = useDispatch()

    const showPhotos = () => {
        if (!photos.length) {
            getPhotos().then(value => dispatch(getPhotosAction(value.data)))
            console.log('get Photos from https://jsonplaceholder.typicode.com/')
        }else {
            console.log('get Photos from redux store')
        }
    }

    useEffect(() => {
        showPhotos()
    }, [])


    return (
        <>
            {(!photos.length || !photos) && <p>Loading ...</p>}
            {photos.map(photo => <li key={photo.id}><h3>{photo.id}</h3><p>{photo.url}</p></li>)}
        </>
    )
}