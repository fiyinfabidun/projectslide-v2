import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Registerandlogin from './components/Registerandlogin';
import Home from './components/Home';
import Login from './components/Login';
import { UserAuthContextProvider } from './context/UserAuthConfig';
import './App.css';
import ForgotPassword from './components/ForgotPassword';
import ProtectedRoute from './components/ProtectedRoute';
import Phronesis from './Pages/Phronesis';
import Delphinium from './Pages/Delphinium';
import Pandora from './Pages/Pandora';
import Amabilis from './Pages/Amabilis';
import Phoenix from './Pages/Phoenix';
import Aspectum from './Pages/Aspectum';
import Genezens from './Pages/Genezens';

function App() {
  return (

   <UserAuthContextProvider>
       <BrowserRouter>
     <Routes>
        <Route path='/create' element={<Registerandlogin/>}/>
        <Route path='/home' element={ <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
        }/>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/reset-password' element={<ForgotPassword/>}></Route>
        <Route path='/phronesis' element={<ProtectedRoute>
          <Phronesis/>
        </ProtectedRoute>
        }></Route>

         <Route path='/delphinium' element={<ProtectedRoute>
          <Delphinium/>
        </ProtectedRoute>
        }></Route>

        <Route path='/pandora' element={<ProtectedRoute>
          <Pandora/>
        </ProtectedRoute>
        }></Route>

        <Route path='/amabilis' element={<ProtectedRoute>
          <Amabilis/>
        </ProtectedRoute>
        }></Route>

        <Route path='/aspectum' element={<ProtectedRoute>
          <Aspectum/>
        </ProtectedRoute>
        }></Route>

        <Route path='/phoenix' element={<ProtectedRoute>
          <Phoenix/>
        </ProtectedRoute>
        }></Route>

          <Route path='/genezens' element={<ProtectedRoute>
          <Genezens/>
        </ProtectedRoute>
        }></Route>
     </Routes>
     </BrowserRouter>
     </UserAuthContextProvider>
  
  );
}

export default App;
