export default function Header({ setIsCheckingIn, setIsCheckingOut }) {
  return (
    <div className="header min-vw-100">
      <span className="title">Welcome Students</span>
      <span className="subTitle">Please Make Your Attendance</span>
      <div className="checkInCheckOutBtns">
        <button
          className="btn btn-outline-light"
          onClick={() => setIsCheckingIn(true)}
        >
          CheckIn
        </button>
        <button
          className="btn btn-outline-light"
          onClick={() => setIsCheckingOut(true)}
        >
          CheckOut
        </button>
      </div>
    </div>
  );
}
