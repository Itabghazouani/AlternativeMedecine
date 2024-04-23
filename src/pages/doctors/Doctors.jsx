import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDoctors } from "../../../api";

export default function Doctors() {
  const [ allDoctors, setAllDoctors ] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadDoctors() {
      setLoading(true)
      try {
        const data = await getDoctors()
        setAllDoctors(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadDoctors()
  }, [])

  const doctorElements = allDoctors.map(doctor => (
    <div key={doctor.id} className="doctor-tile">
      <Link
        to={doctor.id}
        aria-label={`View details for ${doctor.name}, priced at $${doctor.price} per hour`}
      >
        <img src={doctor.imageUrl} alt={`Image of ${doctor.name}`} />
        <div className="doctor-info">
          <h3>{doctor.name}</h3>
          <div className="doctor-price">
            <p>€{doctor.price}</p><span>/hour</span>
          </div>
        </div>
        <i className={`doctor-speciality ${doctor.speciality} selected`}>{doctor.speciality}</i>
      </Link>
    </div>
  ))

  if (loading) {
    return <h1 className='loading-text' aria-live="polite">Loading...</h1>
  }

  if (error) {
    return <h1 aria-live="assertive">There was an error: {error.message}</h1>
  }

  return (
    <div className="doctor-list-container">
      <h1>Explore our options and find your Doctor</h1>
      <div className="doctor-list">
        {doctorElements}
      </div>
    </div>
  )
}
