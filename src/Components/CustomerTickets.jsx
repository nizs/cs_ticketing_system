import TicketCard from "./TicketCard";


const CustomerTickets = ({ tickets, handleTicketClick }) => {
    return (
        <div className="rounded-xl ">

            <h2 className="text-xl mb-4 font-bold text-[#34485A]">
                Customer Tickets
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tickets.map(ticket => <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    handleTicketClick={handleTicketClick} />)}
            </div>

        </div>
    );
};

export default CustomerTickets;