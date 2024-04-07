import {Link} from "react-router-dom";

function RegionBody({regions}) {
    return (
        <tbody className={'text-center'}>
        {regions.map((region) => (
            <tr key={region.id}>
                <td>1</td>
                <td>
                    <Link to={`/district/${region.id}`}>{region.name}</Link>
                </td>
                <td>25</td>
                <td>450</td>
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


export default RegionBody