import React from 'react'

export const Footer = () => {
  return (
    <div> <footer className="footer">
                <div className="footer_content">
                    <h2>Character</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione, dignissimos corporis, consequuntur possimus
                        esse sed temporibus totam nam delectus enim.</p>
                    <a href="#twitter"><i className="fa-brands fa-square-twitter"></i></a>

                    <i className="fa-brands fa-discord"></i>

                    <p>© 2023 Character. All rights reserved.</p>

                </div>
                <div className="footer_links">
                    <h3>site</h3>
                    <a href="#about">About</a>
                    <a href="#collection">Collection</a>
                    <a href="#roadmap">Roadmap</a>
                    <a href="#features">Features</a>
                </div>
                <div className="footer_links">
                    <h3>Company</h3>
                    <a href="#team">Team</a>
                    <a href="#press">Press</a>
                    <a href="#terms">Terms</a>
                    <a href="#limitations">Limitations</a>
                    <a href="#licenses">Licenses</a>
                </div>

            </footer>
       </div>
  )
}
export default Footer;