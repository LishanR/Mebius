import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
// import "./navbar.css";
import PropTypes from "prop-types";

/* let uName = "Lishan";
let cartCount = 0; */
function Navigation(props) {
  /* let userGreeting;

    if (props.uName) {
        userGreeting = (
            <>
                <p>Hi, {props.uName}</p>
                <CircleUserRound size={26} color="#02a7de" strokeWidth={1.5} absoluteStrokeWidth />
            </>
        );
    } else {
        userGreeting = (
            <div>
                <a href="#">Sign In</a>
                <a href="#">Sign Up</a>
            </div>
        );
    } */

  return (
    <nav className="flex items-center justify-between p-8 mx-16">
      <div className="flex gap-x-16">
        <a className="font-semibold text-3xl">Mebius</a>
        <div className="flex items-center gap-4">
          <a href="#">Home</a>
          <a href="#">Products</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <a href="/" className="flex items-center gap-4 relative">
            <p className="text-lg ">{props.cartCount}</p>
            <div className="flex items-center gap-2">
              <ShoppingCart />
              Cart
            </div>
          </a>
        </div>
        {/* {userGreeting} */}
        {props.uName ? (
        <>
          <p>Hi, {props.uName}</p>
          <CircleUserRound
            size={28}
            color="#02a7de"
            strokeWidth={1.5}
            absoluteStrokeWidth/>
        </>
        ) : (
        <div className = "flex items-center gap-2 ">
          <a href="#">Sign In</a>
          <a href="#">Sign Up</a>
        </div>
        )}
        {/* <p>Hi, {props.uName}</p>
        <CircleUserRound /> */}
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  uName: PropTypes.string.isRequired, // Specify that uName is a required string
  cartCount: PropTypes.number.isRequired, // Specify that cartCount is a required number
};

export default Navigation;

