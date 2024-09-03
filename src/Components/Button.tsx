
interface Propin{
    label : string
}

export function Button(props:Propin){

    return<div className="p-2 bg-white bg-opacity-10 rounded-xl text-lg text-white mx-2 hover:bg-slate-600 transition ease-in-out duration-200 ">
        <button>{props.label}</button>
    </div>

}