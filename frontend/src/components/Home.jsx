import RegionTable from "./Region/RegionTable.jsx"

function Home() {
    return (
        <section className={'mx-2'}>
            <h2 className={'text-center fs-5 my-4'}>Respublika bo`yicha mahalla balansi.</h2>
            <RegionTable/>

        </section>
    )
}


export default Home