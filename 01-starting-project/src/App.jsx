// this bwelow line indicates that the image can be import and used as an object in place of src
import reactImg from './assets/react-core-concepts.png'
import componentsimg from './assets/components.png'
import {CORE_CONCEPTS} from './data.js'

const reactDescriptions = ['Fundamental', 'Crucial','Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
      <img src={reactImg} alt="Stylized atom" />
    </header>
  );
}
// the first parameter that is passed to every component is the props object that contains all the props passed to the component
// function CoreConcept(props) {

// this props can also be destructured but should be assigned with the same name as in the object which is present in data.js
// and then they can be use with there name assigned in destructring, hence reducing the code size.
function CoreConcept ({image, title, description}) {
  return (
    <>
      <li>
        {/* <h2>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.image} alt={props.title} /> */}
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt={title} />
      </li>
    </>
  );
}


function App() {

  const rest = {...CORE_CONCEPTS[0]};
  console.log("rest:",rest)
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* using rest operator to destructure the object and pass the remaining properties to the CoreConcept component, the above destruring is not related to below use of rest operator*/}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
