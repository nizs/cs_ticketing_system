import { useEffect, useState } from "react";
import CustomerTickets from "../Components/CustomerTickets";
import ResolvedTasks from "../Components/ResolvedTasks";
import TaskStatus from "../Components/TaskStatus";


const TicketingLayout = () => {
  const [tickets, setTickets] = useState([]);
  const [clickedTicket, setClickedTicket] = useState(null);

  const loadTickets = async () => {
    try {
      const res = await fetch("/tickets.json");
      const data = await res.json();
      setTickets(data);
    } catch (error) {
      console.log("Error loading tickets:", error);
    }
  };

  useEffect(() => {
    loadTickets();
  }, []);



  const handleTicketClick = (ticket) => {
    console.log("Ticket clicked:", ticket);
    setClickedTicket(ticket);
  };

  return (
    <div className="bg-base-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-0">

        {/* Left Column */}
        <div className="lg:col-span-2">
          <CustomerTickets
            tickets={tickets}
            handleTicketClick={handleTicketClick}
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <TaskStatus
            ticket={clickedTicket}
          />
          <ResolvedTasks />
        </div>

      </div>
    </div>
  );
};

export default TicketingLayout;