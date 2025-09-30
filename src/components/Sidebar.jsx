// Sidebar.jsx
import { Home, Grid, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`h-screen bg-gray-900 text-white flex flex-col p-4 transition-all duration-300 
        ${isOpen ? "w-56" : "w-16"}`}
        >
            {/* زرار المينيو */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 mb-6 rounded-md hover:bg-gray-800"
            >
                <Menu size={24} />
            </button>

            {/* العنوان */}
            {isOpen && <h1 className="text-2xl font-bold mb-6">Taskly</h1>}

            {/* الناف */}
            <nav className="flex flex-col gap-4">
                <Link
                    to="/"
                    className="flex items-center gap-2 hover:bg-gray-800 rounded-lg px-3 py-2"
                >
                    <Home size={20} /> {isOpen && "Tasks"}
                </Link>
                <Link
                    to="/eisenhower"
                    className="flex items-center gap-2 hover:bg-gray-800 rounded-lg px-3 py-2"
                >
                    <Grid size={20} /> {isOpen && "Eisenhower"}
                </Link>
            </nav>
        </div>
    );
}
