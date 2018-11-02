import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import yt from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAuOqtg5gzRE-YGkaYvShZLq2a2sJQNc9E';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        yt({
            key: API_KEY,
            term: 'surfboards'
        }, (videos) => {
            this.setState({ videos });
            // this.setState({ videos: videos });
        });
    }


    render() {
        return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.videos[0]}/>
            <VideoList videos={this.state.videos} />
        </div>
        );
    }
}

// take this comp gen HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container') );