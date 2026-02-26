import { faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function NewsLetter() {
  return (
    <>
      <section className="py-24 bg-[#FDF8F4] dark:bg-[#201214] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-accent/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-xl mx-auto px-4 text-center space-y-6">
            <FontAwesomeIcon icon={faSprayCanSparkles} color="#dd3c57" style={{height:40,margin:"0 auto",marginBottom:30}}/>
          <h2 className={`text-3xl md:text-4xl font-bold text-text-main dark:text-white font-display`}>
            Join the Inner Circle
          </h2>
          <p className={`text-text-muted dark:text-gray-400 font-sans`}>
            Receive Notifications for new launches, skincare tips, and Much More.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 pt-4">
            <input
              className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-white/5 dark:border-white/10 dark:text-white transition-all placeholder:text-gray-400 font-sans"
              placeholder="Your email address"
              type="email"
            />
            <button
              className={`px-8 py-3 rounded-full bg-text-main dark:bg-white text-white dark:text-text-main font-bold hover:bg-primary dark:hover:bg-gray-200 transition-colors duration-300 font-display`}
              type="button"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-400 pt-2 font-sans">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </section>
    </>
  );
}

export default NewsLetter;
