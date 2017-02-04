import React from 'react'
import template from './modal.rt'

export default class Modal extends React.Component {
    hello() {
        console.log("hello");
    }
}

Modal.prototype.render = template;
