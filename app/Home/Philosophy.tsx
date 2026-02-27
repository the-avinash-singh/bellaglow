
function Philosophy() {
  return (
    <>
      <section className="py-24 bg-white dark:bg-[#2a181b] border-y border-[#f4f0f1] dark:border-white/5">
        <div className="layout-container max-w-7xl mx-auto px-4 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 h-full min-h-125 w-full rounded-2xl overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                data-alt="Abstract creamy texture of skincare product smeared on glass"
                style={{
                  backgroundImage:
                    'url("heroSection/philosophy.png")',
                }}
              ></div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              <div className="space-y-4">
                <h2 className={`text-text-main dark:text-white text-4xl lg:text-5xl font-bold leading-tight font-display`}>
                  Personal Care Marketplace for{" "}
                  <span className="italic text-primary">Everyone</span>
                </h2>
                <p className={`text-text-muted dark:text-gray-300 text-lg leading-relaxed font-sans max-w-lg`}>
                  Every product featured on our platform is carefully reviewed for authenticity, performance, and safety ensuring that you Always keep glowing. 
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Philosophy;
