
export function VideoCard(props:any){
    return <div className="pl-5 pt-5">
        <img src={props.thumbnail} className="h-80 w-100 rounded-md" alt="photo" />
        
        <div className="grid grid-cols-12">
            <div className="col-span-1">
                <img className="rounded-full h-20 w-20 ml-3 mt-2" src={props.channelimage} alt="photo" />
            </div>

            <div className="col-span-10 pl-1 pt-5">
                <div>
                    {props.title}
                </div>
                <div className="col-span-10 text-neutral-500">
                    {props.channelname}
                </div>
                <div className="col-span-10 text-neutral-500">
                {props.views} . {props.timestamp} ago
                </div>
            </div>
        </div>
    </div>
}  