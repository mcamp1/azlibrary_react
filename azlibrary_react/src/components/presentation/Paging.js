export default function Paging({ links, setSearchUrl }) {

    // const self = links?.find((link) => link.rel === 'self');
    // const first = links?.find((link) => link.rel === 'first');
    const previous = links?.find((link) => link.rel === 'previous');
    const next = links?.find((link) => link.rel === 'next');
    // const last = links?.find((link) => link.rel === 'last');

    // const params = new URLSearchParams(last?.href)
    // const offset = params.get("offset");

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className={`page-item ${previous ? "" : "disabled"}`}>
                    <button className="page-link" onClick={() => setSearchUrl(previous?.href)}>Previous</button>
                </li>
                {/* <li className="page-item"><button className="page-link">1</button></li>
                <li className="page-item"><button className="page-link">2</button></li>
                <li className="page-item"><button className="page-link">3</button></li> */}
                <li className={`page-item ${next ? "" : "disabled"}`}>
                    <button className="page-link" onClick={() => setSearchUrl(next?.href)}>Next</button>
                </li>
            </ul>
        </nav>
    )
}