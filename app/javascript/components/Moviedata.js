import React from 'react'

class Moviedata extends React.Component {
  //Constructor
  constructor (props) {
    super(props)
      this.state = {
        baseURL: 'http://www.omdbapi.com/?apikey=cb44598d&t=',
        movieTitle: '',
        searchURL: '',
        title: '',
        rating: '',
        year: '',
        image: '',
        recommend: '',
        id: null
      }
  }

  getOMDB = (e) => {
    e.preventDefault()
    this.setState({
    searchURL: this.state.baseURL +  this.state.movieTitle
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

  //Render function
  render () {
    return (
      <div>
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

export default Moviedata
