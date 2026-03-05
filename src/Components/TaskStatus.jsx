const TaskStatus = () => {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
  
        <h2 className="text-xl font-semibold mb-4">
          Task Status
        </h2>
  
        <div className="space-y-3">
  
          <div className="flex justify-between">
            <span>Open Tasks</span>
            <span className="font-semibold">12</span>
          </div>
  
          <div className="flex justify-between">
            <span>In Progress</span>
            <span className="font-semibold">5</span>
          </div>
  
          <div className="flex justify-between">
            <span>Pending</span>
            <span className="font-semibold">3</span>
          </div>
  
        </div>
  
      </div>
    );
  };
  
  export default TaskStatus;