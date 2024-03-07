import { useEffect, useState } from "react"
import Post from "../post/Post";

export default function Posts({ reload }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("posts");
        if (!data) return;
        setData(JSON.parse(data))
    }, [reload])
    return (
        <div className="container mt-5">
            <div className="row">
              {data.map((value,index) =>
                  <Post value={value} key={index}/>
              )}
            </div>
        </div>
    )
}
