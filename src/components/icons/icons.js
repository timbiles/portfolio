import React, { Component } from 'react'

import './icons.css'

export default class Icon extends Component {
  render() {
    const icons = [
      {
        name: 'Javascript',
        img:
          'https://static.memrise.com/img/400sqf/from/uploads/course_photos/3146044000171223183557.png',
      },
      {
        name: 'React',
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      },
      {
        name: 'NodeJS',
        img:
          'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg',
        //   'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
      },
      {
        name: 'PostgresSQL',
        img:
          'https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/postgres/logo.png',
      },
      {
        name: 'ExpressJS',
        img: 'https://www.atatus.com/images/devicon/icon-express.svg',
      },
      {
        name: 'NPM',
        img:
          'https://eg2.gallerycdn.vsassets.io/extensions/eg2/vscode-npm-script/0.3.5/1530888240980/Microsoft.VisualStudio.Services.Icons.Default',
      },
      {
        name: 'Auth0',
        img: 'https://avatars3.githubusercontent.com/u/2824157?s=200&v=4',
      },
      {
        name: 'Socket.io',
        img: 'https://cdn.worldvectorlogo.com/logos/socket-io.svg',
      },
      {
        name: 'Gatsby',
        img:
          'https://camo.githubusercontent.com/5737b2ff68542b8a774c3321f5bbfcbce3cde441/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f3255315330473350304530593373324e343331442f6761747362792d312e6a70673f582d436c6f75644170702d56697369746f722d49643d343336343226763d6364633136346435',
      },
      {
        name: 'Stripe',
        img:
          'https://www.startupdelta.org/wp-content/uploads/2018/01/Stripe_Logo_revised_2016.svg.png',
      },
      {
        name: 'Nodemailer',
        img:
          'https://i2.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?fit=422%2C360&ssl=1',
      },
    ]

    const map = icons.map(e => {
      return (
        <div className="icon_container">
          <div className="image_front">
            <div className="image_name">
              <p>{e.name}</p>
            </div>
            <img className="image_icon" src={e.img} alt="name" />
          </div>
        </div>
      )
    })

    return <div className="image_container">{map}</div>
  }
}
