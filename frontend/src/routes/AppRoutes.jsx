import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Welcome from '../pages/Welcome';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
                <Route path="/register" element={<Register />} />
                <Route path="/welcome" element={<Welcome />} />
            </Route>            
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
