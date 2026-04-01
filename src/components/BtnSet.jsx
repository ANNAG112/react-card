import { Link } from "react-router-dom";

import 'BtnSet.css';

export function BtnSet({name}){
    return <li className="list-set_item">

        <Link className="list-set_btn" to="/set" state={{set: name}}>
        {name}

        </Link>

    </li>
}