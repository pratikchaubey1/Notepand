import React, { useState } from 'react';
import One from './Component/One';
import Card from './Component/Card';


function App() {
  const [task, settask] = useState([]);

  const handletask = (data) => {
    settask([...task,data]);
  };

  const handleRemove = (index) => {
    
  }
  return (
     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 px-6">
      
      <h1 className="text-center text-4xl font-bold text-white mb-10 tracking-wide animate-bounce">
        📝 Smart NotePad
      </h1>    
      <div className="mb-12">
        <One handletask={handletask} />
      </div>      
      <div>
        <Card task={task} settask={settask} />
      </div>
    </div>
  );
}

export default App;
