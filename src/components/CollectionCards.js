import React from 'react'

export const CollectionCards = () => {
  return (
    <div><section className="collection_cards">
                <div className="card">
                    <img src="assets/images/woman-user-circle-icon.webp" alt=""/>
                    <h3>10,000+ unique characters</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliquat enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi</p>
                    <div className="collection_cards_link"><a href="#learn more">Learn
                            More</a></div>

                </div>
                <div className="card">
            <img src="assets/images/man-user-circle-icon.webp" alt=""/>
                    <h3>Create yourself for the metaverse</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliquat enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi</p>
                    <div className="collection_cards_link"><a href="#more">Learn
                            More</a></div>
                </div>
            </section></div>
  )
}
export default CollectionCards;
