import React, { useState, useEffect } from 'react';

const contacts = [
  { name: 'Eleanor Pena', lastMessage: 'Message body...', time: '15h' },
  { name: 'Ralph Edwards', lastMessage: 'Message body...', time: '15h' },
  { name: 'Roberta Fox', lastMessage: 'Message body...', time: 'Active now' },
  { name: 'Marvina McKinney', lastMessage: 'Message body...', time: '15h' },
  { name: 'Brooklyn Simmons', lastMessage: 'Message body...', time: '15h' },
  { name: 'Alberta Flores', lastMessage: 'Message body...', time: '15h' },
  { name: 'Jerome Bell', lastMessage: 'Message body...', time: '15h' },
];

function ChatList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState('border-gray-300');

  useEffect(() => {
    if (searchQuery.length > 0 && searchQuery.length < 2) {
      setInputBorderColor('border-red-500');
    } else {
      setInputBorderColor('border-blue-500');
    }
  }, [searchQuery]);

  return (
    <div className="w-1/3 border-r border-gray-300 p-4 bg-white">
      <input
        type="text"
        placeholder="Search a post"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={`w-full p-2 mb-4 border ${inputBorderColor} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      <ul>
        {contacts.map((contact, index) => (
          <li key={index} className="flex items-center mb-4 p-2 hover:bg-gray-200 rounded cursor-pointer">
            <div className="w-10 h-10 bg-blue-500 rounded-full mr-3"></div>
            <div>
              <p className="font-semibold text-gray-800">{contact.name}</p>
              <p className="text-sm text-gray-600">{contact.lastMessage}</p>
            </div>
            <div className="ml-auto text-xs text-gray-500">{contact.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;