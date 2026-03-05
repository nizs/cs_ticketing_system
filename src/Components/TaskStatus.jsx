const TaskStatus = ({ ticket }) => {
    const { title } = ticket;
    if (!ticket) {
        return (
            <div className="p-6 rounded-xl shadow bg-white">
                <h2 className="text-xl font-semibold mb-4">Task Status</h2>
                <p className="text-gray-500">No ticket selected</p>
            </div>
        );
    }
    return (
        <div>
            <h2 className="text-xl mb-4 font-bold text-[#34485A]">Task Status</h2>
            <div className="bg-white p-6 rounded-xl shadow">

                <h3 className="text-xl font-semibold mb-4">
                    {title}
                </h3>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Responsive</button>


            </div>
        </div>
    );
};

export default TaskStatus;