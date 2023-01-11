import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { StaticImage } from "gatsby-plugin-image"
import Image from "gatsby-image";
const query = graphql`
{
      file(relativePath: {eq: "brain-stock-photo.png"}) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
}
`
const Hero = () => {
    const {
        file: {
            childImageSharp: {fluid},
        },
    } = useStaticQuery(query)
    return (
        <header className={"hero"}>
            <div className={"section-center hero-center"}>
                <article className={"hero-info"}>
                <div>
                    <div className="underline"></div>
                    <h1>Bhuwan Dutt</h1>
                    <h4>Machine Learning Developer</h4>
                    <Link to="/contact" className="btn">
                        Connect with Me
                    </Link>
                    <SocialLinks/>
                </div>
                </article>
                <Image fluid = {fluid} className={"hero-img"} />
                {/*<img src={Image} alt="Pytorch Image" className={"hero-img"}/>*/}
            </div>
        </header>
    )
}
export default Hero