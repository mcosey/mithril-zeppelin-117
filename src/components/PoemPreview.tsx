"use client";

import { useRef } from "react";

export function PoemPreview() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <article className="works-poem-card">
        <h3>To -- -- --. -- -- --: A Ballad</h3>
        <button type="button" onClick={() => dialogRef.current?.showModal()}>
          Read Poem
        </button>
      </article>

      <dialog className="poem-dialog" ref={dialogRef} aria-labelledby="poem-dialog-title">
        <div className="poem-dialog-content">
          <h2 id="poem-dialog-title">To -- -- --. -- -- --: A Ballad</h2>
          <div className="poem-dialog-rule" aria-hidden="true"><span /></div>
          <div className="poem-placeholder-text">
            <p>
              Imagine a moonbeam of scarlet,<br />
              Or embers of brilliant blue—<br />
              A sunset of shimmering silver,<br />
              To usher in evening anew.
            </p>
            <p>
              And what if the stars were smooth opals<br />
              That thou couldst pluck from the sky?<br />
              And what if the comets could harken,<br />
              And speak with us as they passed by?
            </p>
            <p>
              How queer would it be to hear singing<br />
              Of ravens to wake thee from sleep—<br />
              But dirges from songbirds of morning<br />
              Compelling the angels to weep?
            </p>
            <p>
              Mayhaps thou might find all these wonders<br />
              If love, rare as yours, could find me!<br />
              And one wouldst find these and others,<br />
              Ere mortals as precious as thee!
            </p>
          </div>
          <form method="dialog">
            <button type="submit">Close</button>
          </form>
        </div>
      </dialog>
    </>
  );
}
