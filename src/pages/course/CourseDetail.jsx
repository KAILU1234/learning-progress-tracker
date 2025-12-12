import { useParams } from "react-router-dom";

const sampleCourses = {
  "react-basics": {
    title: "React Basics",
    description: "Learn the fundamentals of React, components, props, and state.",
    lessons: ["Introduction", "Components", "State & Props", "Hooks Basics"]
  },
  "javascript-master": {
    title: "JavaScript Mastery",
    description: "Deep dive into modern JavaScript features and advanced concepts.",
    lessons: ["Variables", "Functions", "ES6 Features", "Async Programming"]
  },
  "html-css": {
    title: "HTML & CSS Foundations",
    description: "Build modern and responsive websites using HTML5 and CSS3.",
    lessons: ["HTML Basics", "Semantic tags", "Flexbox", "Grid Layout"]
  }
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = sampleCourses[courseId];

  if (!course) return <p className="p-6">Course not found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
      <p className="mb-6 text-gray-700">{course.description}</p>

      <h3 className="text-xl font-bold mb-3">Lessons</h3>
      <ul className="list-disc ml-6">
        {course.lessons.map((lesson, index) => (
          <li key={index} className="mb-1">{lesson}</li>
        ))}
      </ul>
    </div>
  );
}
