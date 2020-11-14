// Create varibles and import them from react libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

// create react components area for event handling
const App = () => {
	return (
		<div className="ui container comments">
			{/* // show a component inside another  */}
			<CommentDetail />
		</div>
	);
};

// Displaying the react on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
