import cardapio from './Itens.json'

export default function Itens(){
    return(
        <div>
            {cardapio.map(item =>(
                <div>{item.title}</div>
            ))}
        </div>
    )
}