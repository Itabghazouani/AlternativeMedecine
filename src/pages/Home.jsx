import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
          <h1>Nature is your medecine, use the futuristic way to heal and raise above</h1>
          <h2>There is more than one way to cure illness and pathology. Discover the new wave of medicine. </h2>
          <Link to="/doctors">Find Your Doctor</Link>
    </div>
  )
}
