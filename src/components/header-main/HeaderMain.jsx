
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <header>
       <div className="py-3 px-5 d-flex align-items-center border-bottom justify-content-between">
        <nav>
            <ul className=" d-flex ">
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
       </div>
    </header>
  )
}
