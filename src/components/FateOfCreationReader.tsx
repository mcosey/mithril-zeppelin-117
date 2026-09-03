"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const tabs = [
  { id: "beginning", label: "The First Storm", marker: "I" },
  { id: "map", label: "Map", marker: "II" },
  { id: "proto-medjic", label: "Proto-Medjic", marker: "III" },
  { id: "calendar", label: "The Medjic Calendar", marker: "IV" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const chapterParagraphs = [
  "The shadows cast by the many trees in the forests East of Abessagar were uncommonly restless. The wind stirred through acacia branches arousing their leaves to attention as if they were stalked by a predator. However, even the hyenas, cheetahs, and lions throughout the plains were distracted from their normal activities, stricken with agitation themselves, their prey also unnerved. Neither the hunters nor the hunted knew the origins of their anxieties, and they would never know, for the animals of Ebon Yard, from the forests of East Abessagar to the mountain scattered along the coasts that lay West of Mejaced, were not given such insight upon creation. What insight they possessed amounted to a near aimless instinct.",
  "Wattle plovers, starlings, and purple rollers flitted from the stirring branches to the thatching grass, and muted their many songs, shifting into a state of alert. Mongooses, aardvarks, and ground squirrels retreated to their burrows underground, and larger animals like the zebra crowded as though the strength of their numbers would ward off a storm like it might the hungry lion.",
  "In fact, the animals knew no more than what lay in front of their eyes or what memory could tell them from the moment just before the last. The lions knew not that their overhunting would cause demise for their future generations; the hyenas knew not they fouled the watering holes with their tainted wastes; and the cheetahs could not be themselves restore the land following sweeping fires through the brush. Most importantly, they had no intuition to suggest that the grandeur of the groaning storm lingering in the East was of any more consequence than the storms that came before.",
  "Surely the animals would not have taken notice that the wind pulled at the thatch grass more than usual, or that the swollen clouds were darker. Though, the latter would be hard for them to gather for Ebon Yard rested in an ever twilight, but not so dark that shadows could not be shown on the dirt. No sun bore down on the plains, but the land was not without light or warmth. Later, it would be named the Dim Star, a vast but smooth black bead wreathed in swirling light that could tenant an entire horizon.",
  "The luster from the Dim Star casted stark shadows, and animals who looked upon them had to reason to think these were anything more than respite from the Dim Star’s heat.",
  "The trees in the forest of Aksum that were nearest to the savannah of Anbessegar shook more violently so, but their shadows remained still despite the frenzied wind.",
  "And a voiceless command to rise filled the thoughts on these shadows like warm water in a calabash bowl, and hence the Medjai were born on the soils of Ebon Yard.",
] as const;

const protoOverview = [
  ["Word Order", "Verb – Subject – Object (VSO)"],
  ["Questions", "Interrogatives appear at the end."],
  ["Negation", "Precedes the clause."],
  ["Verbs", "Built from biconsonantal roots (C¹–C²) with vowel patterns and aspect markers."],
  ["Nouns", "Three classes: Animate, Inanimate, and Abstract, with case distinctions."],
  ["No Subjunctive", "The Medjai’s Hallowed Gaze leaves little room for uncertainty."],
] as const;

const protoExamples = [
  {
    english: "The fish is red.",
    medjic: "be yabedami tomulath",
    breakdown: [["be", "is"], ["the fish", "the fish"], ["red", "red"]],
  },
  {
    english: "The fish swims.",
    medjic: "be bodum yabedami",
    breakdown: [["be", "is"], ["swims", "swims"], ["the fish", "the fish"]],
  },
  {
    english: "The fish is swimming.",
    medjic: "be stedi bodum yabedami",
    breakdown: [["be", "is"], ["(is)-ing", "(is)-ing"], ["swims", "swims"], ["the fish", "the fish"]],
  },
  {
    english: "The fish swims in the lake.",
    medjic: "be bodum yabedami a yapil",
    breakdown: [["be", "is"], ["swims", "swims"], ["the fish", "the fish"], ["in", "in"], ["the lake", "the lake"]],
  },
  {
    english: "A fish swims in a lake.",
    medjic: "be bodum mëherdami a mëpil",
    breakdown: [["be", "is"], ["swims", "swims"], ["a fish", "a fish"], ["in", "in"], ["a lake", "a lake"]],
  },
  {
    english: "Where does the fish swim?",
    medjic: "be bodum yabedami maim?",
    breakdown: [["be", "does"], ["swims", "swims"], ["the fish", "the fish"], ["where", "where"]],
  },
] as const;

const medjicEvolution = [
  {
    name: "High Medjic",
    era: "Before and After Amlak Contact",
    description: "The Medjai developed High Medjic in Ebon Yard before meeting the Amlak. When communicating with the Medjai, the Amlak spoke both High Medjic and their own unnamed language. High Medjic therefore acquired Amlak loanwords, but its structure was otherwise uninfluenced by the Amlak language.",
  },
  {
    name: "Primitive Leviic",
    era: "Before Medjic Contact",
    description: "Primitive Leviic was the language spoken by the Leviathan before contact with the Medjai. In southern Ebon Yard, communities that did not seek out the Medjai continued to develop the language slowly and with relative stability.",
  },
  {
    name: "Old Medjic",
    era: "After Leviathan Contact",
    description: "Contact with the volatile and unpredictable Leviathan, who spoke Primitive Leviic, obscured the Medjai’s Hallowed Gaze. High Medjic changed rapidly and developed features including a subjunctive mood. Once those changes stabilized, the language became Old Medjic. Most Leviathan of the Modern Ages have no knowledge of High Medjic, which was lost with their immortal ancestors.",
  },
  {
    name: "Low Leviic",
    era: "Result of Leukander",
    description: "Leukander, a Leviathan who defected to southern Ebon Yard, introduced Old Medjic to an evolved form of Primitive Leviic. The resulting Low Leviic remained less influenced by Old Medjic because Leukander’s people resented the Medjai.",
  },
  {
    name: "Low Medjic / Medjic",
    era: "Lingua Franca",
    description: "After the Medjai occupied southern Ebon Yard, Low Leviic became heavily influenced by Old Medjic. Their mixing produced Low Medjic, usually called Medjic, which became the lingua franca of the modern world. Many Leviathan retained Low Leviic naming conventions as a matter of custom.",
  },
  {
    name: "Dialects of Low Medjic",
    era: "Modern Ages",
    description: "The Medjai dialect became the primary lingua franca of Ebon Yard. Many Leviathan speak a creole with stronger vestiges of Low Leviic, while some also speak the Medjai dialect.",
  },
] as const;

const medjicAges = [
  "Age of Creation",
  "Age of Lucence",
  "Age of Consonance",
  "Age of Dissonance",
  "Age of Chasity",
  "Age of Severance",
  "Age of Requiem",
] as const;

function EmblemWatermark() {
  return (
    <Image
      className="chapter-emblem"
      src="/images/mc-emblem-antique-gold.png"
      alt=""
      width={1145}
      height={1374}
      loading="eager"
    />
  );
}

function BeginningPanel() {
  return (
    <article className="chapter-panel" role="tabpanel" id="panel-beginning" aria-labelledby="tab-beginning">
      <div className="chapter-title-block">
        <EmblemWatermark />
        <div className="chapter-title-copy">
          <p className="foc-kicker">The Fate of Creation I</p>
          <div className="chapter-heading">
            <h2>The First Storm</h2>
          </div>
        </div>
      </div>
      <div className="chapter-rule" aria-hidden="true"><span /></div>
      <div className="chapter-copy">
        {chapterParagraphs.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? "opening-paragraph" : undefined}>
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

function ProtoMedjicPanel() {
  return (
    <section className="proto-panel" role="tabpanel" id="panel-proto-medjic" aria-labelledby="tab-proto-medjic">
      <div className="chapter-title-block">
        <EmblemWatermark />
        <div className="chapter-title-copy">
          <p className="foc-kicker">The Fate of Creation</p>
          <div className="chapter-heading">
            <h2>Proto-Medjic</h2>
          </div>
        </div>
      </div>
      <div className="chapter-rule" aria-hidden="true"><span /></div>

      <p className="proto-introduction">
        Proto-Medjic is an early form of the Medjai language. It developed when the Amlak used both
        High Medjic and their own language while communicating with the Medjai. This introduced
        loanwords from the Amlak language but otherwise left High Medjic uninfluenced.
      </p>

      <div className="proto-overview-grid">
        <section>
          <h2>Overview of the Language</h2>
          <ul>
            {protoOverview.map(([label, description]) => (
              <li key={label}><strong>{label}:</strong> {description}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>The Language and the Medjai Mind</h2>
          <p>
            The Medjai view the world in terms of action and state. Fish are “that which swims.”
            Rocks are “that which hards.” Their verbs describe how they themselves might relate or
            be similar to the actions of the world around them.
          </p>
        </section>
      </div>

      <section className="proto-reading" aria-labelledby="proto-reading-title">
        <div className="proto-section-heading">
          <h2 id="proto-reading-title">Reading Proto-Medjic</h2>
          <p>A few example sentences to see the language in action.</p>
        </div>
        <div className="proto-table-wrap">
          <table>
            <thead>
              <tr><th aria-label="Example number" /><th>English</th><th>Proto-Medjic</th><th>Breakdown</th></tr>
            </thead>
            <tbody>
              {protoExamples.map((example, index) => (
                <tr key={example.english}>
                  <td>{index + 1}</td>
                  <td>{example.english}</td>
                  <td><em>{example.medjic}</em></td>
                  <td className="proto-breakdown">
                    {example.breakdown.map(([word, gloss], tokenIndex) => (
                      <span key={`${word}-${tokenIndex}`}><b>{word}</b><em>({gloss})</em></span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="proto-evolution" aria-labelledby="proto-evolution-title">
        <div className="proto-section-heading">
          <h2 id="proto-evolution-title">The Evolution of Proto-Medjic</h2>
          <p>
            High Medjic and Primitive Leviic developed separately before Medjai and Leviathan
            contact. Later stages emerged through contact, migration, conquest, and language mixing.
          </p>
        </div>
        <div className="proto-timeline">
          {medjicEvolution.map((stage) => (
            <article key={stage.name}>
              <h3>{stage.name} <em>({stage.era})</em></h3>
              <p>{stage.description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

function MapPanel() {
  return (
    <section className="map-panel" role="tabpanel" id="panel-map" aria-labelledby="tab-map">
      <div className="chapter-title-block">
        <EmblemWatermark />
        <div className="chapter-title-copy">
          <div className="chapter-heading">
            <h2>Ebon Yard</h2>
          </div>
        </div>
      </div>
      <div className="chapter-rule" aria-hidden="true"><span /></div>
      <figure>
        <Image
          src="/images/ebon-yard-map.jpg"
          alt="Full map of Ebon Yard"
          width={1920}
          height={1357}
          quality={90}
          loading="eager"
          sizes="(max-width: 900px) 94vw, 74vw"
        />
      </figure>
      <figure>
        <Image
          src="/images/world-map.jpg"
          alt="Map of Ebon Yard"
          width={2400}
          height={1696}
          quality={90}
          loading="eager"
          sizes="(max-width: 900px) 94vw, 74vw"
        />
      </figure>
    </section>
  );
}

function MedjicCalendarPanel() {
  return (
    <section className="calendar-panel" role="tabpanel" id="panel-calendar" aria-labelledby="tab-calendar">
      <div className="chapter-title-block">
        <EmblemWatermark />
        <div className="chapter-title-copy">
          <div className="chapter-heading">
            <h2>The Medjic Calendar</h2>
          </div>
        </div>
      </div>
      <div className="chapter-rule" aria-hidden="true"><span /></div>
      <ol className="calendar-ages">
        {medjicAges.map((age) => <li key={age}>{age}</li>)}
      </ol>
    </section>
  );
}

export function FateOfCreationReader() {
  const [activeTab, setActiveTab] = useState<TabId>("beginning");

  useEffect(() => {
    const mapImage = new window.Image();
    mapImage.src = "/images/ebon-yard-map.jpg";

    const worldMapImage = new window.Image();
    worldMapImage.src = "/images/world-map.jpg";
  }, []);

  return (
    <div className="foc-reader">
      <aside className="foc-sidebar" aria-label="The Fate of Creation sections">
        <div className="foc-sidebar-heading">
          <p>The Fate of Creation</p>
          <span aria-hidden="true" />
        </div>
        <div className="foc-tabs" role="tablist" aria-orientation="vertical">
          {tabs.map((tab) => (
            <button
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-controls={`panel-${tab.id}`}
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              key={tab.id}
            >
              <span aria-hidden="true">{tab.marker}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </aside>

      <div className="foc-parchment">
        {activeTab === "beginning" ? <BeginningPanel /> : null}
        {activeTab === "map" ? <MapPanel /> : null}
        {activeTab === "proto-medjic" ? <ProtoMedjicPanel /> : null}
        {activeTab === "calendar" ? <MedjicCalendarPanel /> : null}
      </div>
    </div>
  );
}
