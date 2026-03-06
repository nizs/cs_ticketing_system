const ResolvedTasks = ({ resolveds }) => {
  if (resolveds.length === 0) {
    return (
      <div>
        <h2 className="text-xl mb-4 font-bold text-[#34485A]">Resolved Task</h2>
        <div className="p-4 rounded-lg bg-white hover:shadow-md transition">
          <p className="text-gray-500">No Resolved Task Yet</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-xl mb-4 font-bold text-[#34485A]">Resolved Task</h2>
      <div className="flex flex-col gap4 bg-base-200 gap-6">
        {resolveds.map(resolved => <div
          key={resolved.id}
          className=" p-4 rounded-lg bg-[#E0E7FF] hover:shadow-md transition"
        >
          <h3 className="font-semibold">{resolved.title}</h3>
        </div>)}
      </div>
    </div>
  );
};

export default ResolvedTasks;