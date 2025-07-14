import { useNavigate, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleCollaborateClick = () => {
    navigate("/collaborate");
  };

  return (
    <div className="border-b bg-card">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-primary" />
          <button
            onClick={handleHomeClick}
            className="text-base font-semibold border border-border rounded px-2 py-0.5 cursor-pointer"
          >
            IIT KGP EECE Course Catalog
          </button>
          <button
            onClick={handleAboutClick}
            className="text-sm font-medium border border-border rounded px-2 py-0.5 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={handleCollaborateClick}
            className="text-sm font-medium border border-border rounded px-2 py-0.5 cursor-pointer"
          >
            Collaborate
          </button>
        </div>
      </div>
    </div>
  );
} 