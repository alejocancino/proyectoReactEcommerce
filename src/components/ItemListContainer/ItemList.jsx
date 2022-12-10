import Item from './Item'

const ItemList = (props) => {

  return (
    <>
    {props.products.map( producto => (
        <Item 
        id = {producto.id}
        key = {producto.id}
        price={producto.price} 
        title={producto.title} 
        image={producto.image}>
        </Item>
    ))}
    </>
  )
}

export default ItemList