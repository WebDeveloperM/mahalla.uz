import {Link} from "react-router-dom";

function RegionBody({regions}) {
    return (
        <tbody className={'text-center'}>
        {regions?.map((region, index) => (
            <tr key={region.id}>
                <td>{index + 1}</td>
                <td>
                    <Link to={`/district/${region.id}`}>{region.name}</Link>
                </td>
                <td>{region.districts ? region.districts.length : ""}</td>
                <td>{region.neighborhoods ? region.neighborhoods.length : ""}</td>
                <td>{region.houses ? region.houses.length : ""}</td>
                <td>263</td>
                <td>2638</td>
                <td>{region.houses ? region.houses.length : ""}</td>
                <td>{region.persons ? region.persons.length : ""}</td>
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