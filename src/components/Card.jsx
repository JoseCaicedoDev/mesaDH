import './styles.css'
export const Card = ({ title, imgSrc, precio, key }) => {
  return (
    <div className="container" key={key}>
      <h2 className="title">{title}</h2>
      <img className="image" src={imgSrc} />
      <h3 className="description">{precio}</h3>
    </div>

  )
}
