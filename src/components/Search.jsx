var Search = (props) => {

  var handleSearch = _.debounce(function(event) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: $('.form-control').val(),
      max: 5
    };
    props.searchVideos(options);
  }, 500);


  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={handleSearch}/>
      <button className="btn hidden-sm-down" onClick={handleSearch}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
