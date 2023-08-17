import React from 'react';
import data from 'data/posts';
import dayjs from 'dayjs';


function Read({ post }: postComponent) {

  return (
    <div className='container'>

      <hgroup className='readPost'>
        <h1>{post.title}</h1>
        <p className='paragraf-description'>{post.description}</p>
      </hgroup>
      <nav>
        <ul>
          <li className='link-list'>{post.author}</li>
          <li className='link-list'>
            {dayjs(post.date).format('DD MMMM, YYYY')}
          </li>
        </ul>
      </nav>
      <div id='typography' className='article-card'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo orci, interdum at tellus quis, imperdiet rhoncus odio. In urna diam, rhoncus non hendrerit non, convallis sit amet elit. Integer semper odio a iaculis congue. Donec sed libero non elit finibus ullamcorper. Nam elementum a diam vitae tincidunt.
        </p>
        <p>
          Integer a erat ut urna commodo ultrices congue eget sem. Sed ac diam sed metus volutpat venenatis nec vitae justo. Suspendisse gravida, nunc id interdum ullamcorper, eros elit laoreet erat, in ullamcorper augue eros vitae turpis. Nam porttitor ante sed condimentum posuere.
        </p>
        <p>
          Fusce vehicula, massa ut iaculis posuere, dolor dolor dignissim elit, at euismod massa metus sed augue. Vivamus rutrum risus velit, id tempor augue mattis nec. Fusce enim lacus, eleifend at facilisis eget, gravida non neque. Sed sed lacus a turpis sodales cursus.
        </p>
        <p>
          Nullam et augue scelerisque, tempus nunc et, ultricies felis. Morbi congue orci et pretium luctus. Mauris lectus purus, venenatis et nisi a, elementum tincidunt dolor.
        </p>
        <blockquote>
          Maecenas vehicula metus tellus, vitae congue turpis hendrerit non.
          Nam at dui sit amet ipsum cursus ornare.
          <footer>
            <cite>- Phasellus eget lacinia</cite>
          </footer>
        </blockquote>
        <p>
          Nulla facilisi. Quisque nec eros ultrices, mollis est non, viverra felis. Cras neque urna, malesuada nec tortor quis, finibus dignissim massa. Aenean ullamcorper sit amet mi in hendrerit.
        </p>
        <p>
          Integer a erat ut urna commodo ultrices congue eget sem. Sed ac diam sed metus volutpat venenatis nec vitae justo. Suspendisse gravida, nunc id interdum ullamcorper, eros elit laoreet erat, in ullamcorper augue eros vitae turpis. Nam porttitor ante sed condimentum posuere.
        </p>
        <p>
          Fusce vehicula, massa ut iaculis posuere, dolor dolor dignissim elit, at euismod massa metus sed augue. Vivamus rutrum risus velit, id tempor augue mattis nec. Fusce enim lacus, eleifend at facilisis eget, gravida non neque. Sed sed lacus a turpis sodales cursus.
        </p>
      </div>
    </div>
  );

}

interface postComponent {
  post: {
    tag: string;
    date: string;
    title: string;
    description: string;
    image: string;
    author: string;
  }
}


export async function getStaticPaths() {

  const paths = data.map((item) => ({
    params: { slug: item.title.toLowerCase().replaceAll(" ", "-") },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context: { params: { slug: string; }; }) {

  const { params: { slug } } = context

  const post = data.filter((item) => item.title.toLowerCase().replaceAll(" ", "-") === slug)

  return {
    props: { post: post[0] },
  }
}

export default Read;