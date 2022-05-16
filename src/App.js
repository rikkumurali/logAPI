import React from 'react';
import LoginUi from './components/LoginUi';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<LoginUi />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}
export default App



      // <TableUi />
      // <QueryClientProvider client={queryClient}>
      //   <FetchData />
      // </QueryClientProvider>
