import React from "react"

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: [],
      userInput: "",
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.movies !== this.props.movies) {
      this.setState({ rows: this.props.movies })
    }
  }

  onChange = e => {
    const userInput = e.currentTarget.value
    this.setState({
      userInput: e.currentTarget.value,
    })
    this.props.fetchApiData(userInput)
  }

  deleteSearch(index, e) {
    const history = Object.assign([], this.state.history)
    history.splice(index, 1)
    this.setState({ history: history })
  }

  render() {
    const {
      onChange,
      state: { rows, userInput },
    } = this
    let moviesListComponent
    if (rows) {
      moviesListComponent = (
        <div className="grid">
          {rows.map((movie, index) => {
            movie.poster_src =
              "https://image.tmdb.org/t/p/w185/" + movie.poster_path
            return (
              <>
                <div className="card" key={index}>
                  <figure>
                    <img alt={movie.title} src={movie.poster_src} />
                  </figure>
                  <h2>{movie.title}</h2>
                  <p>{movie.overview}</p>
                </div>
              </>
            )
          })}
        </div>
      )
    } else {
      moviesListComponent = (
        <>
          <div className="notification-popup">
            <h2>No movies found. Try again!</h2>
          </div>
        </>
      )
    }

    return (
      <>
        <form type="submit">
          <div className="input-container">
            <input
              className="input-box"
              type="text"
              onChange={onChange}
              value={userInput}
              placeholder="Search for a movie..."
            />
          </div>
        </form>
        {moviesListComponent}
      </>
    )
  }
}
