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
        'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg'
        //   'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
      },
      {
        name: 'PostgresSQL',
        img:
          'https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/postgres/logo.png',
      },
      {
        name: 'ExpressJS',
        img:
          'https://www.atatus.com/images/devicon/icon-express.svg',
      },
      {
        name: 'NPM',
        img:
          'https://eg2.gallerycdn.vsassets.io/extensions/eg2/vscode-npm-script/0.3.5/1530888240980/Microsoft.VisualStudio.Services.Icons.Default',
      },
      {
        name: 'Auth0',
        img:
          'https://avatars3.githubusercontent.com/u/2824157?s=200&v=4',
      },
      {
        name: 'Socket.io',
        img:
          'https://cdn.worldvectorlogo.com/logos/socket-io.svg',
      },
      {
        name: 'Gatsby',
        img:
            'https://camo.githubusercontent.com/5737b2ff68542b8a774c3321f5bbfcbce3cde441/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f3255315330473350304530593373324e343331442f6761747362792d312e6a70673f582d436c6f75644170702d56697369746f722d49643d343336343226763d6364633136346435'
        //   'data:image/png;base64,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',
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
            <p className='image_name'>{e.name}</p>
            <img className="image_icon" src={e.img} alt="name" />
          </div>
        </div>
      )
    })

    return <div className='image_container'>{map}</div>
  }
}
