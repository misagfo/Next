import { articles } from '../../../data'

export default function data(req, res) {
   res.status(200).json(articles)
}
