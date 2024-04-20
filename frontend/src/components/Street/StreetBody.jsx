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
                <td>{street.count_houses}</td>
                <td>{street.count_residention}</td>
                <td>{street.count_people - street.count_residention}</td>
                <td>{street.count_houses}</td>
                <td>{street.count_people}</td>
                <td>{street.count_young_people}</td>
                <td>{street.count_young_people != 0 ? (street.count_young_people / street.count_people * 100).toFixed(0) : 0}</td>
                <td>{street.count_femail}</td>
                <td>{street.count_femail != 0 ? (street.count_femail / street.count_people * 100).toFixed(0) : 0}</td>
                <td>{street.count_pensioner}</td>
                <td>{street.count_pensioner != 0 ? (street.count_pensioner / street.count_people * 100).toFixed(0) : 0}</td>

            </tr>
        ))}
        </tbody>
    )
}


export default StreetBody