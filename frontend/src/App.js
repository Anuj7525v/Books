import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BookListingPage from './Pages/BookListingPage.jsx';
import BookDetailsPage from './Pages/BookDetailsPage.jsx';
import UserProfilePage from './Pages/UserProfilePage.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/books" element={<BookListingPage/>}/>
        <Route path="/books/:id" element={<BookDetailsPage/>}/>
        <Route path="/profile" element={<UserProfilePage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
