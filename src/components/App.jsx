class App extends React.Component {
  constructor() {
    console.log(8);
    super();
    this.state = {
      videoList: [],
      currentVideo: {
        id: {
          videoId: ''
        },
        snippet: {
          title: '',
          description: '',
        }
      }
    };
    this.changeVideo = this.changeVideo.bind(this);
    this.searchVideos = this.searchVideos.bind(this);
  }

  componentDidMount() {
    this.searchVideos({
      key: window.YOUTUBE_API_KEY,
      query: 'hackreactor',
      max: 5
    });
  }
  
  changeVideo(index) {
    this.setState({currentVideo: this.state.videoList[index]});
  }
  
  searchVideos(options) {
    searchYouTube(options, function(data) {
      this.setState({
        videoList: data.items,
        currentVideo: data.items[0]
      });
    }.bind(this));
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchVideos={this.searchVideos} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer state={this.state} />
          </div>
          <div className="col-md-5">
            <VideoList state={this.state} changeVideo={this.changeVideo}/>
          </div>
        </div>
      </div>
    );
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//pass in window.exampleVideoData here
