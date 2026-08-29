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

function BeginningPanel() {
  return (
    <article className="chapter-panel" role="tabpanel" id="panel-beginning" aria-labelledby="tab-beginning">
      <div className="chapter-title-block">
        <svg
          className="chapter-emblem"
          viewBox="0 0 1400 1400"
          aria-hidden="true"
        >
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
          <image
            href="/images/mc-emblem.jpg"
            width="1400"
            height="1400"
            filter="url(#emblem-ink)"
          />
        </svg>
        <div className="chapter-title-copy">
          <p className="foc-kicker">Fate of Creation I</p>
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

function MapPanel() {
  return (
    <section className="map-panel" role="tabpanel" id="panel-map" aria-labelledby="tab-map">
      <p className="foc-kicker">The world of Fate of Creation</p>
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
      <p className="foc-kicker">Fate of Creation</p>
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
      <aside className="foc-sidebar" aria-label="Fate of Creation sections">
        <div className="foc-sidebar-heading">
          <p>Fate of Creation</p>
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
        {activeTab !== "beginning" && activeTab !== "map" ? (
          <PlaceholderPanel label={active.label} id={active.id} />
        ) : null}
      </div>
    </div>
  );
}
