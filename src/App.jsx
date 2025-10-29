import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';


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
      
    </div>
  );
}

export default App;