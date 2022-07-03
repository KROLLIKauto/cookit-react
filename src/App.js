import Authorisation from './Authorisation/Authorisation'
import MainPage from './Main/MainPage'
import { useRoutes, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (<>
    <Routes>
      <Route path='/authorisation' element={<Authorisation />} />
      <Route path='/main-page' element={<MainPage />} />
      <Route path="/" element={<Navigate replace to="/authorisation" />} />
    </Routes>
   </>);
}

export default App;
