import React from 'react';

const TaskStatus = ({ inProgressTickets, resolvedTickets, onComplete }) => {
    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Task Status</h2>
                <div className="space-y-3">
                    {inProgressTickets.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">Select ticket to add to task status</p>
                    ) : (
                        inProgressTickets.map((ticket) => (
                            <div key={ticket.id} className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-3">{ticket.title}</h4>
                                <button
                                    className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium"
                                    onClick={() => onComplete(ticket)}
                                >
                                    Complete
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Resolved Task</h2>
                <div className="space-y-3">
                    {resolvedTickets.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">Not resolved task yet</p>
                    ) : (
                        resolvedTickets.map((ticket) => (
                            <div key={ticket.id} className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800">{ticket.title}</h4>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskStatus;