import { useState } from 'react'; 
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import ArtistProfile from './pages/ArtistProfile';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import Authentication from './pages/Authentication';
import Marketplace from './pages/Marketplace';
import NFTPage from './pages/Nft_details';
import Upload from './pages/Upload';
import ScrollToTop from './components/scrolltotop';
import './App.css'


function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* <Dashboard></Dashboard> */}
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/artist/:artistName" element={<ArtistProfile/>}></Route>
        <Route path="/profile" element={<UserProfile></UserProfile>}></Route>
        <Route path="/auth" element={<Authentication></Authentication>}></Route>
        <Route path="/marketplace" element={<Marketplace></Marketplace>}></Route>
        <Route path="/assets/:assetId" element={<NFTPage></NFTPage>}></Route>
        <Route path="/upload" element={<Upload/>}></Route>
      </Routes>
    </Router>
  )
}

export default App

//info = Buy NFT, sell NFT, place bit
//Features pack = songs
