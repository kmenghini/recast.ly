class App extends React.Component {
  constructor() {
    console.log(7);
    super();
    this.state = {
      videoList: [],
      currentVideo: {
        id: '',
        snippet: {
          publishedAt: '',
          title: '',
          description: '',
          channelTitle: '',
        },
        statistics: {
          viewCount: '',
          likeCount: '',
          dislikeCount: '',
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
    searchYouTubeStats({
      key: window.YOUTUBE_API_KEY,
      id: this.state.videoList[index].id.videoId
    }, function(videoStats) {
      this.setState({
        currentVideo: videoStats.items[0]
      });
    }.bind(this));
  }
  
  searchVideos(options) {
    searchYouTube(options, function(data) {
      searchYouTubeStats({
        key: window.YOUTUBE_API_KEY,
        id: data.items[0].id.videoId
      }, function(videoStats) {
        this.setState({
          currentVideo: videoStats.items[0]
        });
      }.bind(this));
      this.setState({
        videoList: data.items
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
