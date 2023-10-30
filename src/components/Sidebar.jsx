import { Link } from 'react-router-dom';
import './sidebar.css';
export const Sidebar = () => {
    return (
        <>
            <div className="side">
                <div className="container">
                    <h2>Hello </h2>
                    <span>{localStorage.getItem("username")}</span>
                    <hr />
                    <div className="container-list">
                        {/* <h4>Add new booK</h4>
                        <h4>Remove booK</h4>
                        <h4>Update booK</h4>
                        <h4>IssueS</h4> */}
                        <ul>
                            <li><Link to="/auth/register">Register</Link></li>
                            <li><Link to="/auth/login">Login</Link></li>
                            <Link to={"/owner/add-new-library"}><li>Add Library</li></Link>
                            <li><Link to="/add-new-book">Add new booK</Link></li>
                            <li><Link to="/api/books">All Books</Link></li>
                            <li><Link to="/api/my-requests">My Requests</Link></li>
                            <li><Link to="/admin/issue-book">All Requests</Link></li>
                            <li><Link to="/remove-book">Remove booK</Link></li>
                            <li>Update booK</li>
                            <li>Issue requestS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}