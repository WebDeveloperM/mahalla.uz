import {Link} from "react-router-dom";

function HouseBody({houses}) {
    return (
        <tbody className={'text-center'}>
        {houses?.map((house, index) => (
            <tr key={house.id}>
                <td>{index+1}</td>
                <td>
                    <Link to={`/person/${house.id}`}>
                        {`${house['number_of_appartment']}-uy`}
                    </Link>
                </td>
                <td>{house.ownership}</td>
                <td>{house['date_of_birth']}</td>
                <td>{house['category_appartment']}</td>
            </tr>
        ))}
        </tbody>
    )
}


export default HouseBody