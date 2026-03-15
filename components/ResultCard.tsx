
export default function ResultCard({title,value}:{title:string,value:any}){
return(
<div className="card">
<h3>{title}</h3>
<p>{value}</p>
</div>
)
}
