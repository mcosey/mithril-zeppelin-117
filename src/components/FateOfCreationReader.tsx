"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  { id: "beginning", label: "The Beginning", marker: "I" },
  { id: "map", label: "Map", marker: "M" },
  { id: "proto-medjic", label: "Proto-Medjic", marker: "P" },
  { id: "dummy-1", label: "The Medjic Calendar", marker: "01" },
  { id: "dummy-2", label: "Dummy Tab 2", marker: "02" },
  { id: "dummy-3", label: "Dummy Tab 3", marker: "03" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const chapterParagraphs = [
  "The shadows cast by the many trees in the forests East of Abessagar were uncommonly restless. The wind stirred through acacia branches arousing their leaves to attention as if they were stalked by a predator. However, even the hyenas, cheetahs, and lions throughout the plains were distracted from their normal activities, stricken with agitation themselves—their prey also unnerved. Neither the hunters nor the hunted knew the origins of their anxieties, and they would never know, for the animals of Ebon Yard, from the forests of East Abessagar to the mountain scattered along the coasts that lay West of Mejaced, were not given such insight upon creation. What insight they possessed amounted to a near aimless instinct.",
  "Wattle plovers, starlings, and purple rollers flitted from the stirring branches to the thatching grass, and muted their many songs, shifting into a state of alert. Mongooses, aardvarks, and ground squirrels retreated to their burrows underground, and larger animals like the zebra crowded as though the strength of their numbers would ward off a storm like it might the hungry lion.",
  "In fact, the animals knew no more than what lay in front of their eyes or what memory could tell them from the moment just before the last. The lions knew not that their overhunting would cause demise for their future generations; the hyenas knew not they fouled the watering holes with their tainted wastes; and the cheetahs could not be themselves restore the land following sweeping fires through the brush. Most importantly, they had no intuition to suggest that the grandeur of the groaning storm lingering in the East was of any more consequence than the storms that came before.",
  "Surely the animals would not have taken notice that the wind pulled at the thatch grass more than usual, or that the swollen clouds were darker. Though, the latter would be hard for them to gather for Ebon Yard rested in an ever twilight, but not so dark that shadows could not be shown on the dirt. No sun bore down on the plains, but the land was not without light or warmth. Later, it would be named the Dim Star—a vast but smooth black bead wreathed in swirling light that could tenant an entire horizon.",
  "The luster from the Dim Star casted stark shadows, and animals who looked upon them had to reason to think these were anything more than respite from the Dim Star’s heat.",
  "The trees in the forest of Aksum that were nearest to the savannah of Anbessegar shook more violently so, but their shadows remained still despite the frenzied wind.",
  "And a voiceless command to rise filled the thoughts on these shadows like warm water in a calabash bowl, and hence the Medjai were born on the soils of Ebon Yard.",
] as const;

const protoOverview = [
  ["Word Order", "Verb – Subject – Object (VSO)"],
  ["Questions", "Interrogatives appear at the end."],
  ["Negation", "Precedes the clause."],
  ["Verbs", "Built from biconsonantal roots (C¹–C²) with vowel patterns and aspect markers."],
  ["Nouns", "Three classes—Animate, Inanimate, and Abstract—with case distinctions."],
  ["No Subjunctive", "The Medjai’s Hallowed Sight leaves little room for uncertainty."],
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
    era: "Pre-Amlak Contact",
    description: "The Medjai inhabited Ebon Yard and developed High Medjic before their first contact with the Amlak. When communicating with the Medjai, the Amlak spoke both High Medjic and their own unnamed language. High Medjic acquired loanwords from the Amlak language but was otherwise uninfluenced by it; this amalgamation became Proto-Medjic.",
  },
  {
    name: "Old Medjic",
    era: "After Leviathan Contact",
    description: "When the Medjai encountered the Leviathan—volatile and unpredictable beings—this clouded their Hallowed Sight. Rapid linguistic changes followed, including the development of a subjunctive mood. Once these shifts stabilized, the language became known as Old Medjic.",
  },
  {
    name: "Primitive Leviic",
    era: "Before Medjic Contact",
    description: "The early language of the Leviathan before meaningful contact with the Medjai.",
  },
  {
    name: "Low Leviic",
    era: "Result of Leukander",
    description: "Leukander, a Leviathan who defected south, introduced Old Medjic to an evolved form of Primitive Leviic. His people, resentful of the Medjai, developed a distinct tongue.",
  },
  {
    name: "Low Medjic / Medjic",
    era: "Lingua Franca",
    description: "Through conquest, mixing, and centuries of shared history, Low Leviic and Old Medjic merged and evolved into the lingua franca of Ebon Yard. This is the language of the modern ages depicted in the narrative.",
  },
] as const;

function EmblemWatermark() {
  return (
    <svg className="chapter-emblem" viewBox="0 0 1400 1400" aria-hidden="true">
      <defs>
        <filter id="emblem-ink" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                   -0.333 -0.333 -0.333 0 1"
          />
        </filter>
      </defs>
      <image href="/images/mc-emblem.jpg" width="1400" height="1400" filter="url(#emblem-ink)" />
    </svg>
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
      <div className="chapter-title-block proto-title-block">
        <EmblemWatermark />
        <div className="chapter-title-copy">
          <p className="foc-kicker">The Fate of Creation</p>
          <h1>Proto-Medjic</h1>
          <p className="proto-tagline">The ancestral tongue of the Medjai.</p>
        </div>
      </div>
      <div className="chapter-rule" aria-hidden="true"><span /></div>

      <p className="proto-introduction">
        Proto-Medjic is the earliest attested amalgamated form of the Medjai language. It emerged
        when the Amlak used both High Medjic and their own unnamed language while communicating
        with the Medjai, introducing loanwords into High Medjic. The language reflects a people who
        see the world through action, memory, and certainty.
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
      <p className="foc-kicker">The world of The Fate of Creation</p>
      <h1>Ebon Yard</h1>
      <figure>
        <Image
          src="/images/ebon-yard-map.jpg"
          alt="Map of Ebon Yard"
          width={1920}
          height={1357}
          quality={90}
          sizes="(max-width: 900px) 94vw, 74vw"
        />
        <figcaption>Charted lands of Ebon Yard</figcaption>
      </figure>
    </section>
  );
}

function PlaceholderPanel({ label, id }: { label: string; id: TabId }) {
  return (
    <section className="foc-placeholder" role="tabpanel" id={`panel-${id}`} aria-labelledby={`tab-${id}`}>
      <p className="foc-kicker">The Fate of Creation</p>
      <h1>{label}</h1>
      <p>This section is still being prepared.</p>
    </section>
  );
}

export function FateOfCreationReader() {
  const [activeTab, setActiveTab] = useState<TabId>("beginning");
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

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
        {activeTab !== "beginning" && activeTab !== "map" && activeTab !== "proto-medjic" ? (
          <PlaceholderPanel label={active.label} id={active.id} />
        ) : null}
      </div>
    </div>
  );
}
