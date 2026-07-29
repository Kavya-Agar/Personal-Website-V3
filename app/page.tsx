import { Edition } from "@/components/news/Edition";
import { TerminalEaster } from "@/components/TerminalEaster";

export default function Home() {
  return (
    <>
      {/* Orthogonal easter egg — backtick to open. Not part of the newspaper. */}
      <TerminalEaster />
      <Edition />
    </>
  );
}
