export default function HelloWorld({lastName}){

    const age = 20
    return <h1>hello {lastName} {age>=18 ? 'adult' :  'Minor'} </h1>
}