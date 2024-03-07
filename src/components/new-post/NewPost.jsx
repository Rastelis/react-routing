import Input from "../input/Input";

export default function NewPost({ setReload }) {

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {}

        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        const localData = localStorage.getItem('data');

        if (localData) {
            let convertedData = JSON.parse(localData);
            convertedData.push(data);
            localStorage.setItem('data', JSON.stringify(convertedData));
        }
        else {
            localStorage.setItem('data', JSON.stringify([data]))
        }
        setReload((prev) => !prev);
    }

    return (

        <div className="container">
            <div className="d-flex justify-content-center"><h1>New Post</h1></div>
            <div>
                <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                    <div className="col-10">
                        <Input name={"title"} title={"Post Title"} />
                        <Input name={"category"} title={"Post Category"} />
                        <Input name={"image"} title={"Post Image"} />
                        <Input name={"content"} title={"Post Content"} />
                        <Input name={"author"} title={"Post Author"} />
                        <Input name={"authorRole"} title={"Post Author Role"} />
                        <Input name={"authorImage"} title={"Post Author Image"} />
                    </div>
                    <div className="pt-3" ><button className="btn btn-warning rounded-pill">SUBMIT</button></div>
                </form>
            </div>
        </div>
    )
}
