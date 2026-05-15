import chestnut from "../assets/palinka-photos/chestnut.webp";
import plum from "../assets/palinka-photos/plum.webp";
import quince from "../assets/palinka-photos/quince.webp";
import ginger from "../assets/palinka-photos/ginger.webp";
import apricot from "../assets/palinka-photos/apricot.webp";
import apple from "../assets/palinka-photos/apple.webp";

function Products() {
  return (
    <div>
      <h2 className="welcome-msg" id="welcome-msg">
        Our product line is the following
      </h2>
      <div>
        <ul>
          <li>
            <h4 className="product-type" id="product-type">
              Apple Pálinka
            </h4>
            <img
              className="product-pics"
              id="product-pics"
              alt="some apples around a bottle"
              src={apple}
            />
            <p className="fruits-info" id="fruits-info">
              “Hungarian Apple Pálinka” is a legendary orchard spirit
              traditionally distilled only during the third moon of autumn, when
              the apples are believed to “remember the summer wind.” According
              to old Hungarian folklore, villagers would bury bruised apples
              beneath warm stones for nine days before fermenting them in cedar
              barrels lined with beeswax and juniper smoke. The drink itself is
              said to have three stages of flavor: The Orchard Bite – a sharp
              green-apple snap that wakes up your senses. The Midnight Warmth –
              a deep caramel and spice note that spreads slowly. The Ancestor’s
              Whisper – an oddly smoky finish that supposedly inspires
              confidence, bad dancing, and emotional storytelling.
              Traditionally, Hungarian apple pálinka was served in tiny crystal
              glasses before important negotiations, weddings, and competitive
              accordion tournaments. Superstition claimed that spilling even a
              drop would anger the “Old Apple Spirit,” resulting in sour
              harvests and disappointing soup for the rest of the season. Modern
              producers still honor the old customs by tapping each barrel three
              times before bottling — not for quality control, but “to wake the
              apples up.”
            </p>
          </li>
          <li>
            <h4 className="product-type" id="product-type">
              Quince pálinka
            </h4>
            <img
              className="product-pics"
              id="product-pics"
              alt="two small glasses and two quinces in the background"
              src={quince}
            />
            <p className="fruits-info" id="fruits-info">
              “Hungarian Quince Pálinka” is often described in folklore as the
              most mysterious of all fruit spirits, prized for its golden aroma
              and strangely floral intensity. Old countryside legends claimed
              quince trees grew where lightning struck orchard soil, giving the
              fruit its unusual perfume and stubborn hardness. Traditional
              makers believed quince had to be harvested in silence before dawn,
              because loud voices would “frighten the fragrance away.” The fruit
              was then sliced by hand and fermented slowly in cool cellar rooms
              while bundles of dried herbs hung from the rafters to guide the
              spirit toward sweetness. The tasting ritual supposedly unfolds in
              three parts: The Golden Bloom – bright honeyed fruit and
              wildflower aromas rise immediately from the glass. The Velvet Fire
              – a smooth but powerful warmth spreads across the tongue with
              hints of spice and pear. The Orchard Echo – a lingering floral
              finish said to make old memories feel unusually vivid. In rural
              Hungarian superstition, quince pálinka was considered a drink for
              truth-telling and reconciliation. Families would serve it during
              winter disputes because it was believed nobody could successfully
              lie after the second glass. Even today, some traditional
              distillers insist the best quince pálinka should never be rushed.
              As one old saying goes: “The apple speaks quickly — the quince
              waits to be understood.”
            </p>
          </li>
          <li>
            <h4 className="product-type" id="product-type">
              Ginger pálinka
            </h4>
            <img
              className="product-pics"
              id="product-pics"
              alt="a layed down bottle with a ginger on it side"
              src={ginger}
            />
            <p className="fruits-info" id="fruits-info">
              “Hungarian Ginger Pálinka” is a rare and controversial spirit said
              to have originated when traveling spice merchants crossed paths
              with village distillers along the old trade routes of Eastern
              Europe. Though not considered a traditional fruit pálinka by
              purists, folklore claims the fiery root was adopted during
              especially brutal winters because it could “put heat back into
              frozen bones.” According to legend, ginger was steeped alongside
              late-harvest orchard fruits in clay fermentation crocks wrapped in
              wool blankets to “keep the spirit alive.” Distillers believed the
              sharp aroma awakened the senses so strongly that even exhausted
              farmers could work through snowstorms after a single sip. The
              drink is rumored to reveal itself in three waves: The Spark – an
              immediate burst of warm spice and citrus-like brightness. The
              Ember Heart – a deep, slow-building heat balanced by faint
              sweetness. The Dragon’s Breath – a lingering fiery finish that
              warms the throat long after the glass is empty. In Hungarian
              tavern folklore, ginger pálinka earned the nickname “The Argument
              Ender,” because nobody could continue shouting while coughing
              through the first mouthful. Some stories even claimed it was once
              served to travelers before crossing mountain passes to “keep fear
              from freezing the blood.” To this day, enthusiasts joke that
              proper ginger pálinka should feel “half medicine, half bad
              decision” — but always unforgettable.
            </p>
          </li>
          <li>
            <h4 className="product-type" id="product-type">
              Plum pálinka
            </h4>
            <img
              className="product-pics"
              id="product-pics"
              alt="a half plum"
              src={plum}
            />
            <p className="fruits-info" id="fruits-info">
              “Hungarian Plum Pálinka” is considered the crown jewel of village
              fruit spirits, deeply tied to harvest festivals, family
              traditions, and long winter gatherings. Folklore says the finest
              plums were picked only after the season’s first cold fog settled
              over the orchards, because the chill was believed to “teach the
              fruit patience.” Old distillers claimed plum mash had a
              temperament of its own. During fermentation, families would leave
              cellar windows slightly open at night so the spirit could “breathe
              with the hills.” Some even tied red ribbons around the barrels to
              ward off sour batches and jealous neighbors. The tasting
              experience is traditionally described in three stages: The Dark
              Sweetness – rich ripe plum flavors with hints of honey and dried
              fruit. The Hearth Glow – a smooth warming body carrying notes of
              spice, wood, and faint smoke. The Long Goodbye – a deep lingering
              finish said to make songs sound better and stories last longer. In
              rural Hungarian superstition, plum pálinka was more than a drink —
              it was considered a sign of hospitality and resilience. Guests
              arriving during snowstorms were often greeted with a steaming meal
              and a small glass “to warm the soul before the body.” One old
              saying captures its reputation perfectly: “Apple pálinka greets
              you politely — plum pálinka invites itself to stay.”
            </p>
          </li>
          <li>
            <h4 className="product-type" id="product-type">
              Apricot pálinka
            </h4>
          </li>
          <img
            className="product-pics"
            id="product-pics"
            alt="a glass and some apricots around it"
            src={apricot}
          />
          <p className="fruits-info" id="fruits-info">
            “Hungarian Apricot Pálinka” is often called the “sunlight spirit” of
            the Great Plain, celebrated for its bright aroma and deceptively
            smooth character. According to old Hungarian folklore, apricots
            destined for pálinka had to ripen fully on the branch until their
            skins carried tiny golden freckles known as “summer stars.” Village
            distillers believed apricot mash was especially sensitive to mood
            and weather. During fermentation, loud arguments near the barrels
            were forbidden because it was said the spirit could “turn bitter
            from human tempers.” To encourage sweetness, some families placed
            fresh apricot leaves above the cellar door as a sign of good
            fortune. Traditional tasting rituals describe the drink in three
            moments: The Golden Arrival – an intense burst of ripe apricot,
            honey, and floral perfume. The Velvet Sun – a soft warming sweetness
            balanced by gentle spice and almond-like notes. The Summer Echo – a
            smooth lingering finish said to taste like the memory of warm
            evenings and orchard air. In Hungarian tradition, apricot pálinka
            was often reserved for celebrations, engagements, and the first
            toast at weddings because its bright aroma symbolized prosperity and
            happiness. Older villagers sometimes joked that “plum pálinka starts
            conversations — apricot pálinka starts romances.” Even today,
            dedicated makers insist true apricot pálinka should never smell
            harsh. As one old saying claims: “If the apricot does not greet the
            nose first, the spirit woke too early.”
          </p>
        </ul>
      </div>
    </div>
  );
}

export default Products;
