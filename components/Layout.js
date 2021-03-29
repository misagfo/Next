import Meta from './Meta'
import styles from '../styles/Layout.module.css'


export default function Layout({children}) {
    return (
      <>
        <Meta />
        <div className={styles.container}>
            <div className={styles.main}>
              {children}
            </div>
        </div>
     </>
    )
}
