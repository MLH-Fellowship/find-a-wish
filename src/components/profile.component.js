import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
/*import '../profile.css';*/
const jumb_styles = {
    backgroundImage: 'URL("https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-028-plum-plate.png")',
    backgroundSize: 'cover',
};

//Temporarily store data here
const PostsData = [
    {
        "type": "Dog Shelter",
        "organization": "Helen Woodward Animal Center",
        "poster": "Jane Doe",
        "contactEmail": "janedoe@woodward.com",
        "contactNumber": "858-645-6562",
        "website": "animalcenter.org",
        "items": "dog food, blankets",
        "image": "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
        "type": "Youth Education",
        "organization": "Children's Discovery Museum in San Jose",
        "poster": "Daniel Enrique",
        "contactEmail": "daniel@discoverymuseum.com",
        "contactNumber": "134-845-8457",
        "website": "discoverymuseum.com",
        "items": "donations",
        "image": "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80"
    },
]
class Profile extends React.Component { 
  // Start Profiles Page
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
    render() {
        return (
        <Jumbotron fluid style={jumb_styles} className="vh-100">    
          { /*<header className="profile-header">Organizations</header> */ }
            <h1 className="display-3 font-weight-bolder text-light text-center mt-0">Organizations</h1>
            <Row className="app-card-list flex-row px-4" id="app-card-list">
              {
                Object
                    .keys(this.state.posts)
                    .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
              }
            </Row>
        </Jumbotron>)
    }
}

   
/*class Title extends React.Component {
    render() {
        return <section className="app-title">
            <div className="app-title-content">
              <h1>Latest News</h1>
              <p>Covering March & April 2015</p>
              <a className="designer-link" href="https://dribbble.com/shots/1978243-Latest-News" target="_blank">Design from <i className="fa fa-dribbble"></i></a>
            </div>
        </section>
    }
} */  

    


 /*class Button extends React.Component {
    render() {
      return (
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
      )
    }
  } */ 
  
  
  class CardHeader extends React.Component {
    render() {
      const { image, type } = this.props;
      var style = { 
          background: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(' + image + ')',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0 50%",
      };
      return (
        <header style={style} className="card-header text-light">
          <h4 className="card-header--title">{type}</h4>
        </header>
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
           { /*<p className="date">March 20 2015</p> */ }
          
          <h2>{this.props.organization}</h2>
          <br></br>
          <h4>Poster: {this.props.poster}</h4>
          <p>Contact Info: <br></br>Number: {this.props.contactNumber} <br></br>Email: {this.props.contactEmail}</p>
          <br></br>
          <p className="body-content">Items Needed: {this.props.items}</p>
          
          { /*<Button /> */ }
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card col-lg-4 px-0 mx-4 my-4">
          <CardHeader type={this.props.details.type} image={this.props.details.image}/>
          <CardBody organization={this.props.details.organization} website={this.props.details.website} poster={this.props.details.poster} 
          contactNumber={this.props.details.contactNumber} contactEmail={this.props.details.contactEmail} items={this.props.details.items}/>
        </article>
      )
    }
  }

export default Profile;

