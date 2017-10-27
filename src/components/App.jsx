class App extends React.Component {
  constructor() {
    super();
    this.results = searchYouTube({
      key: window.YOUTUBE_API_KEY, 
      query: 'hack reactor', 
      max: 5
    });



    this.state = {
      title: this.results[0].snippet.title,
      description: this.results[0].snippet.description,
      id: this.results[0].id.videoId,
      videos: this.results
    };

    this.search = _.debounce(this.search.bind(this), 500);
  }

  handleClick(event) {

    this.setState({
      
      title: event.target.textContent,
      description: event.target.parentNode.childNodes[1].textContent,
      id: event.target.getAttribute('id')
    });
  }

  handleEnter(event) {
    //if (event.keyCode === 13) {
    this.search(event.target.value);
    //}
  }

  handleSearch(event) {

    //whatevers in the text box
    var query = event.target.parentNode.childNodes[0].value;

    this.search(query);
    
  }

  search(query) {

    var search = searchYouTube({
      key: window.YOUTUBE_API_KEY, 
      query: query, 
      max: 10
    });

    this.setState({
      title: search[0].snippet.title,
      description: search[0].snippet.description,
      id: search[0].id.videoId,
      videos: search
    });  
  }

  render() {
    

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search pressEnter={this.handleEnter.bind(this)} searchHandler={this.handleSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer title={this.state.title} description={this.state.description} video={this.state.id}/>
          </div>
          <div className="col-md-5">
            <VideoList clickHandler={this.handleClick.bind(this)} videos={this.state.videos}/> 
          </div>
        </div>
      </div>
    );
  }

}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
