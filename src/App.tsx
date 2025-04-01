import './App.css'
import SignInForm from './components/form.tsx';
import HomePage from './components/pages/homePage.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<SignInForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
