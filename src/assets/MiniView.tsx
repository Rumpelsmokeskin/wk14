

export default function MiniView({sauna}: { sauna: {order: number, image: string}} ){
return(
    <>
    <span>{ sauna.order }</span>
    <div><img src={ sauna.image } style={{width: "150px"}} /></div>
    </>
)
}