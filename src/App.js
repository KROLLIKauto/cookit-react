import Authorisation from './Authorisation/Authorisation'
import { useRoutes, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (<>
    <Routes>
      <Route path='/authorisation' element={<Authorisation />} />
      <Route path="/" element={<Navigate replace to="/authorisation" />} />
    </Routes>
   </>);
}

export default App;
