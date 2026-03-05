import { useEffect, useState } from "react";
import CustomerTickets from "../Components/CustomerTickets";
import ResolvedTasks from "../Components/ResolvedTasks";
import TaskStatus from "../Components/TaskStatus";


const TicketingLayout = () => {
  const [tickets, setTickets] = useState([]);

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
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">

      {/* Left Column */}
      <div className="lg:col-span-2">
        <CustomerTickets
          tickets={tickets}
          handleTicketClick={handleTicketClick}
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        <TaskStatus />
        <ResolvedTasks />
      </div>

    </div>
  );
};

export default TicketingLayout;