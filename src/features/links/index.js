import {Link} from "react-router-dom";

export const Links = () => {
    return (
        <div className={'nav'}>
            <Link to={'/'}>
                Main page
            </Link>
            <Link to={'/todos'}>
                Todos
            </Link>
        </div>
    )
}