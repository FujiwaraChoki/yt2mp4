import React from "react";
import Link from 'next/link';
import Image from 'next/image'


function Card(props:cardComponent) {

  let slug = props.title.toLowerCase().replaceAll(" ","-")

  return (
    <article>

      <div className="image-container-outer">
        <Image
          width={724}
          height={324}
          className="image-container"
          src="https://picsum.photos/500/300?random=1"
          alt="Random images" />
      </div>

      <h6 className="heading-tag">{props.tag}</h6>
      
      <Link className={"text-decoration"} href={`/${slug}`}>

        <h2 className="heading-title">{props.title}</h2>

      </Link>

      <Link className={"text-decoration"} href={`/${slug}`}>

        <p className="heading-description"> {props.description} </p>

      </Link>

      <nav>

        <ul>

          <li className="link-list"> {props.author}</li>

          <li className="link-list">{props.date}</li>

        </ul>

      </nav>

    </article>
  );
}

Card.defaultProps = {};
  
interface cardComponent {
  tag: string;
  date: string;
  title: string;
  description: string;
  image:string;
  author: string;
}

export default Card;
