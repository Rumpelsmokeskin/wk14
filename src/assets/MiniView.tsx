/*This is the mini card that goes into the side bar, it displays the order number in the array and the associated image*/

export default function MiniView({sauna}: { sauna: {order: number, image: string}} ){
return(
    <>
    <span>{ sauna.order }</span>
    <div><img src={ sauna.image } style={{width: "150px"}} /></div>
    </>
)
}