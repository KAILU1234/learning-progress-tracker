import { Link } from "react-router-dom";

const sampleCourses = [
  { id: "react-basics", title: "React Basics", progress: 50 },
  { id: "javascript-master", title: "JavaScript Mastery", progress: 20 },
  { id: "html-css", title: "HTML & CSS Foundations", progress: 80 }
];

export default function Courses() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Your Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCourses.map(course => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="bg-white p-4 shadow rounded-md border hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-700 font-medium">Progress: {course.progress}%</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
