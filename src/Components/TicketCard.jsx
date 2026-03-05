import { FaCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
const TicketCard = ({ ticket, handleTicketClick }) => {
    const { id, title, description, customer, priority, status, createdAt } = ticket;
    return (
        <div onClick={() => handleTicketClick(ticket)} className="border hover:border-purple-500 rounded-lg p-4 cursor-pointer hover:shadow-md hover:scale-[1.02] transition duration-200 bg-white">

            <div className='flex justify-between items-center'>
                <h3 className="font-semibold text-lg">
                    {title}
                </h3>
                <div className="flex items-center gap-1 bg-[#B9F8CF] px-2 py-1 rounded-full">
                    <span><FaCircle className="text-[#02A53B]" /></span>
                    <p className="text-[#0B5E06] font-medium">{ticket?.status}</p>
                </div>
            </div>

            <p className="text-sm text-gray-500 mt-1">
                {description}
            </p>

            <div className="flex justify-between items-center mt-4">


                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 px-2 py-1 rounded">
                        #{id}
                    </span>
                    <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                        {priority}
                    </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-sm px-2 py-1 rounded">
                        {customer}
                    </span>
                    <div className="flex items-center gap-1 text-sm  px-2 py-1 rounded">
                        <span><MdDateRange /></span>{createdAt}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TicketCard;