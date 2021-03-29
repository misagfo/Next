import { articles } from '../../../data'

export default function data(req, res) {
   const id = req.query.id
   const result = articles.filter(article => article.id === id)

   if(result.length > 0) {
       res.status(200).json(result[0]) 
   } else {
       res.status(404).json({ mes: 'Article not found'})
   }
}
