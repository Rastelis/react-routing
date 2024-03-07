export default function Search() {
    return (
        <>
            <label className="col-3" htmlFor="search">
                <div className="d-flex rounded-pill align-items-center border py-1 px-2">
                    <span className="me-1"><i className="bi bi-search"></i></span><input id="search" placeholder='Search' className="border-0" type="text" />
                </div>
            </label>
        </>
    )
}
