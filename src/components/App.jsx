class App extends React.Component {
  constructor() {
    super();
    this.results = searchYouTube();

    console.log(this.results);


    this.state = {
      title: this.results[0].snippet.title,
      description: this.results[0].snippet.description,
      id: this.results[0].id.videoId,
      videos: this.results
    };


    
  }


  handleClick(event) {

    this.setState({
      
      title: event.target.textContent,
      description: event.target.parentNode.childNodes[1].textContent,
      id: event.target.getAttribute('id')
    });
  }

  render() {
    

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer title={this.state.title} description={this.state.description} id={this.state.id}/>
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
