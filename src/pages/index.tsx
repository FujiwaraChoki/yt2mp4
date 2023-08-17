import Card from 'components/Card';
import dayjs from 'dayjs';
import data from 'data/posts';

export default function Home({posts}:indexComponent ) {
  return (
    <main className="container">

      {
        posts.map( (item: indexPropsComponent) => <Card 
           
            key={item.id}

            title={item.title} 

            tag={item.tags[0]} 
            
            description={item.description} 

            author={item.author}

            date={ dayjs(item.date).format('DD MMMM, YYYY')}

            image={item.image}
          
          />)
      }
      
    </main>
  )
}

export async function getStaticProps() {

  return {
    props: { posts:data },
  }
}

interface indexComponent {
  posts : {
    [x: string]: any;
    tags: string;
    date: string;
    title: string;
    description: string;
    image: string;
    author: string;
  }
}

interface indexPropsComponent {
    id: string;
    tags: string;
    date: string;
    title: string;
    description: string;
    image: string;
    author: string;

}