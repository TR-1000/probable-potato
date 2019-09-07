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
      movie: '',
      title: '',
      rating: '',
      year: '',
      image: '',
      recommend: '',
      id: null,
      baseURL: 'http://www.omdbapi.com/?',
      apikey: 'apikey=' + 'cb44598d',
      query: '&t=',
      movieTitle: '',
      searchURL: ''
    }
  }

  getOMDB = (e) => {
    e.preventDefault()
    this.setState({
    searchURL: this.state.baseURL + this.state.apikey + this.state.query +  this.state.movieTitle
    }, () => {
    fetch(this.state.searchURL)
      .then(data => {
        console.log(this.state.searchURL);
        console.log(data);
        return data.json()
      })
      .then(json => this.setState(
        {
          movieTitle: '',
          title: json.Title,
          rating: json.Rated,
          year: json.Year,
          image: json.Poster
        }
      ), error =>
      console.log(error))
    })
  }

  // ==============
  // HANDLERS
  // ==============
  // handles form change
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  // handles submit
  handleSubmit = (e) => {
    // prevent default form submit action
    e.preventDefault()
    // if the view is currently addPost
    if(this.props.view.page === 'addPost') {
      // create a post
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editPost') { // else if the view is editPost
      // update the post
      this.props.handleUpdate(this.state)
    }
  }

  componentDidMount() {
    this.setState({
      title: this.props.formInputs.title,
      rating: this.props.formInputs.rating,
      year: this.props.formInputs.year,
      image: this.props.formInputs.image,
      recommend: this.props.formInputs.recommend,
      id: this.props.formInputs.id
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
          <input type="text" placeholder="Title" id="title" value={this.state.title} onChange={this.handleChange}/>
        </label>
        <label>
          <input type="text" placeholder="Rating" id="rating" value={this.state.rating} onChange={this.handleChange}/>
        </label>
        <label>
          <input type="text"  placeholder="Year" id="year" value={this.state.year} onChange={this.handleChange}/>
        </label>
        <label>
        <input type="text"  placeholder="Poster" id="image" value={this.state.image} onChange={this.handleChange}/>
        </label>
        <label>
          <input type="text" placeholder="Recommend" id="recommend" value={this.state.recommend} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="New Movie"/>
      </form>

      <form onSubmit={this.getOMDB}>

          <label htmlFor='movieTitle'>Get OMDB Data</label>
          <input
            id='movieTitle'
            type='text'
            value={this.state.movieTitle}
            onChange={this.handleChange}
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
