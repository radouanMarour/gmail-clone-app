import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MailList from './MailList/MailList';
import Header from './Header/Header';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import MailsHeader from './components/MailsHeader/MailsHeader';
import { Routes, Route } from 'react-router-dom';
import StarredMails from './StarredMails';
import SnoozeddMails from './SnoozedMails';
import MailDetails from './MailDetails/MailDetails';
import Login from './Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { setUser } from './redux/slices/authSlice';

function App() {
  const user = useSelector(state => state.auth.user);
  const [shrinked, setShrinked] = useState(false)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   onAuthStateChanged(auth, user => {
  //     dispatch(setUser({
  //       name: user.displayName,
  //       email: user.email
  //     }))
  //   })
  // }, []);

  return (
    <div className="app">
      {user ?
        <>
          <Header setShrinked={setShrinked} />
          <main>
            <LeftSidebar shrinked={shrinked} />
            <Routes>
              <Route exact path="/" element={<MailList />} />
              <Route path="/starred" element={<StarredMails />} />
              <Route path="/snoozed" element={<SnoozeddMails />} />
              <Route path="/inbox/:id" element={<MailDetails />} />
            </Routes>
            <RightSidebar />
          </main>
        </> : <Login />
      }
    </div>
  );
}

export default App;
