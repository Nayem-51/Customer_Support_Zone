import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCards';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  useEffect(() => {
    fetch('/Tickets.json')
      .then(response => response.json())
      .then(data => setTickets(data))
      .catch(error => console.error('Error loading tickets:', error));
  }, []);

  function handleAddToProgress(ticket) {
    const ticketExists = inProgressTickets.find(t => t.id === ticket.id);
    
    if (ticketExists) {
      toast.info('This ticket is already in progress!');
      return;
    }

    setInProgressTickets([...inProgressTickets, ticket]);
    toast.success(`"${ticket.title}" added to Task Status!`);
  }

  function handleComplete(ticket) {
    const updatedInProgress = inProgressTickets.filter(t => t.id !== ticket.id);
    setInProgressTickets(updatedInProgress);

    setResolvedTickets([...resolvedTickets, ticket]);

    const updatedTickets = tickets.filter(t => t.id !== ticket.id);
    setTickets(updatedTickets);

    toast.success(`"${ticket.title}" marked as resolved!`);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-20 pb-8 flex-grow">
        <Banner
          inProgressCount={inProgressTickets.length}
          resolvedCount={resolvedTickets.length}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onAddToProgress={handleAddToProgress}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <TaskStatus
              inProgressTickets={inProgressTickets}
              resolvedTickets={resolvedTickets}
              onComplete={handleComplete}
            />
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;