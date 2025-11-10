export default function TodoFooter({
  todos,
  active,
  completed,
  markAllComplete,
  clearCompleted,
  clearAll,
}) {
  const allCompleted = todos.length > 0 && active.length === 0;

  return (
    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
      <div className="text-neutral-400 text-sm">
        {active.length} of {todos.length} tasks remaining
      </div>

      <div className="flex flex-wrap gap-3 justify-end">
        {/* Toggle Complete/Uncomplete Button */}
        <button
          onClick={markAllComplete}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 border ${
            allCompleted
              ? "bg-yellow-600 hover:bg-yellow-700 text-white border-yellow-500"
              : "bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border-neutral-600 hover:border-neutral-500"
          }`}
        >
          {allCompleted ? "Unmark All" : "Mark All Complete"}
        </button>

        {completed.length > 0 && (
          <button
            onClick={clearCompleted}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200"
          >
            Clear Completed ({completed.length})
          </button>
        )}

        <button
          onClick={clearAll}
          className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg font-medium transition-colors duration-200"
        >
          Delete All Tasks
        </button>
      </div>
    </div>
  );
}
