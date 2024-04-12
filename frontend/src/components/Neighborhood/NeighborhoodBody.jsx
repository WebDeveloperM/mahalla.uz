import {Link} from "react-router-dom";

function NeighborhoodBody({neighborhoods}) {
    return (
        <tbody className={'text-center'}>
        {neighborhoods?.map((neighborhood, index) => (
            <tr key={neighborhood.id}>
                <td>{index+1}</td>
                <td>
                    <Link to={`/street/${neighborhood.id}`}>
                        {neighborhood.name}
                    </Link>
                </td>

                <td>{neighborhood.houses ? neighborhood.houses.length : ""}</td>
                <td>263</td>
                <td>2638</td>
                <td>5422</td>
                <td>{neighborhood.persons ? neighborhood.persons.length : ""}</td>
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


export default NeighborhoodBody