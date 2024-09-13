import redChevrolet from "./assets/red-chevrolet.jfif";
import Card from './components/Card'


function App() {
  return (
    <div>
      <Card
        source={redChevrolet}
        title="Lizard"
        des="
        Chevrolet is an iconic American car brand known
        for its reliable, dependable, and affordable vehicles.
        Founded in 1911.
        Chevy has become one of the most recognizable car brands in the world
        "
        btn="SHARE"
        btn2="LEARN MORE"
      />
    </div>
  );
}

export default App;
