function DistrictHead() {
    return (
        <thead className={'text-center text-truncate align-middle fs-6'}>
        <tr>
            <th rowSpan="2">№</th>
            <th rowSpan="2">Tuman</th>
            <th rowSpan="2">honadonlar <br/> soni</th>
            <th colSpan="2">shulardan</th>
            <th rowSpan="2">oilalar soni</th>
            <th rowSpan="2">aholi soni</th>
            <th colSpan="6">shundan</th>

        </tr>
        <tr>
            <th>o'z uyi</th>
            <th>ijarada</th>
            <th>yoshlar <br/> (18-30 yosh)</th>
            <th>%</th>
            <th>xotin <br/> qizlar</th>
            <th>%</th>
            <th>pensiya <br/> yoshida</th>
            <th>%</th>
        </tr>

        <tr>
            <td colSpan={13}>1-sektor</td>
        </tr>
        </thead>
    )
}


export default DistrictHead