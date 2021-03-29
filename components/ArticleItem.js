import Link from 'next/link'
import styles from '../styles/ArticleItem.module.css'



export default function ArticleItem({ article }) {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a>
              <div className={styles.active}>
                  <h2>{article.title}</h2>
                  <img className={styles.img} src={article.image} alt='Image'/>
              </div>
            </a>
        </Link>
   )
}

