export default function Word({ word , mainWord}) {

    return (
        <div className='bg-slate-50 p-2 flex justify-center w-64 mx-auto'>
            {word.split("").map((item, i) => (
            <span key={i} 
            className={`p-2 border m-1 flex justify-center items-center w-10 h-10 rounded-lg ${item === mainWord[i] ? "bg-green-400" : ""} ${mainWord.includes(item) ? "text-blue-400" : ""}`}>
                {item}
            </span>))}
        </div>
    )
}