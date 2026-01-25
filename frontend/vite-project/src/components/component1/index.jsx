


const Item =(props)=>{
     const {each} = props
     console.log(each)
    return(
        <div>
            <h1>{each.title}</h1>
        </div>
    )
} 
export default Item