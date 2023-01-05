import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import Header from "../components/Header";
import StudentInfo from "../components/StudentInfo";
import { useState } from "react";
import studentData from "../data/studentData";

export default function Home() {
  //states
  const [students, setStudents] = useState([]);
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [totalStudents, setTotalStudents] = useState(0);
  //Handle the renders
  if (isCheckingIn) {
    return (
      <CheckIn
        setIsCheckingIn={setIsCheckingIn}
        students={students}
        setStudents={setStudents}
        totalStudents={totalStudents}
        setTotalStudents={setTotalStudents}
       
      />
    );
  } else if (isCheckingOut) {
    return (
      <CheckOut
        setIsCheckingOut={setIsCheckingOut}
        students={students}
        setStudents={setStudents}
        totalStudents={totalStudents}
        setTotalStudents={setTotalStudents}
        
      />
    );
  } else
    return (
      <div className="container-fluid">
        <Header
          setIsCheckingIn={setIsCheckingIn}
          setIsCheckingOut={setIsCheckingOut}
        />
        <StudentInfo students={students} totalStudents={totalStudents} />
      </div>
    );
}
