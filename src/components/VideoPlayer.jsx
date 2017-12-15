var VideoPlayer = (props) => {
  return ( 
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.state.currentVideo.id} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.state.currentVideo.snippet.title}</h3>
        <div class="video-detail-bar" id="dislikes">{Number(props.state.currentVideo.statistics.dislikeCount).toLocaleString()} dislikes</div>
        <div class="video-detail-bar" id="likes">{Number(props.state.currentVideo.statistics.likeCount).toLocaleString()} likes</div>
        <div class="video-detail-bar" id="views">{Number(props.state.currentVideo.statistics.viewCount).toLocaleString()} views</div>
        <div id="channel-title">{props.state.currentVideo.snippet.channelTitle}</div>
        <div id="date-published">Published on {moment(props.state.currentVideo.snippet.publishedAt).format('MMMM Do, YYYY')}</div>
        <div id="description-box">{props.state.currentVideo.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
