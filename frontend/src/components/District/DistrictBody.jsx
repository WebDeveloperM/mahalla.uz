import {Link} from "react-router-dom";

function DistrictBody({districts}) {

    return (<tbody className={'text-center'}>
    {districts?.map((district, index) => (
        <tr key={district.id}>
            <td>{index + 1}</td>
            <td>
                <Link to={`/neighborhood/${district.id}/${district.name}`}>{district.name}</Link>
            </td>
            <td>{district.count_houses}</td>
            <td>{district.count_residention}</td>
            <td>{district.count_people - district.count_residention}</td>
            <td>{district.count_houses}</td>
            <td>{district.count_people}</td>
            <td>{district.count_young_people}</td>
            <td>{district.count_young_people != 0 ? (district.count_young_people / district.count_people * 100).toFixed(0) : 0}</td>
            <td>{district.count_femail}</td>
            <td>{district.count_femail != 0 ? (district.count_femail / district.count_people * 100).toFixed(0) : 0}</td>
            <td>{district.count_pensioner}</td>
            <td>{district.count_pensioner != 0 ? (district.count_pensioner / district.count_people * 100).toFixed(0) : 0}</td>
        </tr>))}

    </tbody>)
}


export default DistrictBody