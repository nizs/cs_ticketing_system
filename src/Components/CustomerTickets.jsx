import TicketCard from "./TicketCard";


const CustomerTickets = ({ tickets, handleTicketClick }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-xl font-semibold mb-4">
                Customer Tickets
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tickets.map(ticket => <TicketCard
                    ticket={ticket}
                    handleTicketClick={handleTicketClick} />)}
            </div>

        </div>
    );
};

export default CustomerTickets;