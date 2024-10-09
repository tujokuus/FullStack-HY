import ReactDOM from "react-dom/client"
import App from "../App"

const Filter = ({ value, handleSearchChange }) => {
    return (
      <div>
        filter: <input value={value} onChange={handleSearchChange} />
      </div>
    )
  }

export default Filter