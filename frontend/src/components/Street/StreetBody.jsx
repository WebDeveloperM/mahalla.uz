import {Link} from "react-router-dom";

function StreetBody({streets}) {
    return (
        <tbody className={'text-center'}>
        {streets?.map((street, index) => (
            <tr key={street.id}>
                <td>{index + 1}</td>
                <td>
                    <Link to={`/house/${street.id}`}>{street.name}</Link>
                </td>
                <td>{street.houses ? street.houses.length : ""}</td>
                <td>263</td>
                <td>2638</td>
                <td>5422</td>
                <td>{street.persons ? street.persons.length : ""}</td>
                <td>322</td>
                <td>19%</td>
                <td>865</td>
                <td>43</td>
                <td>566</td>
                <td>32</td>
            </tr>
        ))}
        </tbody>
    )
}


export default StreetBody