import { Link } from 'react-router-dom';
import '../../assets/style.css';

const Navbar = () => {

    return (
        <nav className="Navbar">
            <h1>My Infra Booking</h1>
            <h2>Wellcome {'Guest'}</h2>
            <li>
                <Link to='/' >Home</Link>
                <Link to='/booking'>Booking</Link>
                {/* {!isLoggedIn && <> */}
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                {/* </>} */}
                {/* {isLoggedIn && <>
                    <Link to='/cart'><img src={cartIcon} alt='Cart'width={25} height={25} style={{background:'transperant'}}/> {cart.length > 0 && <>{cart.length}</>}</Link>
                    <Link to='/checkout'>Checkout</Link>
                    <Link to='/order'>Order</Link>
                    <Link to='/user'>User</Link>
                    <Link to='/logout'>Logout</Link>
                </>} */}
            </li>
        </nav> 
    )
}

export default Navbar;