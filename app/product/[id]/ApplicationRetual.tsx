import React from "react";

export default function ApplicationRetual() {
  return (
    <>
      <section className="bg-white/50 py-16 dark:bg-black/20 border-t border-[#f4f0f1] dark:border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-text-main dark:text-white">
                Application Ritual
              </h2>
              <p className="mt-2 font-display max-w-md text-text-muted dark:text-gray-400">
                Follow these Steps for the best of results
              </p>
            </div>
            
          </div>
          <div className="font-sans text-text-muted dark:text-gray-400">
            The secret to activating the Miracle Broth™ lies in a soothing ritual. Warm it for a few seconds between the fingers until it becomes translucent, then press gently into the skin. This "warm and press" method ensures the healing energies are released directly to your complexion.
          </div>
        </div>
      </section>
    </>
  );
}
