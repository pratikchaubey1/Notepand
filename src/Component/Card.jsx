import React from "react";

function Card({ task, settask }) {
  const handleDelete = (id) => {
    const updatedTasks = task.filter((item) => item.id !== id);
    settask(updatedTasks);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-pink-50 flex justify-center items-center py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {task.length > 0 ? (
          task.map((taskData) => (
            <div
              key={taskData.id}
              className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-100"
            >
              {/* Heading */}
              <h1 className="text-center text-xl font-bold text-purple-600 mb-3 tracking-wide">
                📌 Note
              </h1>

              {/* Note Text */}
              <p className="text-base text-gray-700 font-medium leading-relaxed break-words">
                {taskData.Write}
              </p>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(taskData.id)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition text-lg"
                title="Delete Note"
              >
                ✖
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-gray-600 text-2xl font-semibold text-center mt-20 animate-pulse">
            📝 No Notes Available
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
