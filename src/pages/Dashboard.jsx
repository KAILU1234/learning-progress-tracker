import ProgressCard from "../components/ProgressCard";

const sampleStats = [
  { title: "React Basics", progress: 50 },
  { title: "JavaScript Mastery", progress: 20 },
  { title: "HTML & CSS Foundations", progress: 80 }
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Clear, visible heading */}
      <h2 className="text-2xl font-bold text-gray-800">
        Your Progress
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleStats.map((course, index) => (
          <ProgressCard
            key={index}
            title={course.title}
            progress={course.progress}
          />
        ))}
      </div>
    </div>
  );
}
