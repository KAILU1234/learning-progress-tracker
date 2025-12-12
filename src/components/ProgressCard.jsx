export default function ProgressCard({ title, progress }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-3 text-lg">{title}</h3>

      <div className="w-full bg-gray-200 h-3 rounded">
        <div
          className="bg-blue-600 h-3 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-700 mt-2">{progress}% Completed</p>
    </div>
  );
}
