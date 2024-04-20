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
                <td>{region.count_districts}</td>
                <td>{region.count_neighbourhoods}</td>
                <td>{region.count_houses}</td>
                <td>{region.count_residention}</td>
                <td>{region.count_people - region.count_residention}</td>
                <td>{region.count_houses}</td>
                <td>{region.count_people}</td>
                <td>{region.count_young_people}</td>
                <td>{region.count_young_people != 0 ? (region.count_young_people / region.count_people * 100).toFixed(0) : 0}</td>
                <td>{region.count_femail}</td>
                <td>{region.count_femail != 0 ? (region.count_femail / region.count_people * 100).toFixed(0) : 0}</td>
                <td>{region.count_pensioner}</td>
                <td>{region.count_pensioner != 0 ? (region.count_pensioner / region.count_people * 100).toFixed(0) : 0}</td>
            </tr>
        ))}
        </tbody>
    )
}


export default RegionBody