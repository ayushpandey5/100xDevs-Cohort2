
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => {
        navigate("/dashboard")
        }}>Dashboard</button>
        <button onClick={() => {
            navigate("/")
        }}>Landing</button>
        </div>
  )
}
