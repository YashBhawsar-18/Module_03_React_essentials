

export default function CoreConcepts({ image, title, description }) {
// function CoreConcepts({...props}) {
  return (
    <>
      <li>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    </>
  );
}