import useAuth from "../../context/authContext";

function Home() {

    const { authenticatedUser } = useAuth();

    return (
        <div className="Home">
            <h1>Welcome to My Infra Booking  {authenticatedUser?.name || ""}</h1>
            <p>Discover our wide range of products and enjoy shopping!</p>
        </div>
    );
}

export default Home;
