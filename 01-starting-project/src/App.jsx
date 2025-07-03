import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx'
import { CORE_CONCEPTS } from './data.js'
import TabButton from './components/TabButton.jsx';


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
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcepts 
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcepts key={index} {...concept} />
            ))}

            {/* <CoreConcepts title="yash" image="muskan" description="qwerty"/> */}
          </ul>
        </section>
            <section id="examples">
              <h2>
                  Examples
              </h2>
              <TabButton >Components</TabButton>
              <TabButton label="Components" />
            </section>

      </main>
    </div>
  );
}

export default App;
