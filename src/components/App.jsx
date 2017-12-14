class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: this.props.videos,
      currentVideo: this.props.videos[0]
    };
    this.changeVideo = this.changeVideo.bind(this);
    this.searchVideos = this.searchVideos.bind(this);
  }
  
  changeVideo(index) {
    this.setState({currentVideo: this.state.videoList[index]});
  }
  
  searchVideos(options) {
    searchYouTube(options, function(data) {
      console.log('6', this);
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
            <VideoPlayer video={this.state.currentVideo} />
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
