const Services = () => {
    const services = [
        {
            id: 1,
            src: "/src/assets/Service-Img1.jpg",
            alt: 'img',
            text: "Launch in minute with templates"
        },
        {
            id: 2,
            src: "/src/assets/Service-Img2.jpg",
            alt: 'img',
            text: "No design or coding required"
        },
        {
            id: 3,
            src: "/src/assets/Service-Img3.jpg",
            alt: 'img',
            text: "Built-in analytics and lead capture"
        },
        {
            id: 4,
            src: "/src/assets/Service-Img4.jpg",
            alt: 'img',
            text: "Trusted by creatives & entrepreneurs"
        },
    ]

    return (
        <section className='services_container'>
            {services.map(service => (
                <div key={service.id} className="service_card">
                    <img src={service.src} alt={service.alt} />
                    <p> {service.text} </p>
                </div>
            ))}
        </section>
    )
};

export default Services;