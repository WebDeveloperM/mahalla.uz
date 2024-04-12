import {Link} from "react-router-dom";

function DistrictBody({districts}) {

    return (<tbody className={'text-center'}>
    {districts?.map((district, index) => (
        <tr key={district.id}>
            <td>{index+1}</td>
            <td>
                <Link to={`/neighborhood/${district.id}`}>{district.name}</Link>
            </td>
            <td>{district.houses ? district.houses.length : ""}</td>
            <td>263</td>
            <td>2638</td>
            <td>85412</td>

            <td>{district.persons ? district.persons.length : ""}</td>
            <td>322</td>
            <td>19%</td>
            <td>865</td>
            <td>43</td>
            <td>566</td>
            <td>32</td>
        </tr>))}

    </tbody>)
}


export default DistrictBody