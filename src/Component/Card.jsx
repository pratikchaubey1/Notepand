import React from 'react';

function Card({ task, settask }) {
  const handleDelete = (id) => {
    const updatedTasks = task.filter((item) => item.id !== id);
    settask(updatedTasks);
  };

  return (
    <div className="w-80 max-w-full bg-white min-h-screen rounded-3xl shadow-xl p-8 flex flex-col justify-center items-center relative hover:scale-105 hover:shadow-2xl transform transition duration-300 ease-in-out">
      <div className="flex flex-wrap justify-center gap-8">
        {task.length > 0 ? (
          task.map((taskData) => (
            <div
              key={taskData.id}
              className="w-72 bg-white rounded-2xl shadow-xl p-6 relative hover:scale-105 transition duration-300"
            >
              <h1 className="text-center text-2xl font-extrabold text-red-700 mb-3 tracking-wide">
                Note
              </h1>
              <p className="text-lg text-gray-700 font-medium leading-relaxed break-words">
                {taskData.Write}
              </p>

              <button
                onClick={() => handleDelete(taskData.id)}
                className="absolute top-2 right-2 text-sm text-red-500 hover:text-red-700 font-semibold transition"
              >
                ✖
              </button>
            </div>
          ))
        ) : (
          <p className="text-black text-3xl font-semibold text-center mt-20 animate-pulse">
            📝 No Notes Available
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
