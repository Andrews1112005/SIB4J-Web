export default function CardDetail({name, description}: {name: string, description: string}){
    return(  
        <button type="button" className="bg-white w-fit p-4 flex flex-col justify-between border border-gray-300 focus:bg-blue-50 focus:border-b-4 focus:border-b-blue-500 focus:outline-none transition-all">
            <h2 className="text-xs text-gray-500">{name}</h2>
            <p className="text-lg font-bold"> {description}</p>
        </button>   
)
}