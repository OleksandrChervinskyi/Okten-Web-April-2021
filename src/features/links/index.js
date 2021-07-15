import {Link} from "react-router-dom";

export const Links = () => {
    return (
        <div>
            <Link to={'/todos'}>
                Todos
            </Link>
            <Link to={'/'}>
                Main
            </Link>
        </div>
    )
}