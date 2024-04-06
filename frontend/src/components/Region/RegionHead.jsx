function RegionHead() {
    return (
        <thead className={'text-center text-truncate align-middle'}>
        <tr>
            <th rowSpan="2">№</th>
            <th rowSpan="2">Hudud</th>
            <th rowSpan="2">tuman, <br/> shahar soni</th>
            <th rowSpan="2">mahallalar <br/> soni</th>
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
            <td colSpan={15}>1-sektor</td>
        </tr>
        </thead>
    )
}


export default RegionHead