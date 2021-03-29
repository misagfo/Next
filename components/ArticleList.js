import ArticleItem from '../components/ArticleItem'
import styles from '../styles/ArticleList.module.css'


export default function ArticleList({articles}) {
    return (
        <div className={styles.list}>
           {articles.map(articles => 
              <ArticleItem key={articles.id} article={articles}/>
            )}
        </div>
    )
}
