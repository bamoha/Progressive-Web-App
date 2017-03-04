"use strict";

import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('ssestore') @observer
export default class ServerSentEvents extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //start listening for events
        this.props.ssestore.listenForEvents();
    }

    render() {
        return (
          <div className="row">
    		<div className="column">
              <h1>Server sent events</h1>
              <div className="desc">
                  <p>This has nothing to do with progressive web apps or service workers.
                  It's just for fun</p>
              </div>

              <strong>Data sent from the server:</strong>
              <ul>
                {this.props.ssestore.items.map((obj, i) => {
                  return <li className="msg desc" key={obj.id}>{obj.msg}</li>;
                })}
              </ul>
            </div>
          </div>
      );
    }
}
