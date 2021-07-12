import {
    Link
  } from "react-router-dom";

export const Links = () => {
    return (
        <div className='links'>
            <Link to='/posts'>Posts</Link>
            <Link to='/comments'>Comments</Link>
            <Link to='/albums'>Albums</Link>
            <Link to='/users'>Users</Link>
            <Link to='/todos'>Todos</Link>
        </div>
    )
}