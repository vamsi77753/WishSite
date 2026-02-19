/**
 * 🎂 BIRTHDAY SURPRISE - Single-File React App
 *
 * CUSTOMIZE: Edit the values below to personalize for your friend!
 * - BIRTHDAY_NAME: Their name (appears in hero)
 * - LETTER_CONTENT: Your heartfelt letter (supports 10,000+ words)
 */

import React, { useState, useEffect, useCallback } from "react";
import { Heart, Sparkles, Star, Gift, ChevronUp } from "lucide-react";

// ============== CUSTOMIZE THESE ==============
const BIRTHDAY_NAME = "KIDDO"; // ← Paste friend's name here
const FIRST_MEET_IMAGE = "/first-meet.jpg"; // First meet photo (in public folder)
const LAST_MEET_IMAGE = "/last-meet.jpg"; // Last meet photo (in public folder)
// ============================================

// Memories section - Book with page-by-page flip on click
const MemoriesSection = () => {
  const [step, setStep] = useState(0); // 0=closed, 1=cover open, 2=page1 open, 3=page2 open (all visible)
  const handleNext = () => step < 3 && setStep((s) => s + 1);
  const handleBack = () => step > 0 && setStep((s) => s - 1);

  return (
    <div className="mt-16 pt-12 border-t border-[#FFC0CB]/30 animate-memories-fade-in">
      <p className="text-center text-[#C8A2C8] font-medium tracking-widest text-sm mb-10">
        OUR JOURNEY
      </p>
      <div className="book-3d-container">
        {/* Left arrow */}
        {step > 0 && (
          <button
            onClick={handleBack}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 text-[#DDA0DD] hover:text-[#FF69B4] transition-colors z-20"
            aria-label="Previous page"
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        <div className={`book-3d ${step >= 3 ? "book-finished" : ""}`}>
          {/* Base - Page 3 (visible when all flipped) */}
          <div
            className={`book-flip-page book-page-3 ${step >= 3 ? "visible" : ""}`}
          >
            <div className="page-border message-page">
              <span className="message-text">till it ends</span>
              <span className="message-sub">∞</span>
            </div>
          </div>

          {/* Page 2 - flips to reveal Page 3 */}
          <div
            className={`book-flip-page book-page-2 ${step >= 3 ? "flipped" : ""}`}
          >
            <div className="page-border">
              <div className="photo-frame wavy-frame">
                <img src={LAST_MEET_IMAGE} alt="Our last meet" />
                <div className="page-label">After a Year</div>
              </div>
            </div>
          </div>

          {/* Page 1 - flips to reveal Page 2 */}
          <div
            className={`book-flip-page book-page-1 ${step >= 2 ? "flipped" : ""}`}
          >
            <div className="page-border">
              <div className="photo-frame wavy-frame">
                <img src={FIRST_MEET_IMAGE} alt="Our first meet" />
                <div className="page-label">First Meet</div>
              </div>
            </div>
          </div>

          {/* Cover - flips to reveal Page 1 */}
          <div
            className={`book-flip-page book-cover ${step >= 1 ? "flipped" : ""}`}
          >
            <div className="cover-inner">
              <div className="cover-spine" />
              <div className="cover-face">
                <span className="cover-title">Our Journey</span>
                <span className="cover-hint">Click to open</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right arrow */}
        {step < 3 && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 text-[#DDA0DD] hover:text-[#FF69B4] transition-colors z-20"
            aria-label="Next page"
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

// ============== LETTER CONTENT - Paste your 10,000+ word letter below ==============
// Structure: Use <p> tags for paragraphs, <h2> for section headers, <hr /> for dividers
const LETTER_CONTENT = (
  <>
    <h1
      className="mb-6 leading-relaxed text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#FF69B4] via-[#DDA0DD] to-[#C8A2C8] bg-clip-text text-transparent"
      style={{
        fontFamily: "'Dancing Script', cursive",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Hi {BIRTHDAY_NAME},
    </h1>
    <p className="mb-6 leading-relaxed">
      So what happened is I met her when she is in her 1st year of btech.
      Kalisina ventane I thought... Entra okappudu chinna pilla ippudu baane
      pedhadhi aypoyindhi. Kani konni rojulu maatladaka ardhamaindhi😂 inka
      chinna pilla ne ani.....chinna pilla ante oka teenage kid la. So inka
      Andhuke anukunta general ga nen chinnollatho ledha pedhollatho chala free
      ga maatladestha.... Ala thinatho kuda maatladagaliga....chala free ga.
      Starting lo normal ga ne maatlededhi... Ala konni rojulake baaga attach
      aypoyi maatladadam start chesindhi.... Like anni cheppukunedhi....her day
      to day routine and mostly everything. Ee madyalo thanu naaku cheppukonivi
      konni untayi....but still avi anni thana life lo jariginavi le. Avi anni
      natho cheppukovali ani em ledhu le... Adhi thana istam....ani nen
      anukunevadini.
    </p>
    <h2 className="text-xl font-semibold text-[#C8A2C8] mt-10 mb-4">
       First thoughts on her:
    </h2>
    <p className="mb-6 leading-relaxed">
      "Chinna pilla😂", kani appudappudu pedha maatale maatladesthadhi.... Chala
      thelsinattu matured ga... Kani chese panulu anni pilla cheshtale. Yeah
      thanaki friends unnaru...i mean boys lo..... And aa age lo general ga
      ammayilaki evarikaina sare male attention ante istapadatharu so alane
      thinu kuda....of course Evaraina sight kodithene ga manam baagunnam ani
      confidence untadhi so alaane.
      <br />
      <br />
      madam ki chaalane fan base undhi anuko, chalane proposals, chala mandhe
      sight kodatharu... So aa mathram level maintain cheyochu le thappe ledhu.
      <br />
      <br />
      Nen vinnadhani prakaaram madam ki chaala ne pogaru ani.... Full attitude
      bolthe ani. Nen kuda chusa le chinnappude avi anni(chinnappude ante thana
      3rd standard age lo) aa time lo ne chaala pogaru undedhi so adhe maintain
      chesthundhi emo anukunevadini. And Yeah.. ippudem thakkuva ani kaadhu
      le... Enthaina baaga gaarabam chesi pencharu ga valla amma nanna. 
      <br />
      <br />
      Inka thana vishayaniki Vasthe..... Thana age lo unde confusions and
      chinnavatike attract avvadam, edhi entoo thelikapodam..... so ivaithe Inka
      eemeki alaantivi chaaala ne le.
      <br />
      <br />
      Ameku thelidhu nak enni sarlu kopam theppinchedho thanu chese panulaki....
      Yeah some times they were really hurting. she may or may not know wt they
      all are... But fine. Eeme ela ante okaru edho anukuntaru ani vallakosam
      thinaki istam unna lekapoina chese rakam anamaata. So adhi Evaraina sare
      neeku istam lekapothe u don't have to do things. It's ok aa age lo
      evaraina msg chestheno sight koditheno aa attention baaguntundhi kani
      manam respond ayye dhani batte mana character ni decide chesestharu. So
      nuv respond avvakapothe thappuga anukuntaru anukuntav.. kani ala respond
      aithene thappuga ardhamcheskuntaru...chance ichav anukuntaru.
      <br />
      <br />
      Sarle ivanni neeku ippudu thelusule so chaalu manchi vishyalu
      maatladukundham.....
    </p>

    <h2 className="text-xl font-semibold text-[#C8A2C8] mt-10 mb-4">
       Now I see her as:
    </h2>
    <p className="mb-6 leading-relaxed">
      May be andharu Ane pogaru undochu thanaki kani naadhaggara eppudu
      chupinchadhu... Anni cheppukuntadhi....inka nene chaala sarlu kopam
      theppinchina, edipinchina Opikatho matladthadhi.... She says she feels
      safe with me and I am glad for that. She acts cute and reckless with me
      and that's what makes me to look after her more. And all of this makes me
      feel like protecting her and to make sure she is safe and never ends up in
      the wrong hands.
      <br />
      <br />
      And I don't know who else got to see this side of hers but I am glad to
      see that side of hers when she is with me. Sometimes she acts like an
      elder women by talking some matured stuff and making sure whether I am
      taking care of myself or not. That is actually something I like Abt her,
      i.e her concern and care.
      <br />
      <br />
      Inkaa thanu konni vishayallo clarity undhi ani anukuntadhi...kani adhe
      confused mindset lo untadhi... Like a vishyam lo aina oka conclusion ki
      raadaniki aalochisthundhi. Vaalla gurinchi Veella gurinchi aalochinchi
      vallem anukuntaru veellem anukuntaru ani aalochinchi.... Thinu asal em
      kaavalanukuntundho marchipodhi. So evaro happiness kosam dheniki yes
      cheppaku... Neeku cheppali anipisthene Yes cheppu migilina prathisari try
      to say NO. Adhi- Evvaraina eppudaina ekkadaina.
      <br />
      <br />
      Yeah may be konthamandhi parichayam avvagane vallu Elanti vallu anedhi
      manaki thelidhu kani oka point ki vachaka thelusthundhi ga vallatho ela
      and enthavaraku move avvali ani... And valla intentions kuda ardhamavthay.
      So avi anni thelsuko and ala undu.
      <br />
      <br />
    </p>

    <div className="flex justify-center my-8">
      <span className="text-gray-400 text-2xl">
        ✦ US <span className="text-gray-300">❤</span> ✦
      </span>
    </div>

    <p className="mb-6 leading-relaxed">
      NUV asalu nak parichayam avthav ani nen asalu eppudu expect chesi undanu.
      That too parichayam avvadame kaakunda intha close avtham ani aithe kalalo
      kuda anukole. And yeah now I can say one thing that "I am glad that we
      met" that too when u r in this stage of ur life....And Naake asalu a bochu
      thelidhu but still nuv ala undadam valla it gave me some responsible role
      so that u can really become a best version of urs. 
      <br />
      <br />
      Nijam cheppali ante ne parichayam valla nen kuda konni nerchukunna
      thelsukunna. Naalo konni angle lu unnayi ani kuda appude thelsindhi 😅.
      Thanks for that😝.
      <br />
      <br />
      U know I am not much of an open guy. I can't express things exactly how I
      really mean them. So chaala sarlu... the things which were special to u
      ani cheppaavo, they are same for me as well but i won't express.
      <br />
      <br />
      "I still remember the first time we talked on the stairs of my house. I
      still remember that evening on my terrace. I still remember our late-night
      phone calls, whispering and laughing while the whole world was asleep. I
      still remember the smile that stayed on my face after we hung out a day.
      And I still remember that empty, missing feeling I had while I was on my
      way back here."
      <br />
      And bcz of these i got to know u much better.
      <br />
      <br />
      Nen neeku cheppevi kaanivvu ninnu anevi kaanivvu avi anni konni cinema
      dialogue lu konni appudukappudu thannukochesthuntayi. So Andhulo ninnu
      hurt chese la konni untayi ani naku thelsu...konni agree avvavu Ani kuda
      thelusu.....and Nen cheppevatlo konni nuv edho thappu chesuntav ani
      kaadhu....so vaatiki overthink cheyaku. Just oka 3rd person chusthe ela
      untadho ala chepthunnattu. 
      <br />
      <br />
      "Edhi emaina you know wt u are and wt u have done. So evaro edho
      aneskunnaru kuntaaru ani chincheskoku. Ippude kadhu eppudaina... Manam em
      chesam ani manaki thelsu kadha so evaro ninnu judge chesthunnaru ani
      chudaku... Just do wt is right anthe. Ala ani edho thappu chesi nuvve
      right ani feel avvamanatle madam😂."
      <br />
      <br />
      Nen em antha nammakam ichesano nak thelidhu nuv nannu antha trust
      cheydaniki. I respect the trust you have on me a lot. That’s why I want to
      be very honest. Maybe what I’m saying might hurt a little, but I would
      never want to break your trust later.
      <br />
      <br />
          "" Nuv ee mana parichayanni ela anukuntunnavo thelidhu but adhi antha
      pakkanapettu. I just want you to pause for a moment....First try to
      understand yourself better… understand people… understand the world. When
      you step more into real life, you might discover a different version of
      yourself. Your mindset may change. Your opinions may change. Your maturity
      will grow. And only then will you know whether what you feel or decide
      comes from true clarity or just from the moment. The main thing i know and
      worry abt is "I don’t want you to feel later that you misunderstood your
      own feelings". I just want you to grow, explore, and then decide anything
      with full clarity. ""
      <br />
      <br />
      "" And honestly, on my side too, I still have a lot to learn and a lot to
      change within myself. There are many areas in my life where I need to grow
      and become more mature, and yeah i know that even i am not perfect or have
      any right enough to teach u. Where i also have done things which made u
      confuse more. So before we define this in any way, let’s both focus on
      growing, learning, and becoming better, more mature versions of ourselves
      — where we are emotionally aware enough not to make decisions or mistakes
      that could lead to regret later. At the same time, I want to be honest
      about something that worries me. I feel like you became very very open and
      emotionally close in a very short span of time. That kind of quick
      attachment scares me a little — not because it’s wrong, but because I
      don’t want you to make fast emotional decisions and regret them later.
      Some things need time. You are still at an age where everything feels
      INTENSE, and sometimes we don’t see things from every angle including me.
      There is still so much time ahead of you. Until you gain full clarity
      about what you want, don’t rush into setting emotional boundaries or
      stepping into situations that might confuse you later. If you ever choose
      something, let it be after truly thinking it through.
      <br />
      <br />
      Also, emotional connections can sometimes be fragile and even a little
      destructive if they are built too quickly. When new people enter our
      lives, when we move to new places, when our environment changes — feelings
      can change too. Sometimes it’s just about the phase and the time span we
      are in. What feels intense today may not feel the same tomorrow. That’s
      why I don’t want you to depend on a moment or a phase while making
      decisions about something bigger. And when new people come into your life,
      it’s easy for feelings to get confused, and that confusion can lead to
      decisions you might regret later. You don’t have to commit to anything or
      set limits for someone else before you truly understand yourself — your
      likes, your boundaries, and what really matters to you. Sometimes, without
      realizing it, we start adjusting ourselves or setting boundaries based on
      someone else’s expectations, and that can slowly limit us or make us feel
      detached from who we truly are. What matters most is knowing yourself
      first and making choices, setting boundaries and limits with others from
      that clarity, and not from pressure, expectation, or temporary emotions.
      That’s the real you, and that’s the version I respect and would like to
      see the most. Whatever moments have happened between us were natural. They
      weren’t wrong in any serious way, and you should never regret them.If not,
      maybe this is the right time to pause — without crossing further limits —
      so that nothing ever turns into something that hurts you later. I take
      responsibility for protecting your trust on those matters.
      <br />
      <br />
      Every meeting happens for a reason. Every connection carries its own
      meaning. Some people come into our lives for a short time and drift away.
      Some return when the time is right and stay forever. Not every connection
      is meant to be defined immediately. Some are meant to help us grow until
      the right time arrives. So when someone enters your life, don’t assume
      that is everything. Think. Understand what it really means. And make wise
      decisions. Don’t ever see bad experiences as bad luck. Nothing in life
      happens just to hurt you — everything teaches you something. And I also
      know that you’ve handled some really tough things in your life on your
      own, keeping them to yourself when you couldn’t share them with anyone.
      That makes me so proud of you. Take every experience as a lesson. I am
      sure one day you will receive exactly what you truly deserve. Never see
      yourself as someone to whom only bad things happen. Be the girl who can
      lift her own mood even when no one is around. You may not realize it, but
      there are people who genuinely care about you. And always remember — your
      first priority should be you. If there ever comes a situation where you
      must choose between yourself and someone else, choose yourself. Don’t let
      third-person opinions control your life. Some advice and temporary
      motivations can turn your life upside down. Listen, but decide for
      yourself.
      <br />
      <br />I hope you take the time to learn, explore, and understand the
      things you don’t yet know about yourself — especially your vulnerabilities
      — and turn them into something meaningful that helps you grow. I hope each
      step brings you into a better version of yourself than before. I’m not
      saying who you are now is wrong or not enough; I just want you to keep
      evolving, growing, and upgrading yourself while staying true to who you
      already are.
      <br />
      <br />
      Note: Explore atunna kadha ante, dhani ardham boys ni explore chey ani
      kaadhu Rey. Neeku edhi correct o, neeku em kaavalo, nuv em avvali
      anukuntunnavo.... Ivi ila. Ee process lo manushulu kuda ardhamaipotharu
      le.
      <br />
      <br />
      And finally don't think like u r just a random girl passed in my life. U
      may be appeared unannounced but I can tell u that I am happy being with u
      in this whole journey and i hope will continue the same. So don’t worry —
      I am not saying goodbye or going anywhere. While we go through all of
      this, I’ll still be here. I won’t leave unless there comes a moment when I
      have to, and until then, you will always know, as usual, what is happening
      in my life. The reason is: I don't want the girl I care for to get any
      harm or any bad person near her. I just care about you and want you to be
      safe. Sometimes people or situations can give the wrong kind of attention
      or push you toward choices that aren’t really good for you, and that
      honestly worries me. This isn’t about judging or controlling you at all—it
      just comes from care. I want you to feel supported and protected, and I
      also want to make sure that even I never become a reason for any
      discomfort or harm in your life.
      <br />
      <br />I know u r confused with whatever that is happening so far,So wait
      until When you truly know what you want, decisions will feel peaceful
      instead of heavy. Thank you for understanding me and for being there for
      me all this time.
    </p>

    <h2 className="text-xl font-semibold text-[#C8A2C8] mt-10 mb-4">
      Finally...
    </h2>
    <p className="mb-6 leading-relaxed">
      Inka na vishayaniki vasthava.... I don't promise things like u know. But I
      can say that I will be there for u if u need me in any situation that is
      good or bad. U can text me or call me any time u want if you really need
      me at that point of time in ur life even if we are not in good terms. Oka
      time vachinappudu Nuvve realise avthav veeditho na nen inni rojulu
      vegindhi ani. Appudu neeke thelusthadhi. Until then neeku cheppukovali
      anipinchukune roju varaku ilaage day to day gola cheppuko....burra
      thinu....  take advantage of me😂 no worries.
      <br />
      <br />
      (kaavali ante Nen mee akkaki kuda cheptha le papam chinna pilla kadha
      Andhuke idhantha😅 ani.... So thanu kuda em anukodhu😜.)
      <br />
      <br />
      I’m sorry if I’m not always easy to be around. I know I overthink, react
      too quickly at times, and carry my own fears and insecurities because of
      jealousy. Lately, I’ve been realizing my own faults — the things I need to
      work on, the ways I need to grow. But when I say I care, I truly mean it.
      When I say I’m trying, I really am. I’m also learning as I go. I know I
      have hurt you many times, but I never wanted to hurt you — it just turned
      out that way. Still, I am sorry for all of it. I’ve seen a lot in life
      that has taught me not to trust someone easily. That’s why I don’t keep
      hopes or expectations on things that show up in my life unless it reaches
      something extreme. I’ve just learned to be happy with the present, so it
      doesn’t hurt when I have to let go in the future. But still with u, i have
      done some of the things may be out of my usual character — even I don’t
      fully understand why at times. I’m truly sorry if they ever made you feel
      uncomfortable, uncertain, used, or hurt — that was never my intention. I
      want you to know that everything I’ve done comes from care, not from
      trying to take advantage of you. You’ve always meant more to me than that,
      and I hope you can feel that in my actions.
      <br />
      <br />
      Thank you for understanding me and for being there for me all this time.
      <br />
      <br />
      Wishing you a very happy birthday 🤍 I truly hope you get everything you
      wish for in life and always find reasons to be happy. I wish nothing bad
      ever comes near you, and even if life throws something difficult your way,
      I hope you have the strength to get through it and still smile. You
      deserve peace, happiness, and good things—always. May this year brings you
      endless happiness, unforgettable adventures, and dreams that come true.
      May you always feel loved, supported, and celebrated—because you deserve
      it all.
    </p>

    <div className="flex justify-center my-8">
      <span className="text-gray-400 text-2xl">
        ✦ <span className="text-gray-300">❤</span> ✦
      </span>
    </div>

    <p className="leading-relaxed font-medium">
      <span
        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF69B4] via-[#DDA0DD] to-[#C8A2C8] bg-clip-text text-transparent"
        style={{
          fontFamily: "'Dancing Script', cursive",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Your B
      </span>
    </p>

    <div className="flex justify-center mt-12 pt-6">
      <span
        className="text-5xl md:text-6xl font-light"
        style={{
          fontFamily: "'Dancing Script', cursive",
          color: "#C8B5C8",
          textShadow:
            "0 0 24px rgba(200, 162, 200, 0.25), 0 0 8px rgba(255,255,255,0.4)",
        }}
      >
        ∞
      </span>
    </div>

    {/* Photo memories - First meet & Last meet */}
    <MemoriesSection />
  </>
);
// ============== END LETTER CONTENT ==============

// Floating star component (replaces hearts with stars)
const FloatingStar = ({ delay, left, size, opacity, variant }) => (
  <div
    className="absolute animate-float pointer-events-none"
    style={{
      left: `${left}%`,
      bottom: "-20px",
      animationDelay: `${delay}s`,
      opacity: opacity || 0.6,
    }}
  >
    {variant === "sparkle" ? (
      <Sparkles
        size={size || 20}
        className="text-amber-200"
        style={{ filter: "drop-shadow(0 0 6px rgba(255, 215, 0, 0.6))" }}
      />
    ) : (
      <Star
        size={size || 24}
        className="text-amber-200 fill-amber-200"
        style={{ filter: "drop-shadow(0 0 6px rgba(255, 255, 200, 0.8))" }}
      />
    )}
  </div>
);

// Firework spark (small glowing particle)
const FireworkSpark = ({ delay, left, size }) => (
  <div
    className="absolute animate-float pointer-events-none rounded-full"
    style={{
      left: `${left}%`,
      bottom: "-10px",
      animationDelay: `${delay}s`,
      animationDuration: "5s",
      width: size,
      height: size,
      background:
        "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,215,0,0.6) 50%, transparent 70%)",
    }}
  />
);

// Sparkle component (static twinkling)
const Sparkle = ({ top, left, delay, size }) => (
  <div
    className="absolute animate-pulse pointer-events-none"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      animationDelay: `${delay}s`,
    }}
  >
    <Sparkles
      size={size || 20}
      className="text-amber-100"
      style={{
        opacity: 0.9,
        filter: "drop-shadow(0 0 4px rgba(255,255,200,0.5))",
      }}
    />
  </div>
);

// Stable positions for decorative elements
const FLOATING_STARS = [...Array(12)].map((_, i) => ({
  delay: i * 0.8,
  left: (i * 7.3 + 5) % 95,
  size: 14 + (i % 5) * 4,
  opacity: 0.5 + (i % 4) * 0.1,
  variant: i % 3 === 0 ? "sparkle" : "star",
}));
const SPARKLES_LIST = [...Array(8)].map((_, i) => ({
  top: 10 + ((i * 11) % 80),
  left: 5 + ((i * 13) % 85),
  delay: i * 0.5,
  size: 14 + (i % 3) * 4,
}));

function App() {
  const [letterRevealed, setLetterRevealed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heartsBurst, setHeartsBurst] = useState(false);
  // Scroll progress and scroll-to-top button visibility
  const handleScroll = useCallback(() => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0);
    setShowScrollTop(winScroll > 400);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Hide confetti after animation
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRevealLetter = () => {
    setHeartsBurst(true);
    setLetterRevealed(true);
    setTimeout(() => setHeartsBurst(false), 1500);
    // Smooth scroll to letter section
    setTimeout(() => {
      document
        .getElementById("letter-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#FFF5F7] via-[#FFE4E9] to-[#E6E6FA]">
      {/* Inline styles for custom animations - Tailwind doesn't have float-up by default */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
        @keyframes float-up {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          100% { transform: translateY(-100vh) rotate(15deg); opacity: 0; }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes heart-burst {
          0% { transform: scale(0); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-float {
          animation: float-up 8s ease-in infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .animate-heart-burst {
          animation: heart-burst 1.5s ease-out forwards;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        @keyframes memories-fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-memories-fade-in {
          animation: memories-fade-in 1.2s ease-out 0.4s forwards;
          opacity: 0;
        }
        /* Book with flip pages - each click turns a page */
        .book-3d-container {
          perspective: 1800px;
          display: flex;
          justify-content: center;
          padding: 2rem 0;
          position: relative;
        }
        .book-3d {
          position: relative;
          width: min(380px, 90vw);
          height: min(260px, 62vw);
          max-height: 280px;
          transform-style: preserve-3d;
          cursor: pointer;
        }
        .book-3d.book-finished {
          cursor: default;
        }
        .book-flip-page {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          transform-origin: left center;
          transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: 1;
        }
        .book-flip-page.flipped {
          transform: rotateY(-168deg);
          z-index: 0;
          pointer-events: none;
        }
        .book-flip-page.book-cover {
          z-index: 10;
        }
        .book-flip-page.book-cover.flipped {
          z-index: 0;
        }
        .book-flip-page.book-page-1 { z-index: 9; }
        .book-flip-page.book-page-1.flipped { z-index: 0; }
        .book-flip-page.book-page-2 { z-index: 8; }
        .book-flip-page.book-page-2.flipped { z-index: 0; }
        .book-flip-page.book-page-3 {
          z-index: 0;
          background: #f5e6e8;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        .book-flip-page.book-page-3.visible {
          z-index: 7;
        }
        .turn-hint {
          position: absolute;
          bottom: 14px;
          right: 14px;
          font-size: 11px;
          color: #8b6b73;
          font-weight: 600;
          letter-spacing: 0.8px;
          padding: 4px 8px;
          background: rgba(255,255,255,0.85);
          border-radius: 4px;
          border: 1px solid rgba(200,160,170,0.4);
          animation: turn-hint-pulse 1.5s ease-in-out infinite;
        }
        @keyframes turn-hint-pulse {
          0%, 100% { opacity: 0.85; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(2px); }
        }
        .book-flip-page .page-border {
          width: 100%;
          height: 100%;
          position: relative;
          border: 2px solid #e8cdd2;
          border-radius: 3px;
          padding: 10px;
          background: linear-gradient(135deg, #fffbfc 0%, #fdf5f7 100%);
          box-shadow: inset 0 0 0 1px rgba(255,182,193,0.4), 0 2px 10px rgba(0,0,0,0.05);
          box-sizing: border-box;
        }
        .book-flip-page.book-page-1 .page-border,
        .book-flip-page.book-page-2 .page-border {
          background: #faf5f6;
        }
        .book-flip-page .page-border:not(.message-page)::before {
          content: '';
          position: absolute;
          inset: 4px;
          border: 1px solid rgba(220,180,190,0.5);
          border-radius: 2px;
          pointer-events: none;
        }
        .photo-frame {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }
        .wavy-frame {
          clip-path: polygon(
            0% 5%, 8% 4%, 16% 5%, 24% 3%, 32% 5%, 40% 4%, 48% 5%, 56% 3%, 64% 5%, 72% 4%, 80% 5%, 88% 3%, 96% 5%, 100% 4%,
            100% 96%, 92% 97%, 84% 95%, 76% 98%, 68% 95%, 60% 97%, 52% 95%, 44% 97%, 36% 95%, 28% 98%, 20% 95%, 12% 97%, 4% 95%, 0% 96%
          );
        }
        .photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .page-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 6px 8px;
          background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
          color: white;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-align: center;
        }
        .message-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 2px dashed #e0b8c0;
          background: linear-gradient(135deg, #fef8f9 0%, #fdf0f3 100%);
        }
        .message-page::before {
          content: '';
          position: absolute;
          inset: 6px;
          border: 1px dashed rgba(200,160,170,0.5);
          border-radius: 2px;
          pointer-events: none;
        }
        .message-text {
          font-family: 'Dancing Script', cursive;
          font-size: 24px;
          font-weight: 600;
          color: #a87a84;
          letter-spacing: 2px;
        }
        .message-sub {
          font-size: 22px;
          color: #c9a5ad;
          opacity: 0.85;
        }
        .book-flip-page.book-cover:hover .cover-inner {
          box-shadow: 8px 4px 28px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(0,0,0,0.06);
        }
        .book-flip-page .cover-inner {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: stretch;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 6px 2px 20px rgba(0,0,0,0.18), 2px 0 0 rgba(0,0,0,0.05);
          background: #d4a0a8;
          transition: box-shadow 0.3s ease;
        }
        .cover-spine {
          width: 14px;
          background: linear-gradient(90deg, #8b6b7a 0%, #6b4f5a 30%, #8b6b7a 70%, #6b4f5a 100%);
          flex-shrink: 0;
        }
        .cover-face {
          flex: 1;
          background: linear-gradient(135deg, #e8b4bc 0%, #d4a0a8 50%, #c89098 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px;
        }
        .cover-title {
          font-family: 'Dancing Script', cursive;
          font-size: 28px;
          font-weight: 700;
          color: #5c3d45;
          text-shadow: 0 1px 2px rgba(255,255,255,0.5);
        }
        .cover-hint {
          font-size: 11px;
          color: #7a5a62;
          letter-spacing: 1px;
          opacity: 0.9;
        }
      `}</style>

      {/* Scroll progress indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#FF69B4] to-[#DDA0DD] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20 animate-gradient"
        style={{
          background:
            "linear-gradient(135deg, #FFB6C1 0%, #FF69B4 25%, #DDA0DD 50%, #C8A2C8 75%, #E6E6FA 100%)",
          backgroundSize: "200% 200%",
        }}
      >
        {/* Floating stars & fireworks - decorative */}
        {FLOATING_STARS.map((s, i) => (
          <FloatingStar key={`star-${i}`} {...s} />
        ))}
        {[...Array(15)].map((_, i) => (
          <FireworkSpark
            key={`firework-${i}`}
            delay={(i * 0.4) % 3}
            left={(i * 6.6) % 98}
            size={4 + (i % 3) * 2}
          />
        ))}

        {/* Sparkles */}
        {SPARKLES_LIST.map((s, i) => (
          <Sparkle key={`sparkle-${i}`} {...s} />
        ))}

        {/* Stars & sparkles confetti on load */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${(i * 3.33) % 100}%`,
                  bottom: "-10px",
                  animationDelay: `${(i % 10) * 0.2}s`,
                  animationDuration: "4s",
                }}
              >
                {i % 3 === 0 ? (
                  <Star
                    size={14}
                    className="text-amber-200 fill-amber-200"
                    style={{ opacity: 0.9 }}
                  />
                ) : (
                  <Sparkles
                    size={12}
                    className="text-amber-100"
                    style={{ opacity: 0.9 }}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Star burst on reveal (fireworks effect) */}
        {heartsBurst && (
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-heart-burst"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  transform: `rotate(${i * 30}deg) translateY(-20px)`,
                }}
              >
                <Star
                  size={36}
                  className="fill-current"
                  style={{
                    color: "#E8D5E5",
                    filter: "drop-shadow(0 0 8px rgba(232,158,200,0.6))",
                  }}
                />
              </div>
            ))}
          </div>
        )}

        <div className="relative z-10 text-center max-w-4xl">
          <Gift
            className="mx-auto mb-6 text-[#FFF5F7] animate-pulse"
            size={56}
            strokeWidth={1.5}
          />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg mb-4 animate-fade-in">
            Happy Birthday
          </h1>
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 italic bg-gradient-to-r from-[#FF69B4] via-[#DDA0DD] to-[#C8A2C8] bg-clip-text text-transparent"
            style={{
              fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.2))",
            }}
          >
            {BIRTHDAY_NAME}!
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 animate-pulse">
            <Sparkles size={20} className="inline mr-1" />
            You're about to receive something special
            <Sparkles size={20} className="inline ml-1" />
          </p>

          {!letterRevealed ? (
            <button
              onClick={handleRevealLetter}
              className="group px-8 py-4 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full font-semibold text-white border-2 border-white/60 hover:border-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              <Heart
                size={22}
                className="group-hover:scale-110 transition-transform"
              />
              Open Your Letter
            </button>
          ) : (
            <a
              href="#letter-section"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("letter-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full font-semibold text-white border-2 border-white/60 transition-all duration-300"
            >
              Read Your Surprise
            </a>
          )}
        </div>
      </section>

      {/* Letter Section */}
      <section
        id="letter-section"
        className={`relative py-16 px-6 transition-all duration-1000 ${
          letterRevealed
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-2xl mx-auto">
          <div
            className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-white/80"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(255, 105, 180, 0.15), 0 0 0 1px rgba(255,255,255,0.5)",
            }}
          >
            {/* Decorative header - soft white/pearl hearts */}
            <div className="flex justify-center gap-2 mb-8">
              <span className="text-gray-300 text-xl">❤</span>
              <span className="text-[#C8A2C8] font-medium tracking-widest">
                A LETTER FOR YOU
              </span>
              <span className="text-gray-300 text-xl">❤</span>
            </div>

            <div
              className="prose prose-lg max-w-none text-gray-700"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                lineHeight: 1.9,
                letterSpacing: "0.02em",
              }}
            >
              {LETTER_CONTENT}
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:scale-110 border border-[#FFB6C1]/50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="text-[#FF69B4]" />
        </button>
      )}
    </div>
  );
}

export default App;
