import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-500">¡Bienvenido a mi Portafolio!</h1>
        <p className="text-gray-600 mt-4">Desarrollador Full Stack | Creativo | Innovador</p>
        <div className="mt-8">
          <Link to="/projects" className="px-4 py-2 bg-blue-500 text-white rounded-md">Mis Proyectos</Link>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-500">Mis Proyectos</h1>
        <p className="text-gray-600 mt-4">Aquí podrás encontrar los proyectos en los que he trabajado.</p>
        <div className="mt-8">
          <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-md">Volver a Inicio</Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
