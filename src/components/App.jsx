class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: this.props.videos,
      currentVideo: this.props.videos[0]
    };
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search state={this.state}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} state={this.state} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} state={this.state} />
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
