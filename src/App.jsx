import React from 'react';
import {
  Navbar
} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

export default class App extends React.Component {
  render() {
    return (
      <DocumentTitle title="CHANGE_TITLE_PLZ">
        <div>
          <Navbar>
          </Navbar>
        </div>
      </DocumentTitle>
    );
  }
}
