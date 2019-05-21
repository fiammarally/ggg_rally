import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"

import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import style from "./post.module.css"


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      data: null,
    }
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    const post = this.props.data.sitePage;
    const images = post.context.gallery ? Object.keys(post.context.gallery).map((e) => {
      const temp = {};
      temp.src = post.context.gallery[e].fields.file.url;
      temp.width = 4;
      temp.height = 3;
      return temp;
    }) : null;

    if (typeof window !== 'undefined') {
      window.document.title = post.context.titolo;
    }

    return (
      <Layout>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className={`${style.post}`}>
              <div className={`${style.content}`}>
                <h1 className={`${style.title}`}>{post.context.titolo}</h1>
                {(post.context.mainImage) ? (
                  <img className={`${style.mainImage}`} src={`https:${post.context.mainImage.fields.file.url}`} alt="" />
                ) : null}
                <div dangerouslySetInnerHTML={{ __html: post.context.data }} />
              </div>
            </div>
              {images ? (<div className={`container ${style.gallery}`}>
                <Gallery photos={images} onClick={this.openLightbox} margin={12} />
                <Lightbox images={images}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
                />
              </div>) : null}
          </div>
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default Post;

export const query = graphql`
  query($slug: String!) {
    sitePage(context: { slug: {eq: $slug} } ) {
      context {
        data
        titolo
        mainImage {
          fields {
            file {
              url
            }
          }
        }
        gallery {
          fields {
            file {
              url
            }
          }
        }
      }
    }
  }
`
