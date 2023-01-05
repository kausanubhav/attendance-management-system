export default function StudentInfo({ students, totalStudents }) {
  return (
    <div className="studentInfo min-vw-100 min-vh-100">
      <div className="studentInfo-title">
        <h1>Students present: {totalStudents}</h1>
        <h2>
          {new Date().toLocaleString("default", { month: "long" })}
          {new Date().getDay()}th, {new Date().getFullYear()}
        </h2>
      </div>
      <div className="container-fluid">
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">Roll</th>
              <th scope="col">Name</th>
              <th scope="col">Checkin Time</th>
              <th scope="col">Checkout Time</th>
            </tr>
          </thead>
          <tbody>
            {students ? (
              students.map((student) => (
                <tr key={student.roll}>
                  <th>{student.roll}</th>
                  <td>{student.name}</td>
                  <td>
                    {student.checkinTime
                      ? student.checkinTime
                      : `Not logged in`}
                  </td>
                  <td>
                    {student.checkoutTime
                      ? student.checkoutTime
                      : `--`}
                  </td>
                </tr>
              ))
            ) : (
              <td
                style={{ textAlign: "center" }}
                classname=" text-white"
                colSpan={4}
              >
                No Students
              </td>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
