import React, { useState } from 'react';

function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleOpenForm = () => {
    setIsOverlayVisible(true);
  };

  const handleCloseForm = () => {
    setIsOverlayVisible(false);
  };

  return (
    <div className="App">
      <button className='bg-[#182B5C] p-3 rounded-xl text-white' onClick={handleOpenForm}>Admin Login</button>

      {isOverlayVisible && (
        <div className="overlay" onClick={handleCloseForm}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseForm}>&times;</span>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required /><br /><br />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required /><br /><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
