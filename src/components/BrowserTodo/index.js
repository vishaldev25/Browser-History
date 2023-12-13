import './index.css'

const BrowserTodo = props => {
  const {historyDetails, deleteTodo} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="history-list-container">
      <div className="browser-start">
        <p className="time">{timeAccessed}</p>
        <div className="image-placement">
          <img src={logoUrl} alt="domain logo" className="logo1" />
          <div className="title-placement">
            <p className="time">{title}</p>
            <a href={domainUrl} className="url-name">
              {domainUrl}
            </a>
          </div>
        </div>
        <div className="button-container">
          <button type="button" onClick={onDelete} className="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default BrowserTodo
