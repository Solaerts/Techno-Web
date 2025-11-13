import Contact from "../components/Contact";

export default function ContactPage() {
    return(
        <>
        <h1 className = 'text-center text-3xl my-8'> Contact Page</h1>
        <Contact Name="Nicolas Willaerts" Email="willaertsnicolas@gmail.com" Phone="+32 496 77 20 12">
            <p className="mt-2">Feel free to reach out to me via email or phone for any inquiries or collaborations!</p>
        </Contact>
        </>
    )
}