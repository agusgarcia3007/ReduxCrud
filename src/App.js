import React from 'react';
import Header from './components/Header';
import Items from './components/Items';
import NewItem from './components/NewItem';
import UpdateItem from './UpdateItem';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
      <Router>
         <Header />

         <div className="container mt-5">
           <Routes>
             <Route path='/' element={<Items/>} />
             <Route path='/items/new' element={<NewItem/>} />
             <Route path='/items/update/:id' element={<UpdateItem/>} />
           </Routes>
         </div>
      </Router>
    );
}
 
export default App;
