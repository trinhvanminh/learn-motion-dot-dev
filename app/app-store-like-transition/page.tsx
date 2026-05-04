"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOnClickOutside } from "usehooks-ts";
import styles from "./styles.module.css";


type CardItem = {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  logo: string;
};

type ActiveCardState = CardItem | null;
type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type CardProps = {
  card: CardItem;
  setActiveCard: SetState<ActiveCardState>;
};

type ActiveCardProps = {
  activeCard: CardItem;
  setActiveCard: SetState<ActiveCardState>;
};

function Card({
  card,
  setActiveCard,
}: CardProps) {
  return (
    <motion.div
      layoutId={`card-${card.title}`}
      className={styles["card"]}
      whileTap={{ scale: 0.98 }}
      onClick={() => setActiveCard(card)}
      style={{ borderRadius: 20 }}
    >
      <motion.img
        layoutId={`image-${card.title}`}
        src={card.image}
        alt=""
        style={{ borderRadius: 20 }}
      />
      <motion.button
        aria-hidden
        tabIndex={-1}
        layoutId={`close-button-${card.title}`}
        className={styles["close-button"]}
        style={{ opacity: 0 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          height="20"
          width="20"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </motion.button>
      <motion.div
        layoutId={`card-content-${card.title}`}
        className={styles["card-content"]}
      >
        <div className={styles["card-text"]}>
          <motion.h2
            layout
            layoutId={`card-heading-${card.title}`}
            className={styles["card-heading"]}
          >
            Game of the day
          </motion.h2>
        </div>
        <motion.div
          layoutId={`card-extra-info-${card.title}`}
          className={styles["extra-info"]}
          style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        >
          <motion.img
            src={card.logo}
            width={40}
            height={40}
            alt=""
            layoutId={`card-game-image-${card.title}`}
            className="rounded-lg"
          />
          <div className={styles["desc-wrapper"]}>
            <motion.span
              layoutId={`card-game-title-${card.title}`}
              className={styles["game-title"]}
            >
              {card.title}
            </motion.span>
            <motion.span
              layoutId={`card-game-subtitle-${card.title}`}
              className={styles["game-subtitle"]}
            >
              {card.description}
            </motion.span>
          </div>
          <motion.button
            layoutId={`card-button-${card.title}`}
            className={styles["get-button"]}
          >
            Get
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        layoutId={`card-long-description-${card.title}`}
        className={styles["long-description"]}
        style={{ position: "absolute", top: "100%", opacity: 0 }}
      >
        <div>
          <p>
            <b>Are you ready?</b> {card.longDescription}
          </p>
          <p>
            <b>The never ending adventure</b>
            In this game set in a fairy tale world, players embark on a quest
            through mystical lands filled with enchanting forests and towering
            mountains.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ActiveCard({
  activeCard,
  setActiveCard,
}: ActiveCardProps) {
  const ref = useRef<HTMLDivElement>(null!);

  useOnClickOutside(ref, () => setActiveCard(null));

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${activeCard.title}`}
      className={`${styles.card} ${styles["card-active"]}`}
      style={{ borderRadius: 0 }}
    >
      <div className={styles["card-inner"]}>
        <motion.img
          layoutId={`image-${activeCard.title}`}
          src={activeCard.image}
          alt=""
          style={{ borderRadius: 0 }}
        />
        <motion.button
          layoutId={`close-button-${activeCard.title}`}
          className={styles["close-button"]}
          aria-label="Close button"
          onClick={() => setActiveCard(null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            height="20"
            width="20"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </motion.button>
        <motion.div
          layoutId={`card-content-${activeCard.title}`}
          className={styles["card-content"]}
        >
          <div className={styles["card-text"]}>
            <motion.h2
              layoutId={`card-heading-${activeCard.title}`}
              layout
              className={styles["card-heading"]}
            >
              Game of the day
            </motion.h2>
          </div>
          <motion.div
            layoutId={`card-extra-info-${activeCard.title}`}
            className={styles["extra-info"]}
            style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
          >
            <motion.img
              src={activeCard.logo}
              width={40}
              height={40}
              alt=""
              layoutId={`card-game-image-${activeCard.title}`}
              className="rounded-lg"
            />
            <div className={styles["desc-wrapper"]}>
              <motion.span
                layoutId={`card-game-title-${activeCard.title}`}
                className={styles["game-title"]}
              >
                {activeCard.title}
              </motion.span>
              <motion.span
                layoutId={`card-game-subtitle-${activeCard.title}`}
                className={styles["game-subtitle"]}
              >
                {activeCard.description}
              </motion.span>
            </div>
            <motion.button
              layoutId={`card-button-${activeCard.title}`}
              layout
              className={styles["get-button"]}
            >
              Get
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        layoutId={`card-long-description-${activeCard.title}`}
        className={styles["long-description"]}
      >
        <p>
          <b>Are you ready?</b> {activeCard.longDescription}
        </p>
        <p>
          <b>The never ending adventure </b>
          In this game set in a fairy tale world, players embark on a quest
          through mystical lands filled with enchanting forests and towering
          mountains. Players can explore the world, build their own viking
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function StyledWithoutDrag() {
  const [activeCard, setActiveCard] = useState<ActiveCardState>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveCard(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className={styles["cards-wrapper"]}>
      {CARDS.map((card) => (
        <Card key={card.title} card={card} setActiveCard={setActiveCard} />
      ))}
      <AnimatePresence>
        {activeCard ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles["overlay"]}
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeCard ? (
          <ActiveCard activeCard={activeCard} setActiveCard={setActiveCard} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

const CARDS: CardItem[] = [
  {
    title: "Vikings",
    subtitle: "Clash of the Norse Warriors",
    description: "A game about vikings",
    longDescription:
      "A game about vikings, where you can play as a viking and fight other vikings. You can also build your own viking village and explore the world.",
    image:
      "https://animations.dev/how-i-use-framer-motion/app-store-like-cards/game.webp",
    logo: "https://animations.dev/how-i-use-framer-motion/app-store-like-cards/game-logo.webp",
  },
];
