import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Empty landing page</h1>
            <Link to="/login">Log in here</Link>
        </>
    );
}

export default Home;