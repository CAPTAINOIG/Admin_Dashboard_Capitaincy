import React, { useState } from 'react';
import PersonalData from './PersonalData';
import ApprovedApproval from './ApprovedApproval';
import PendinApproval from './PendinApproval';
import DeclinedApproval from './DeclinedApproval';

const UserApproval = () => {
    const [currentSection, setCurrentSection] = useState('personaldata');

    const showSection = (section) => {
        setCurrentSection(section);
    }

    return (
        <div className=" px-10 lg:ms-[17%] bg-gray-100 min-h-screen">
            <div className="grid grid-cols-4 gap-4 mb-8">
                <button onClick={() => showSection('personaldata')} className={`py-2 px-4 text-white rounded transition-all duration-500 ease-in-out transform ${currentSection === 'personaldata' ? 'bg-blue-600 border-t-4 border-blue-600 scale-105' : 'bg-gray-800'}`}>Personal Data</button>
                <button onClick={() => showSection('approvedapproval')} className={`py-2 px-4 text-white rounded transition-all duration-500 ease-in-out transform ${currentSection === 'approvedapproval' ? 'bg-blue-600 border-t-4 border-blue-600 scale-105' : 'bg-gray-800'}`}>Approved Approval</button>
                <button onClick={() => showSection('pendinapproval')} className={`py-2 px-4 text-white rounded transition-all duration-500 ease-in-out transform ${currentSection === 'pendinapproval' ? 'bg-blue-600 border-t-4 border-blue-600 scale-105' : 'bg-gray-800'}`}>Pending Approval</button>
                <button onClick={() => showSection('declinedapproval')} className={`py-2 px-4 text-white rounded transition-all duration-500 ease-in-out transform ${currentSection === 'declinedapproval' ? 'bg-blue-600 border-t-4 border-blue-600 scale-105' : 'bg-gray-800'}`}>Declined Approval</button>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
                {currentSection === 'personaldata' && <PersonalData />}
                {currentSection === 'approvedapproval' && <ApprovedApproval />}
                {currentSection === 'pendinapproval' && <PendinApproval />}
                {currentSection === 'declinedapproval' && <DeclinedApproval />}
            </div>
        </div>
    );
}

export default UserApproval;
