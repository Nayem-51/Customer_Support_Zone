import React from 'react';

const TicketCard = ({ ticket, onAddToProgress }) => {
    const getPriorityColor = (priority) => {
        if (priority === 'HIGH PRIORITY') return 'text-red-600';
        if (priority === 'MEDIUM PRIORITY') return 'text-yellow-600';
        return 'text-green-600';
    };

    const getStatusBadge = (status) => {
        if (status === 'Open') {
            return (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-green-200 text-green-700">
                    <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                    Open
                </span>
            );
        }
        if (status === 'In Progress') {
            return (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                    <span className="w-3 h-3 bg-orange-300 rounded-full"></span>
                    In- Progress
                </span>
            );
        }
        return (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-400 text-white">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                {status}
            </span>
        );
    };

    return (
        <div
            className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onAddToProgress(ticket)}
        >
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 pr-3 flex-1">{ticket.title}</h3>
                {getStatusBadge(ticket.status)}
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{ticket.description}</p>

            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                    <span className="text-gray-500">{ticket.id}</span>
                    <span className={`font-semibold ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority}
                    </span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                    <span>{ticket.assignee}</span>
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
                            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" />
                            <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span>{ticket.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;