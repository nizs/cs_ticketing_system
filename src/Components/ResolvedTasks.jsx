const ResolvedTasks = () => {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
  
        <h2 className="text-xl font-semibold mb-4">
          Resolved Tasks
        </h2>
  
        <div className="space-y-3">
  
          <div className="flex justify-between">
            <span>Today</span>
            <span className="font-semibold">4</span>
          </div>
  
          <div className="flex justify-between">
            <span>This Week</span>
            <span className="font-semibold">18</span>
          </div>
  
          <div className="flex justify-between">
            <span>Total</span>
            <span className="font-semibold">124</span>
          </div>
  
        </div>
  
      </div>
    );
  };
  
  export default ResolvedTasks;