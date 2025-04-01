import './App.css'
import SignInForm from './components/form.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<SignInForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
