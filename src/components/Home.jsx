import KupicaGrapes from "../assets/palinka-photos/kupica-grapes.webp";

const introduction =
  "Nestled in the heart of the Hungarian countryside, the Kalamári Pálinka Distillery has been crafting premium fruit spirits since 1987. Using handpicked local apricots, plums, and pears, the distillery combines traditional copper-pot distillation with modern craftsmanship to create smooth, aromatic pálinka that reflects Hungary’s rich culinary heritage. Every bottle is produced in small batches with a focus on authenticity, quality, and the natural flavour of the fruit.";

function Home() {
  return (
    <div>
      <h1 className="welcome-msg" id="welcome-msg">
        Heavenly manna from Hungary
      </h1>
      <img className="kupica" id="kupica" src={KupicaGrapes} />
      <p className="kalamari-intro" id="kalamari-intro">
        {introduction}
      </p>
    </div>
  );
}

export default Home;
