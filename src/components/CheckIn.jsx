import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function CheckIn({
  setIsCheckingIn,
  students,
  totalStudents,
  setStudents,
  setTotalStudents,
  loggedIn,
  setLoggedIn,
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
        //Create a new student object
        const newStudent = {
          name,
          roll,
          checkinTime: new Date().toLocaleTimeString(),
        };
        students.push(newStudent);
        setStudents(students);
        setIsCheckingIn(false);
        setTotalStudents(totalStudents + 1);
        toast.error("Attendance done!");
      } else {
        toast.error("Your attendance is already done");
        setIsCheckingIn(false);
      }
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <span className="title">Check In</span>
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
            onClick={() => setIsCheckingIn(false)}
          >
            Back to home
          </p>
        </div>
      </div>
    </>
  );
}
