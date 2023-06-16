import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css' 

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum ipsam ipsa molestias? Modi repellat reprehenderit impedit maxime molestiae eligendi!
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image"/>
        </div>
        <div className="about__section-content">
          <h1> Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem dolorum omnis accusamus, modi vitae asperiores porro fuga, est architecto repellendus sapiente repudiandae? Magnam unde fugiat voluptates id accusamus mollitia!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni obcaecati dolores nisi est eos delectus fuga repudiandae. Libero, saepe ab. Eveniet veniam ipsam aut in consequuntur architecto alias facilis totam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus quasi minus iusto, voluptates amet quibusdam repellendus enim quia. Iusto fuga recusandae sint nam aperiam earum modi illum magnam cum dignissimos ipsum ex soluta accusamus reprehenderit molestias, aut dolorem consequatur!
          </p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1> Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem dolorum omnis accusamus, modi vitae asperiores porro fuga, est architecto repellendus sapiente repudiandae? Magnam unde fugiat voluptates id accusamus mollitia!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni obcaecati dolores nisi est eos delectus fuga repudiandae. Libero, saepe ab. Eveniet veniam ipsam aut in consequuntur architecto alias facilis totam.
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image"/>
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image"/>
        </div>
        <div className="about__section-content">
          <h1> Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem dolorum omnis accusamus, modi vitae asperiores porro fuga, est architecto repellendus sapiente repudiandae? Magnam unde fugiat voluptates id accusamus mollitia!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni obcaecati dolores nisi est eos delectus fuga repudiandae. Libero, saepe ab. Eveniet veniam ipsam aut in consequuntur architecto alias facilis totam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus quasi minus iusto, voluptates amet quibusdam repellendus enim quia. Iusto fuga recusandae sint nam aperiam earum modi illum magnam cum dignissimos ipsum ex soluta accusamus reprehenderit molestias, aut dolorem consequatur!
          </p>
        </div>
      </div>
    </section>

    </>
  )
}

export default About