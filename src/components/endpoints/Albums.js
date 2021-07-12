import { useEffect, useState} from 'react'
import { getAlbums } from '../services/AllServices'

export const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        getAlbums().then(value => setAlbums(value.data))

    }, [])

    return (
        <>
        {albums.map(album => <li key={album.id}> {album.userId} - {album.title}</li>)}
        </>
    )
}