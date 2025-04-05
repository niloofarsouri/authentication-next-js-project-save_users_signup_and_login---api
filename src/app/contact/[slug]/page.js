




export default async function ContactRoute({ params }) {

    const { slug } = (await params)


    return <h1>hi from : {slug}</h1>
}