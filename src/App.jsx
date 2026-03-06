import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import CustomerTickets from "./Components/CustomerTickets";
import TaskStatus from "./Components/TaskStatus";
import ResolvedTasks from "./Components/ResolvedTasks";
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [tickets, setTickets] = useState([]);
  const [inProgressTickets, setInProgressTickets] = useState([]);

  // load tickets from public JSON
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


  // ticket click handler
  const handleTicketClick = (clickedTicket) => {

    // prevent duplicate click
    const alreadyAdded = inProgressTickets.find(
      ticket => ticket.id === clickedTicket.id
    );

    if (alreadyAdded) {
      toast.warning(
        <span>
          <span className="font-bold">{clickedTicket.title}</span>, already in progress!
        </span>
      );
      return;
    } else {
      // show success toast
      toast.success(
        <span>
          <span className="font-bold">{clickedTicket.title}</span>, is in progress
        </span>
      );

      // add to task status section
      setInProgressTickets([...inProgressTickets, clickedTicket]);

      // update ticket status in main ticket list
      const updatedTickets = tickets.map(ticket =>
        ticket.id === clickedTicket.id
          ? { ...ticket, status: "in-progress" }
          : ticket
      );

      setTickets(updatedTickets);
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar />

      {/* Banner */}
      <Banner
        inProgressCount={inProgressTickets}
        resolvedCount={0}
      />

      {/* Main Layout */}
      <div className="bg-base-200 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">

          {/* Left Column */}
          <div className="lg:col-span-2">
            <CustomerTickets
              tickets={tickets}
              handleTicketClick={handleTicketClick}
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <TaskStatus tickets={inProgressTickets} />
            <ResolvedTasks />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;