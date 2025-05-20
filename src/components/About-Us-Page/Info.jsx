const Info = () => {
    const information = [
        {
            title: "About Brandwave",
            description: "Brandwave is a no-code platform that helps entrepreneurs and small businesses build a polished online brand presence. We simplify branding by offering easy templates, intuitive tools, and analytics—no tech skills required. Our mission is to empower anyone to launch and manage their brand story with confidence and clarity.",
            img: "/src/assets/About-img1.jpg"
        },
        {
            title: "What We Do",
            description: "We provide an all-in-one solution for creating branded showcase pages in minutes. Users can upload media, customize layouts, and publish their story effortlessly. With built-in forms, analytics, and social integration, Brandwave removes the need for designers or developers, helping businesses present, promote, and grow without technical barriers.",
            img: "/src/assets/About-img2.jpg"
        },
        {
            title: "What We Aim To Achieve",
            description: "Our goal is to become the go-to platform for brand storytelling and digital presence. In the next five years, we aim to empower millions globally—regardless of skill or budget—to connect with their audiences, share their passion, and thrive through beautifully simple, data-powered branding tools and a supportive creative community.",
            img: "/src/assets/About-img3.jpg"
        }
    ]
  return (
    <div className="info_container">
          {information.map((info, index) => (
              <div key={index} className="info_card">
                  <div className="info_text">
                    <h2>{info.title}</h2>
                    <p> {info.description} </p>
                  </div>
                  <img src={info.img} alt="images" />
              </div>
          ))}
    </div>
  )
}

export default Info;