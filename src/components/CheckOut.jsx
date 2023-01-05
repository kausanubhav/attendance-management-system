import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";

export default function CheckOut({
  students,
  setStudents,
  setIsCheckingOut,
  totalStudents,
  setTotalStudents,
}) {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
  });
  const { name, roll } = formData;
  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, []);
  //onChange fn
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //onSubmit fn
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !roll) {
      toast.error("Please fill in all details");
    } else {
      //check if the student is logged in already
      const [student] = students.filter((student) => student.roll === roll);
      if (!student) {
        toast.error("Please Checkin to make attendance");
      } else {
        if (student.name === name) {
          const { checkoutTime } = student;
          if (checkoutTime) {
            toast("You are already logged out");
            setIsCheckingOut(false);
          } else {
            students = students.filter((student) => student.roll !== roll);
            student.checkoutTime = new Date().toLocaleTimeString();
            students.push(student);
            setStudents(students);
            setIsCheckingOut(false);
            setTotalStudents(totalStudents - 1);
            toast.error("You are out!");
          }
        } else {
          toast.error('Invalid details. Please try again');
          setIsCheckingOut(false);
        }
      }
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <span className="title">Check Out</span>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="enter your name"
                value={name}
                ref={textInput}
                onChange={onChange}
                name="name"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="roll"
                placeholder="enter your roll no."
                value={roll}
                onChange={onChange}
                name="roll"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => setIsCheckingOut(false)}
          >
            Back to home
          </p>
        </div>
      </div>
    </>
  );
}
