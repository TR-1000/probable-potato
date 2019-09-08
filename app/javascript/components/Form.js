// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Form extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor() {
    super()
    this.state = {
      url: {
        baseURL: 'http://www.omdbapi.com/?apikey=cb44598d&t=',
        movieTitle: '',
        searchURL: '',
      },
      movie: {
        title: '',
        rating: '',
        year: '',
        image: '',
        recommend: '',
        id: null
      }
    }
  }


  // ==============
  // HANDLERS
  // ==============
  // handles form change
  handleChangeMovie = (e) => {
    const {movie} = {...this.state};
    const currentState = movie;
    const { id, value} = e.target;
    currentState[id] = value;
    this.setState({movie: currentState});
  }

  handleChangeURL = (e) => {
    const {url} = {...this.state};
    const currentState = url;
    const { id, value} = e.target;
    currentState[id] = value;
    this.setState({url: currentState});
  }

  // handles submit
  handleSubmit = (e) => {
    // prevent default form submit action
    e.preventDefault()
    // if the view is currently addPost
    if(this.props.view.page === 'addPost') {
      // create a post
      this.props.handleCreate(this.state.movie)
    } else if(this.props.view.page === 'editPost') { // else if the view is editPost
      // update the post
      this.props.handleUpdate(this.state.movie)
    }
  }

  getOMDB = (e) => {
    e.preventDefault()
    this.setState({
      url: {searchURL: this.state.url.baseURL + this.state.url.movieTitle}
    }, () => {
    fetch(this.state.url.searchURL)
      .then(data => {
        console.log(this.state.url.searchURL);
        console.log(data);
        return data.json()
      })
      .then(json => this.setState({
        movie: {
          title: json.Title,
          rating: json.Rated,
          year: json.Year,
          image: json.Poster
        }
      }), error =>
      console.log(error))
    })
  }

  componentDidMount() {
    this.setState({
      movie: {
        title: this.props.formInputs.title,
        rating: this.props.formInputs.rating,
        year: this.props.formInputs.year,
        image: this.props.formInputs.image,
        recommend: this.props.formInputs.recommend,
        id: this.props.formInputs.id
      }
    })
  }


  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <div className="inputs">
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Title" id="title" value={this.state.movie.title} onChange={this.handleChangeMovie}/>
        </label>
        <label>
          <input type="text" placeholder="Rating" id="rating" value={this.state.movie.rating} onChange={this.handleChangeMovie}/>
        </label>
        <label>
          <input type="text"  placeholder="Year" id="year" value={this.state.movie.year} onChange={this.handleChangeMovie}/>
        </label>
        <label>
        <input type="text"  placeholder="Poster" id="image" value={this.state.movie.image} onChange={this.handleChangeMovie}/>
      </label>
        <label>
          <input type="text" placeholder="Recommend" id="recommend" value={this.state.movie.recommend} onChange={this.handleChangeMovie}/>
        </label>
        <input type="submit" value="New Movie"/>
      </form>

      <form onSubmit={this.getOMDB}>

        <label htmlFor='movieTitle'>Get OMDB Data</label>
        <input
          id='movieTitle'
          type='text'
          value={this.state.url.movieTitle}
          onChange={this.handleChangeURL}
        />
        <input
          type='submit'
          value='Find Movie Info'
        />

      </form>

      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Form
