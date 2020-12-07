import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
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
        "image": "https://source.unsplash.com/user/erondu/600x400"
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
            <Row>
                <Col lg={1}></Col>
                <Col lg={3}>
                    <div className="app-card-list" id="app-card-list">
                        {
                            Object
                                .keys(this.state.posts)
                                .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
                        }
                    </div>
                </Col>
            </Row>
        </Jumbotron>)
    }
}

   
{ /*class Title extends React.Component {
    render() {
        return <section className="app-title">
            <div className="app-title-content">
              <h1>Latest News</h1>
              <p>Covering March & April 2015</p>
              <a className="designer-link" href="https://dribbble.com/shots/1978243-Latest-News" target="_blank">Design from <i className="fa fa-dribbble"></i></a>
            </div>
        </section>
    }
} */ } 

    


  { /*class Button extends React.Component {
    render() {
      return (
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
      )
    }
  } */ }
  
  
  class CardHeader extends React.Component {
    render() {
      const { image, type } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
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
        <article className="card">
          <CardHeader type={this.props.details.type} image={this.props.details.image}/>
          <CardBody organization={this.props.details.organization} website={this.props.details.website} poster={this.props.details.poster} 
          contactNumber={this.props.details.contactNumber} contactEmail={this.props.details.contactEmail} items={this.props.details.items}/>
        </article>
      )
    }
  }

export default Profile;

