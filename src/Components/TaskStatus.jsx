

const TaskStatus = ({ tickets }) => {
    if (tickets.length === 0) {
        return (
            <div>
                <h2 className="text-xl mb-4 font-bold text-[#34485A]">Task Status</h2>
                <div className="p-4 rounded-lg bg-white hover:shadow-md transition">
                    <p className="text-gray-500">Select a ticket to add to task status</p>
                </div>
            </div>
        );
    }
    return (
        <div>
            <h2 className="text-xl mb-4 font-bold text-[#34485A]">Task Status</h2>
            <div className="flex flex-col gap4 bg-base-200 gap-6">
                {tickets.map(ticket => <div
                    key={ticket.id}
                    className=" p-4 rounded-lg bg-white hover:shadow-md transition"
                >
                    <h3 className="font-semibold">{ticket.title}</h3>
                    <button className="w-full bg-[#02A53B] text-lg mt-4 text-white btn btn-xs sm:btn-sm md:btn-md">Complete</button>
                </div>)}
            </div>
        </div>
    );
};

export default TaskStatus;