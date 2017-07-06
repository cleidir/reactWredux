import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

//API youtube key: AIzaSyBUZQEWjM9WI6GgnryubEHbR6nhdeR0OX0

const API_KEY = 'AIzaSyBUZQEWjM9WI6GgnryubEHbR6nhdeR0OX0';

// Creat a new component. This component should produce some HTML

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

//Take this component's generated HTML and put it on the page (in the DOM)

ReactDom.render(<App />, document.querySelector('.container'));