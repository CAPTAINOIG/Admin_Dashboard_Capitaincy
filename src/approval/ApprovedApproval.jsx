import React from 'react';

const ApprovedApproval = () => {
    return (
        <div>
            <h1 className="text-xl font-semibold mb-4">Approved Approval</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                        <td className="px-6 py-4 whitespace-nowrap">HR</td>
                        <td className="px-6 py-4 whitespace-nowrap">Leave Request</td>
                        <td className="px-6 py-4 whitespace-nowrap">2024-07-15</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-blue-600 hover:text-blue-900">View</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ApprovedApproval;
