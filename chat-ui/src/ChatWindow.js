import React from 'react';

function ChatWindow() {
  return (
    <div className="w-2/3 p-4 flex flex-col bg-white">
      <div className="flex items-center border-b border-gray-300 pb-2 mb-4">
        <div className="w-10 h-10 bg-blue-500 rounded-full mr-3"></div>
        <div>
          <p className="font-semibold text-gray-800">Roberta Fox</p>
          <p className="text-sm text-gray-600">Active now</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col space-y-2">
          <div className="self-start bg-gray-200 p-2 rounded max-w-xs">
            <p>Hey! I'm good.</p>
          </div>
          <div className="self-end bg-blue-100 p-2 rounded max-w-xs">
            <p>Hey Roberta, how's it going?</p>
          </div>
          <div className="self-start bg-gray-200 p-2 rounded max-w-xs">
            <p>Just finished a long day at work. How about you?</p>
          </div>
          <div className="self-end bg-blue-100 p-2 rounded max-w-xs">
            <p>Same here</p>
            <p>Work was crazy today</p>
            <p>But I'm glad it's over. Any plans for the evening?</p>
          </div>
          <div className="self-start bg-gray-200 p-2 rounded max-w-xs">
            <p>Not much, just planning to relax and maybe watch a movie</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          placeholder="Write your message..."
          className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600">Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;