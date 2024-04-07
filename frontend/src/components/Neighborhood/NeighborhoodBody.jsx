import {Link} from "react-router-dom";

function NeighborhoodBody({neighborhoods}) {
    return (
        <tbody className={'text-center'}>
        {neighborhoods?.map((neighborhood) => (
            <tr key={neighborhood.id}>
                <td>1</td>
                <td>
                    <Link to={`/street/${neighborhood.id}`}>
                        {neighborhood.name}
                    </Link>
                </td>

                <td>1524</td>
                <td>263</td>
                <td>2638</td>
                <td>5422</td>
                <td>85412</td>
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