import {Link} from "react-router-dom";

function NeighborhoodBody({neighborhoods}) {
    return (
        <tbody className={'text-center'}>
        {neighborhoods?.map((neighborhood, index) => (
            <tr key={neighborhood.id}>
                <td>{index + 1}</td>
                <td>
                    <Link to={`/street/${neighborhood.id}`}>
                        {neighborhood.name}
                    </Link>
                </td>

                <td>{neighborhood.count_houses}</td>
                <td>{neighborhood.count_residention}</td>
                <td>{neighborhood.count_people - neighborhood.count_residention}</td>
                <td>{neighborhood.count_houses}</td>
                <td>{neighborhood.count_people}</td>
                <td>{neighborhood.count_young_people}</td>
                <td>{neighborhood.count_young_people != 0 ? (neighborhood.count_young_people / neighborhood.count_people * 100).toFixed(0) : 0}</td>
                <td>{neighborhood.count_femail}</td>
                <td>{neighborhood.count_femail != 0 ? (neighborhood.count_femail / neighborhood.count_people * 100).toFixed(0) : 0}</td>
                <td>{neighborhood.count_pensioner}</td>
                <td>{neighborhood.count_pensioner != 0 ? (neighborhood.count_pensioner / neighborhood.count_people * 100).toFixed(0) : 0}</td>
            </tr>
        ))}
        </tbody>
    )
}


export default NeighborhoodBody