import React from "react";
import emp1 from "../Assets/emp1.jpeg";
import emp2 from "../Assets/emp2.jpeg";
import emp3 from "../Assets/emp3.jpeg";
import emp4 from "../Assets/emp4.jpeg";
import emp5 from "../Assets/emp5.jpeg";
import emp6 from "../Assets/emp6.jpeg";
import emp7 from "../Assets/emp7.jpeg";
import emp8 from "../Assets/emp8.jpeg";
import emp9 from "../Assets/emp9.jpeg";
import emp10 from "../Assets/emp10.jpeg";
import redTri from "../Assets/redtriangle.png";
import greenTri from "../Assets/greenTriangle.png";
import rank1 from "../Assets/Rank1.jpeg";
import rank2 from "../Assets/Rank2.png";
import rank3 from "../Assets/Rank3.png";
import top from "../Assets/Top.png";

const employees = [
  {
    id: 1,
    icon: rank1,
    rank: 1,
    img: emp1,
    name: "Rakesh Sharma",
    designation: "UI/UX Designer",
    hoursWorked: "7 (42)",
    scale: greenTri,
    changes: "1.5hrs",
  },
  {
    id: 2,
    icon: rank2,
    rank: 2,
    img: emp2,
    name: "Ankita Thakur",
    designation: "HR Recruiter",
    hoursWorked: "7 (41)",
    scale: redTri,
    changes: "1.5hrs",
  },
  {
    id: 3,
    icon: rank3,
    rank: 3,
    img: emp3,
    name: "Sarah Yadav",
    designation: "Product Manager",
    hoursWorked: "7 (40)",
    scale: greenTri,
    changes: "1.5hrs",
  },
  {
    id: 4,
    icon: "",
    rank: 4,
    img: emp4,
    name: "Harsha Shivhare",
    designation: "Designer",
    hoursWorked: "7 (37)",
    scale: greenTri,
    changes: "1.5hrs",
  },
  {
    id: 5,
    icon: "",
    rank: 5,
    img: emp5,
    name: "Vanhi Rai",
    designation: "Video Editor",
    hoursWorked: "7 (37)",
    scale: redTri,
    changes: "1.5hrs",
  },
  {
    id: 6,
    icon: "",
    rank: 6,
    img: emp6,
    name: "Bhanu Sharma",
    designation: "Business Analyst",
    hoursWorked: "7 (32)",
    scale: redTri,
    changes: "1.5hrs",
  },
  {
    id: 7,
    icon: "",
    rank: 8,
    img: emp7,
    name: "Sunil Yadav",
    designation: "Developer",
    hoursWorked: "7 (24)",
    scale: greenTri,
    changes: "1.5hrs",
  },
  {
    id: 8,
    icon: "",
    rank: 9,
    img: emp8,
    name: "Akash Roy",
    designation: "Business Analyst",
    hoursWorked: "7 (21)",
    scale: redTri,
    changes: "1.5hrs",
  },
  {
    id: 9,
    icon: "",
    rank: 10,
    img: emp9,
    name: "Rohit Soni",
    designation: "Developer",
    hoursWorked: "7 (20)",
    scale: redTri,
    changes: "1.5hrs",
  },
  {
    id: 10,
    icon: "",
    rank: 11,
    img: emp10,
    name: "Suraj Chauhan",
    designation: "Developer",
    hoursWorked: "7 (18)",
    scale: redTri,
    changes: "1.5hrs",
  },
];

const EmployeeDashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:px-24 px-4 sm:px-8 lg:px-12 py-4">
      <div className="w-full lg:w-3/4 border border-gray-300 bg-gray-100">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-2 px-2 sm:px-4"></th>
              <th className="py-2 px-2 sm:px-4">Rank</th>
              <th className="py-2 px-2 sm:px-4">Name</th>
              <th className="py-2 px-2 sm:px-4">Designation</th>
              <th className="py-2 px-2 sm:px-4">No. of hours worked</th>
              <th className="py-2 px-2 sm:px-4">Changes</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className={`border-t ${
                  employee.id % 2 === 1 ? "bg-neutral-50" : "bg-neutral-100"
                }`}
              >
                <td className="py-2 px-2 sm:px-4">
                  {employee.id <= 3 && (
                    <img
                      src={employee.icon}
                      alt=""
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                  )}
                </td>
                <td className="py-2 px-2 sm:px-4">{employee.rank}</td>
                <td className="py-2 px-2 sm:px-4 flex items-center">
                  <img
                    src={employee.img}
                    alt=""
                    className="w-6 h-6 rounded-full m-2"
                  />
                  {employee.name}
                </td>
                <td className="py-2 px-2 sm:px-4">{employee.designation}</td>
                <td className="py-2 px-2 sm:px-4">{employee.hoursWorked}</td>
                <td className="py-2 px-2 sm:px-4 flex items-center">
                  <img src={employee.scale} alt="" className="w-4 h-4 mr-2" />
                  {employee.changes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:ml-4">
        <div className="xl:w-[20vw] xl:h-[64vh] w-full bg-gray-100 p-4 rounded-2xl shadow-lg border border-gray-300">
          <div className="text-center">
            <img
              src={emp1}
              alt="Employee"
              className="mx-auto rounded-sm"
            />
            <h1 className="mt-3 text-blue-700 text-lg font-bold">
              Employee of the Month
            </h1>
            <h2 className="text-l font-semibold">Rakesh Sharma</h2>

            <p className="mt-2 text-gray-600">UI/UX Designer</p>
            <img
              src={top}
              alt=""
              className="w-28 h-28 sm:w-40 sm:h-40 pt-5 mx-auto rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
