const Processes = () => {
    const stages = [{
        title: "How Brandwave Works",
        stage: [
            {
                img: "/src/assets/illustration _Problem Solving_.png",
                text: "Sign Up"
            },
            {
                img: "/src/assets/illustration _SEO_.png",
                text: "Choose a Template"
            },
            {
                img: "/src/assets/illustration _Digital content_.png",
                text: "Add your Content"
            },
            {
                img: "/src/assets/illustration _Share.png",
                text: "Publish and Share"
            } 
        ]
    }
    ]

  return (
      <section className="processes_container">
          {stages.map((stage, index) => (
              <div key={index}>
                  <h2>{stage.title}</h2>
                  <div className="processes_cards">
                      {stage.stage.map((item, index) => (
                          <div key={index} className="processes_card">
                              <img src={item.img} alt='Images' />
                              <p>{item.text}</p>
                          </div>
                      ))}
                  </div>
              </div>
          ))}
      </section>
  )
}

export default Processes;