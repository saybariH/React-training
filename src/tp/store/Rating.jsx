export default function Rating({count,rate}){

    return <>
    <span className="badge badge-pill bg-primary">{count} / {rate}</span>
    </>
}