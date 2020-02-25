import data from './data.json'
import _ from 'lodash'
export default (req, res) => {
    let reducedData = _.reduce(data, (acc, item) => {
        let filteredProducts = _.filter(item.products, (tmp) => {
           return tmp.name.search(new RegExp(req.query.query,"gi")) != -1
        })
        if(_.size(filteredProducts) != 0) {
            acc.push({
                ...item,
                products:filteredProducts
            })}
        return acc
    }, [])
    res.status(200).json(reducedData)
}