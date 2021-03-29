import Meta from '../components/Meta'
import ArticleList from '../components/ArticleList'


export default function Home({articles}) {
  return (
    <>
       <Meta title="ListOfTelefons"/>
    <div >
       <ArticleList articles={articles}/>
    </div>
    </>
  )
}


export const getStaticProps = async () => {
   const res = await fetch('http://localhost:3000/api/articles')
   const articles = await res.json()

   return {
     props: {
       articles
     }
   }
}