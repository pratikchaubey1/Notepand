import React from 'react';
import { useForm } from 'react-hook-form';

function One({ handletask }) {
  const { register, handleSubmit, reset } = useForm();

  const handletaskdata = (taskdata) => {
    handletask(taskdata);
    reset();
  };

  return (
    <div className="flex justify-center px-4">
      <form
        onSubmit={handleSubmit(handletaskdata)}
        className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-center"
      >
        <input
          {...register('Write', { required: true })}
          type="text"
          placeholder="Write your note..."
          className="flex-1 h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-900 placeholder-gray-400"
        />
        <button
          type="submit"
          className="h-12 px-6 bg-indigo-600 hover:bg-indigo-800 text-white font-semibold rounded-lg transition duration-300 shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default One;
