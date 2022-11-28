import {Component} from 'react'
import PasswordItem from './components/PasswordItem'

import './App.css'

class App extends Component {
  state = {passwordsDetailsList: [{name: 'Anand'}]}

  render() {
    const {passwordsDetailsList} = this.state
    return (
      <div className="home-bg-container">
        <div className="all-items-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="page-logo"
          />
          <div className="form-and-image-container">
            <form className="form">
              <h3 className="form-main-heading">Add New Password</h3>
              <div className="icon-and-input-container">
                <div className="form-input-icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="form-input-icon"
                  />
                </div>
                <input placeholder="Enter Website" className="form-input" />
              </div>
              <div className="icon-and-input-container">
                <div className="form-input-icon-container">
                  <img
                    alt="username"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    className="form-input-icon"
                  />
                </div>
                <input placeholder="Enter Username" className="form-input" />
              </div>
              <div className="icon-and-input-container">
                <div className="form-input-icon-container">
                  <img
                    alt="password"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    className="form-input-icon"
                  />
                </div>
                <input placeholder="Enter Password" className="form-input" />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="add-password-image"
            />
          </div>
          <div className="bottom-container">
            <div className="your-passwords-text-count-search-box">
              <div className="your-passwords-text-and-count">
                <h3 className="your-passwords-text">Your Passwords</h3>
                <span className="passwords-count">0</span>
              </div>
              <div className="search-icon-and-search-bar">
                <div className="search-icon-container">
                  <img
                    alt="search"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    className="search-icon"
                  />
                </div>
                <input
                  className="search-bar"
                  type="search"
                  placeholder="Search"
                />
              </div>
            </div>
            <hr />
            <div className="checkbox-and-label-container">
              <input
                id="togglePasswordsDisplay"
                className="checkbox"
                type="checkbox"
              />
              <label
                htmlFor="togglePasswordsDisplay"
                className="show-password-text"
              >
                Show Passwords
              </label>
            </div>
            {passwordsDetailsList.length > 0 ? (
              <ul>
                {passwordsDetailsList.map(eachPassWordDetails => (
                  <PasswordItem passwordDetails={eachPassWordDetails} />
                ))}
              </ul>
            ) : (
              <div className="no-passwords-container">
                <img
                  className="no-passwords-image"
                  alt="no passwords"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                />
                <h3 className="no-passwords-text">No Passwords</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
