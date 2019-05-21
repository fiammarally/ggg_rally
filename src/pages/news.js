import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout/layout"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"

import Card from "../components/card/card"
import { checkPropTypes } from "prop-types";

const blog = ({ data }) => {
  //! query all graphQL nodes => make cards => render cards
  const nodes = [];
  const cards = [];

  data.allSitePage.edges.forEach((e) => {
    const context = e.node.context;
    const data = context ? context.data : null
    if (data) {
      nodes.push(e.node);
    }
  });

  nodes.map((node, index) => {
    return (
      <Card path={node.path} title={node.context.titolo} key={index} />
    );
  });

  if (typeof window !== 'undefined') {
    window.document.tile = 'News | Gianluca Ferretti'
  }

  return (
    <Layout>
      <div className="container news">
        <Navbar />
        <h1>News</h1>
        <div className="row">
          {nodes.map((node, index) => {
            return (
              <Card
                path={node.path}
                title={node.context.titolo}
                num={index}
                key={index}
                img={node.context.mainImage}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default blog;

export const pageQuery = graphql`
  query {
    allSitePage {
      edges {
        node {
          id
          path
          context {
            slug
            data
            titolo
            mainImage {
              fields {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`