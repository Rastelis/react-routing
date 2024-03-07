
export default function Input({ name, title }) {

    return (
        <label className="col-12 text-center pt-2" htmlFor={name}>{title}
            <div className="d-flex rounded-pill align-items-center border py-1 px-2">
                <input 
                id={name} 
                className="border-0" 
                type="text"
                name={name}
                />
            </div>
        </label>
    )
}
