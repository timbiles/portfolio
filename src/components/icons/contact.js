import React from 'react';
import {svg} from '../../utils/data/svg';

const arr = [
    {
      name: 'Github',
      url: 'https://github.com/timbiles',
      svg: svg.github,
    },
    {
      name: 'Email',
      url: 'mailto: timbilestimbiles@gmail.com',
      svg: svg.email,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/timbilestim/',
      svg: svg.linkedIn,
    },
  ]

  let map = arr.map((e, i) => {
   return (
     <div key={i} className="tooltip">
       <a href={e.url} target="blank">
         {e.svg}
       </a>
       <span className="tooltip_hidden">{e.name}</span>
     </div>
   )
 })
  
 const ContactIcons = (props) => {

    return <div className={props.type === 'contact' ? 'main_sub2 contacts_sub' : 'main_sub2'}>
        {map}
    </div>
 } 

  export default ContactIcons;