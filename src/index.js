// Create varibles and import them from react libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create react components area for event handling
const App = () => {
	return (
		<div className="ui container comments">
			<div className="comment">
				<a href="/" className="avatar">
					<img alt="avatar" />
				</a>
				<div className="content">
					<a href="/" className="author">
						Sam
					</a>
					<div className="metadata">
						<span className="date">Today at 6:00PM</span>
					</div>
					<div className="text">Nice blog post!</div>
				</div>
			</div>
		</div>
	);
};

// Displaying the react on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
