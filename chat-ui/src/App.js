import React from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import Form from './Form'

function App() {
  return (
    <div className="flex   h-screen bg-gray-100">
      <ChatList />
      <ChatWindow />
      {/* <Form></Form> */}
    </div>
  );
}

export default App;
// flex items-center justify-center