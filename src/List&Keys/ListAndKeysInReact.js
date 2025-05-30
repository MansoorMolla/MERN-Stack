function ListAndKey() {
    let Lang = [
        {id: 1, lang: "Javascript"},
        {id: 2, lang: "Java"},
        {id: 3, lang: "C"},
        {id: 4, lang: "C++"}
    ];
    return (
        <>
            <h1>List & Keys in React js</h1>
            {
                Lang.map((l) => {
                    return <li key={l.id}>{l.lang}</li>
                })
            }
        </>
    )
}

export default ListAndKey;

