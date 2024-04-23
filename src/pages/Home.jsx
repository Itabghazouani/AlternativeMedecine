import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
          <h1>Discover Your Path to Wellness with Alternate Medecine</h1>
          <h2>Explore Alternative Medicine, Book Appointments, and Transform Your Health Journey Today!</h2>
          <Link to="/doctors">Find Your Doctor</Link>
    </div>
  )
}
