// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'
import Main from './Main.js'
import Aside from './Aside.js'
import Header from './Header.js'
import Footer from './Footer.js'
// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: '',
      },
      formInputs:{
        title:null,
        rating:null,
        year:null,
        image:null,
        recommend:null,
        id:null
      }
    }
  }


  handleView = (view, postData) => {
      // declare an empty variable
      let pageTitle = ''
      let formInputs = {
        title:'',
        rating:'',
        year: '',
        image:'',
        recommend:'',
        id:null
      }
      // decide the pageTitle based on the view
      switch (view) {
        case 'home':
          pageTitle = ''
          break
        case 'addPost':
          pageTitle = ''
          break
        case 'editPost':
<<<<<<< HEAD
          pageTitle = ''
=======
          pageTitle = 'Change Some Facts!'
>>>>>>> 6f0578c64df2cc35573e097330116621775c7e43
          formInputs = {
            title: postData.title,
            rating: postData.rating,
            year: postData.year,
            image: postData.image,
            recommend: postData.recommend,
            id: postData.id
          }
          break
        default:
          break
      }
      // update the state
      this.setState({
        view: {
          page: view,
          pageTitle: pageTitle
        },
        formInputs: formInputs
      })
    }
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <div className="large-container">
        <Header/>
          <Aside handleView={this.handleView}/>
        <div className="main-container">

          <Main
          view={this.state.view}
          handleView={this.handleView}
          formInputs={this.state.formInputs}
            />
        </div>
        <Footer/>
      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default App
