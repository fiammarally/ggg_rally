import React from "react"

import style from "./css/sponsor.module.css"
import Layout from "../components/layout/layout"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"

const contentful = require('contentful');

class foto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: false,
    }
  }
  componentDidMount() {
    const client = contentful.createClient({
      space: '4hdczd41xjc6',
      accessToken: 'c00c5d9432352d25f5061332e3777f2932d20f1244fd89a0940a1ec15422b75c'
    });
    const response = client.getEntries({
      content_type: 'gallery'
    })
      .then((response) => response.items)
      .then((obj) => {
        const temp = [];
        Object.keys(obj).map(e => {
          const sponsor = {};
          sponsor.link = obj[e].fields.link;
          sponsor.name = obj[e].fields.name;
          sponsor.image = obj[e].fields.image.fields.file.url;
          temp.push(sponsor);
        });
        return temp;
      })
      .then((images) => this.setState({images: images}))
      .catch(console.error);
  }
  render() {
    const { images } = this.state;
    return (
      <Layout>
        <div className="wrapper">
          <div className={`container ${style.height100}`}>
            <Navbar />
            <h1><span className={`${style.highlight}`}>Sponsor</span></h1>
            <div className="row">
              { images ? Object.keys(images).map((e, i) => {
                return (
                  <div className={`col ${style.sponsor}`} key={i}>
                    <a href={images[e].link} target="_blank">
                      <img src={images[e].image} alt=""/>
                      <h2>{images[e].name}</h2>
                    </a>
                  </div>
                )
              }) : null }
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }
};

export default foto;
