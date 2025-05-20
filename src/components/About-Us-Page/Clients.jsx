const clientLogo = [
    '/src/assets/client1.png',
    '/src/assets/client2.png',
    '/src/assets/client3.png',
    '/src/assets/client4.png',
    '/src/assets/client5.png',
    '/src/assets/client6.png',
    '/src/assets/client7.png',
    '/src/assets/client8.png'
]

const Clients = () => {
    return (
        <section className="client_container">
            <div className="client_logos">
                {clientLogo.concat(clientLogo).map((client, index) => (
                    <div key={index} className="client_image">
                        <img src={client} alt="client" />
                    </div>
                ))}
            </div>
            
        </section>
    )
};

export default Clients;