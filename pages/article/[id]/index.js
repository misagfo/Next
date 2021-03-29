import Link from 'next/link'
import Meta from '../../../components/Meta'
import styles from '../../../styles/ArticleList.module.css'

const article = ({articles}) => {
   return (
     <>
      <Meta title={articles.title} />
      
       <div className={styles.item}>
          <h2>{articles.title}</h2>
          <img className={styles.image} src={articles.image}/>
          <h3>{articles.description}</h3>
       </div>

       <Link href="/"><span className={styles.home}>Back to Home</span></Link>
       </>
   )
  
}


export async function getStaticProps(context) {
     const res = await fetch(`http://localhost:3000/api/articles/${context.params.id}`)
     const articles = await res.json()

     return {
         props: {
             articles
         }
     }
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/articles')
    const posts = await res.json()

    const paths = posts.map((post) => ({
      params: { id: post.id },
    }))
    
    return {
      paths,
      fallback: false
  }
}


 export default article