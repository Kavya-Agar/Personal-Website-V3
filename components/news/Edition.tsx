"use client";

import { useCallback, useEffect, useState } from "react";
import { Almanac } from "./Almanac";
import { ArtsCulture } from "./ArtsCulture";
import { Classifieds } from "./Classifieds";
import { FrontPage } from "./FrontPage";
import { Ledger } from "./Ledger";
import { Markets } from "./Markets";
import { Masthead } from "./Masthead";
import { Opinion } from "./Opinion";
import { Portfolio } from "./Portfolio";
import { isSectionKey, type SectionKey } from "./data";
import {
  useDateline,
  useDispatches,
  useEdition,
  useIndices,
  useMarketOpen,
  useWeather,
} from "./useEdition";

export function Edition() {
  const [section, setSection] = useState<SectionKey>("front");
  const [indexOpen, setIndexOpen] = useState(false);
  const [edition, cycleEdition] = useEdition();

  const { dateLine, clock } = useDateline();
  const indices = useIndices();
  const marketOpen = useMarketOpen();
  const weather = useWeather();
  const { essays, teardowns, loading } = useDispatches();

  /* Sections are addressable as `#biz`, `#tech`, … so they can be linked and the
     browser's back button still moves between them. */
  useEffect(() => {
    const apply = () => {
      const key = window.location.hash.replace(/^#\/?/, "");
      setSection(isSectionKey(key) ? key : "front");
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const go = useCallback((key: SectionKey) => {
    setIndexOpen(false);
    setSection(key);
    if (key === "front") {
      history.pushState(null, "", window.location.pathname + window.location.search);
    } else {
      window.location.hash = key;
    }
    // "instant" rather than "auto": html has scroll-behavior: smooth, which would
    // otherwise animate the jump and fight the page-turn.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIndexOpen((v) => !v);
      }
      if (e.key === "Escape") setIndexOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="news">
      <div className="news-grain" aria-hidden />

      <Masthead
        section={section}
        indexOpen={indexOpen}
        edition={edition}
        go={go}
        toggleIndex={() => setIndexOpen((v) => !v)}
        cycleEdition={cycleEdition}
      />

      <div
        className="news-backdrop"
        data-open={indexOpen}
        onClick={() => setIndexOpen(false)}
        aria-hidden
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 32px) 64px",
        }}
      >
        {/* Two nested wrappers, both keyed on `section` so a section change remounts
            and replays them: the outer does the 140ms page turn, the inner the
            500ms ink-in. Splitting them keeps the two animations off the same
            `transform` property. */}
        <div key={section} className="news-turn">
          <div className={`news-ink-in${section === "front" ? " news-ink-in-lead" : ""}`}>
            {section === "front" && (
              <FrontPage dateLine={dateLine} indices={indices} weather={weather} go={go} />
            )}
            {section === "opinion" && <Opinion />}
            {section === "biz" && <Ledger />}
            {section === "tech" && <Portfolio />}
            {section === "markets" && (
              <Markets indices={indices} clock={clock} marketOpen={marketOpen} />
            )}
            {section === "arts" && (
              <ArtsCulture essays={essays} teardowns={teardowns} loading={loading} />
            )}
            {section === "almanac" && <Almanac />}
            {section === "classifieds" && <Classifieds />}
          </div>
        </div>

        <div
          className="news-dateline"
          style={{
            marginTop: 40,
            paddingTop: 12,
            borderTop: "3px double var(--ink)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "6px 16px",
            letterSpacing: "0.18em",
            color: "var(--ink-faint)",
          }}
        >
          <span>© {new Date().getFullYear()} Kavya Agar · Houston, Texas</span>
          <span>Set in Libre Caslon Display &amp; Newsreader</span>
          <span className="news-print-hide">Press ⌘K for the index</span>
        </div>
      </div>
    </div>
  );
}
