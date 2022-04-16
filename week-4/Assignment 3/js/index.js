const FloatingNav = (props) => {
  return (
    <nav className="nav-hidden" style={ {display: props.display ? 'flex' : 'none'} }>
      <div className="items">
        <a href="#"> Item 1 </a>
        <a href="#"> Item 2 </a>
        <a href="#"> Item 3 </a>
        <a href="#"> Item 4 </a>
      </div>
      <div className="X" onClick={props.closeMenu}> ✖ </div>
    </nav>
  )
}

const Header = (props) => {
  return (
    <header>
      <h2> Website Title/Logo </h2>
      <nav className="nav-icon" onClick={props.openMenu}><img src='./img/icon.png' alt="menu trigger icon"/></nav>
      <nav className="nav-menu">
        <a href="#"> Item 1 </a>
        <a href="#"> Item 2 </a>
        <a href="#"> Item 3 </a>
        <a href="#"> Item 4 </a>
      </nav>
    </header>
  )
}

class Banner extends React.Component {

  state = {
    flip: false,
    content: 'Welcome Message'
  };

  flipTheBanner = () => {
    this.setState( prevState => {
      if (!prevState.flip) {
        return {
          flip: true,
          content: 'Have a Good Time!'
        }
      } else {
        return {
          flip: false,
          content: 'Welcome Message'
        }
      }
    });
  }

  render() {
    return (
      <div className="banner" onClick={this.flipTheBanner}>
        <h1> {this.state.content} </h1>
      </div>
    )
  }
}

class Main extends React.Component {

  state = {
    show: false
  };

  handleBoxDisplay = () => {
    this.setState( prevState => {
        if (!prevState.show) {
          return {
            show: true
          }
        } else {
          return {
            show: false
          }
        }
    });
  }

  render() {
    return (
      <main>
        <h2> Section Title </h2>
        {/* content box */}
        <div className="container">
          <div className="content-box"><a> Content Box 1 </a></div>
          <div className="content-box"><a> Content Box 2 </a></div>
          <div className="content-box"><a> Content Box 3 </a></div>
          <div className="content-box"><a> Content Box 4 </a></div>
        </div>

        <div className="button" onClick={this.handleBoxDisplay}>
          <div> Call to Action </div>
        </div>
        {/* style={ {display: {this.state.display}} } */}
        
        <div id="hidden-box" className="container" style={ {display: this.state.show ? 'flex' : 'none'} }>
          <div className="content-box"><a> Content Box 5 </a></div>
          <div className="content-box"><a> Content Box 6 </a></div>
          <div className="content-box"><a> Content Box 7 </a></div>
          <div className="content-box"><a> Content Box 8 </a></div>
        </div>

      </main>
  )};
}

class App extends React.Component {

  state = {
    menuDisplay: false,
  };

  menuOpenBtn = () => {
    this.setState( () => {
      return {
        menuDisplay: true
      }
    });
  };

  menuCloseBtn = () => {
    this.setState( () => {
      return {
        menuDisplay: false
      }
    });
  };

  render() {
    return (
      <div className="structure">
        <FloatingNav display={this.state.menuDisplay} closeMenu={this.menuCloseBtn}/>
        <Header openMenu={this.menuOpenBtn}/>
        <Banner />
        <Main />
      </div>
    );
  };
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);