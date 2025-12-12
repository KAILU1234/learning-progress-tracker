export default function ProgressCard({ title, progress }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="w-full bg-gray-200 h-3 rounded">
        <div
          className="bg-blue-600 h-3 rounded"
          style={{ width: progress + "%" }}
        ></div>
      </div>
      <p className="text-sm mt-1">{progress}% Completed</p>
    </div>
  );
}
