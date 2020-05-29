import React from 'react';
import logo from './logo.svg';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import './App.css';

const GET_SHANNON = gql` {
  allArticles {
    edges {
      node {
        title
        tags
        image
        _meta{
          tags
        } 
      }
    }
  }
 }`

function App() {
  const { data, loading, error } = useQuery(GET_SHANNON);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  else {
    console.log(data)
    return (
    <div className="App">
      { data.allArticles.edges.map((edge, index) => {
          return <p key={index}>{ edge.node.title[0].text }</p>
        })
      }
    </div>
  );
  }
}

export default App;
