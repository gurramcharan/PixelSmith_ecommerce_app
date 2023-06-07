import React from "react"
import "./LandingPage.css"
import {useNavigate} from "react-router-dom"
import {useContext} from "react"
import {ApiContext, FilterContext} from "../.."
import {ImGithub} from "react-icons/im"
import {FaTwitter} from "react-icons/fa"
import {GrLinkedin} from "react-icons/gr"
import {BiCopyright} from "react-icons/bi"
import {TbWorldWww} from "react-icons/tb"

export const LandingPage = () => {
    const navigate = useNavigate()
    const {productState} = useContext(ApiContext)
    const {categories} = productState
    const {handleCategoryClicked} = useContext(FilterContext)

    const handleCategoryClickedField = (name) => {
        handleCategoryClicked(name)
        setTimeout(() => {
            navigate("/products")
        }, 500)
    }
    return (
        <div>
            <div className="home-container">
                <div className="bg-img-container">
                    <div className="img-container">
                        <div className="img-details-container">
                            <h1 className="img-main-title">Welcome to PixelSmith,</h1>
                            <p className="img-caption">Discover a World of Stunning Displays - Explore Our Monitor Heaven!</p>
                            <button onClick={() => navigate("/products")} className="img-shopnow-btn">Shop Now</button>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>
            <div>
                <div className="category-heading">
                    <p>Featured Categories</p>
                </div>
                <div className="category-description">
                    <p>Embrace the Radiance: Discover, Delight, and Decide - Unlock the Perfect
                        Monitor for Your Journey!</p>
                </div>

                <div className="category-details-container">
                    {categories.map((item) => (
                        <div
                            className="category-details"
                            onClick={() => handleCategoryClickedField(item.categoryName)}>
                            <p className="category-details-heading">{item.categoryName}</p>
                            <p className="category-details-description">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="footer-container">
                    <div className="footer-sub-container">
                        <p className="footer-title">PixelSmith</p>
                        <p className="footer-description">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- An ecommerce app built with ReactJs and MirageJs. This app showcases the wide range of monitors which helps to unleash your way of achieving your best desktop setup.</p>
                        <p className="footer-description">Privacy Policy</p>
                        <p className="footer-description">Terms of Use</p>
                        <p className="footer-copyright"><BiCopyright className="copyright-icon" /> PixelSmith2023</p>
                    </div>
                    <div className="footer-links">
                        <p className="footer-links-connect">Connect</p>
                        <a href="https://github.com/gurramcharan" target="blank" className="connect-links"><ImGithub /> GitHub</a>
                        <a href="https://twitter.com/gurram_charan3" target="blank" className="connect-links"><FaTwitter /> Twitter</a>
                        <a href="https://www.linkedin.com/in/gurram-venkata-sai-siva-charan-974212221/" target="blank" className="connect-links"><GrLinkedin /> LinkedIn</a>
                        <a href="https://sivacharan.netlify.app/" target="blank" className="connect-links"><TbWorldWww /> PortFolio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}