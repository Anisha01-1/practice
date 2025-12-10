export const Card = ({ randomData}) => {
    const {url, id, title} = randomData;
    return (
        <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={url}  alt={title || id}  className="w-full h-48 object-cover rounded-lg"/>
        </div>

        <div className="random-container">
          <div className="random__content">
            <a href={`/random/${id}`}>
              {/* <button className="view-btn">view</button> */}
            </a>
          </div>
        </div>
      </div>
    </li>
    )

}