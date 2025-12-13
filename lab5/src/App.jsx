import React from 'react';
import './App.css';

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  handleClick = () => {
    this.setState({ isClicked: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>ClickMe</button>
        {this.state.isClicked && <p>Clicked</p>}
      </div>
    );
  }
}

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1
    }));
  };

  render() {
    const isOddClick = this.state.clickCount % 2 === 1;
    
    return (
      <div>
        <button onClick={this.handleClick}>ClickMe</button>
        {this.state.clickCount > 0 && (
          <p>{isOddClick ? 'Clicked' : 'Not Clicked'}</p>
        )}
      </div>
    );
  }
}

class ButtonDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedButton: null
    };
  }

  handleButtonClick = (buttonNumber) => {
    this.setState({ clickedButton: buttonNumber });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleButtonClick(1)}>Button1</button>
        <button onClick={() => this.handleButtonClick(2)}>Button2</button>
        <button onClick={() => this.handleButtonClick(3)}>Button3</button>
        
        {this.state.clickedButton && (
          <p>Button #{this.state.clickedButton} was clicked</p>
        )}
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Inc</button>
        <button onClick={this.decrement}>Dec</button>
      </div>
    );
  }
}

// Exercise 2.1: 
class DisplayTab1 extends React.Component {
  render() {
    const tab = ["hello", "world", "from", "react"];
    
    return (
      <div>
        <h3>Exercise 2.1 - Unordered List</h3>
        <ul>
          {tab.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// Exercise 2.2: 
class DisplayTab2 extends React.Component {
  render() {
    const tab = ["hello", "world", "from", "react"];
    
    return (
      <div>
        <h3>Exercise 2.2 - With Element Numbers</h3>
        <div>
          {tab.map((item, index) => (
            <div key={index}>
              Element {index + 1} is: {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// Exercise 2.3: 
class DisplayTab3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: ["hello", "world", "from", "react"]
    };
  }

  handleRemove = (indexToRemove) => {
    this.setState(prevState => ({
      tab: prevState.tab.filter((item, index) => index !== indexToRemove)
    }));
  };

  render() {
    return (
      <div>
        <h3>Exercise 2.3 - Click to Remove</h3>
        <div>
          {this.state.tab.map((item, index) => (
            <div 
              key={index}
              className="clickable-item"
              onClick={() => this.handleRemove(index)}
            >
              Element {index + 1} is: {item}
            </div>
          ))}
        </div>
        {this.state.tab.length === 0 && (
          <p>All elements have been removed!</p>
        )}
      </div>
    );
  }
}

// Exercise 2.4: 
class DisplayTab4 extends React.Component {
  render() {
    const { tab } = this.props;
    
    return (
      <div>
        <h3>Exercise 2.4 - Parameterized with Props</h3>
        <ul>
          {tab.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// Exercise 2.5: 
class DisplayTab5 extends React.Component {
  render() {
    const { tab, title } = this.props;
    
    return (
      <div>
        <h4>Table: {title}</h4>
        <ul>
          {tab.map((item, index) => (
            <li key={index}>
              Element {index + 1} is: {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Exercise 3.1: 
class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      users: [] 
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    const { username, password } = this.state;
    
    if (username.trim() && password.trim()) {
      const newUser = {
        id: Date.now(), // unique ID
        username: username,
        password: password 
      };
      
      this.setState(prevState => ({
        users: [...prevState.users, newUser],
        username: '',
        password: ''
      }));
    }
  };

  // Exercise 3.3:
  handleDeleteUser = (userId) => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId)
    }));
  };

  render() {
    const { username, password, users } = this.state;

    return (
      <div className="auth-container">
        <h3>Exercise 3.1 - Authentication Form</h3>
        
        <form onSubmit={this.handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">Add User</button>
        </form>

        {/* Exercise 3.2:*/}
        <div className="users-list">
          <h4>Users List ({users.length} users)</h4>
          {users.length === 0 ? (
            <p>No users added yet.</p>
          ) : (
            <ul>
              {users.map(user => (
                <li key={user.id} className="user-item">
                  <div className="user-info">
                    <strong>Username:</strong> {user.username} | 
                    <strong> Password:</strong> {user.password}
                  </div>
                  {/* Exercise 3.3:*/}
                  <button 
                    onClick={() => this.handleDeleteUser(user.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

// Exercise 4: 
class DivCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '100',
      height: '100',
      backgroundColor: '#3498db',
      divs: [] 
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    const { width, height, backgroundColor } = this.state;
    
    const newDiv = {
      id: Date.now(),
      width: parseInt(width),
      height: parseInt(height),
      backgroundColor: backgroundColor
    };
    
    this.setState(prevState => ({
      divs: [...prevState.divs, newDiv],
      width: '100',
      height: '100',
      backgroundColor: '#3498db'
    }));
  };

  handleDeleteDiv = (divId) => {
    this.setState(prevState => ({
      divs: prevState.divs.filter(div => div.id !== divId)
    }));
  };

  render() {
    const { width, height, backgroundColor, divs } = this.state;

    return (
      <div className="div-creator-container">
        <h3>Exercise 4 - Div Creator</h3>
        
        <form onSubmit={this.handleSubmit} className="div-creator-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="width">Width (px):</label>
              <input
                type="number"
                id="width"
                name="width"
                value={width}
                onChange={this.handleInputChange}
                min="10"
                max="500"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="height">Height (px):</label>
              <input
                type="number"
                id="height"
                name="height"
                value={height}
                onChange={this.handleInputChange}
                min="10"
                max="500"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="backgroundColor">Background Color:</label>
              <input
                type="color"
                id="backgroundColor"
                name="backgroundColor"
                value={backgroundColor}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          
          <button type="submit" className="submit-btn">Create Div</button>
        </form>

        {/* Preview of the div to be created */}
        <div className="preview-section">
          <h4>Preview:</h4>
          <div 
            className="preview-div"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: backgroundColor
            }}
          >
            <span>{width}px × {height}px</span>
          </div>
        </div>

        {/* Display created divs */}
        <div className="created-divs-section">
          <h4>Created Divs ({divs.length}):</h4>
          {divs.length === 0 ? (
            <p>No divs created yet. Use the form above to create some!</p>
          ) : (
            <div className="divs-grid">
              {divs.map(div => (
                <div key={div.id} className="created-div-container">
                  <div 
                    className="created-div"
                    style={{
                      width: `${div.width}px`,
                      height: `${div.height}px`,
                      backgroundColor: div.backgroundColor
                    }}
                  >
                    <span>{div.width}px × {div.height}px</span>
                  </div>
                  <button 
                    onClick={() => this.handleDeleteDiv(div.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const table1 = ["1", "2", "3", "4"];
    const table2 = ["lyna", "noor", "aya", "rania", "sara"];
    const table3 = ["react", "c++", "html", "css"];
    
    return (
      <div className="App">
        <h1>React Exercises - Part 1</h1>
        
        <h2>Exercise 1.1 - Basic Click Button</h2>
        <ClickButton />
        
        <h2>Exercise 1.2 - Toggle Button</h2>
        <ToggleButton />
        
        <h2>Exercise 1.3 - Multiple Buttons</h2>
        <ButtonDisplay />
        
        <h2>Exercise 1.4 - Counter</h2>
        <Counter />
        
        <hr />
        
        <h1>React Exercises - Part 2</h1>
        
        <h2>Exercise 2.1 - Display Table as List</h2>
        <DisplayTab1 />
        
        <h2>Exercise 2.2 - Display with Element Numbers</h2>
        <DisplayTab2 />
        
        <h2>Exercise 2.3 - Click to Remove Elements</h2>
        <DisplayTab3 />
        
        <h2>Exercise 2.4 - Parameterized Component</h2>
        <DisplayTab4 tab={table3} />
        
        <h2>Exercise 2.5 - Multiple Tables</h2>
        <DisplayTab5 tab={table1} title="Numbers" />
        <DisplayTab5 tab={table2} title="Names" />
        
        <hr />
        
        <h1>React Exercises - Part 3</h1>
        
        <h2>Exercise 3.1-3.3 - Authentication Form</h2>
        <AuthForm />
        
        <hr />
        
        <h1>React Exercises - Part 4</h1>
        
        <h2>Exercise 4 - Div Creator Form</h2>
        <DivCreator />
      </div>
    );
  }
}

export default App;