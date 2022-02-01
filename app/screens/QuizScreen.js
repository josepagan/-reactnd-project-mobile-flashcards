import { useState } from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { GameOver } from "../components/GameOver";
import { AnswerView } from "../components/AnswerView";
import { QuestionView } from "../components/QuestionView";
import { createSelector } from "@reduxjs/toolkit";
import { quizGameOver, scheduleNotification } from "../store/notificationSlice";
// import { scheduleNotification } from "../store/notificationSlice";

//must improve naming
const currentDeck = createSelector(
    (state, deckId) => state.decks.byId[deckId],
    (state) => state.cards.byId,
    (deck, cards) => deck.cards.map(cardId => cards[cardId])
)

const QuizScreen = ({ route }) => {
    const dispatch = useDispatch()
    const { deckId } = route.params
    const quizCards = useSelector((state) => currentDeck(state, deckId))

    const [cardCount, setCardCount] = useState(0)
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [showingAnswer, setShowingAnser] = useState(false)

    const { question, answer } = quizCards[cardCount]

    const handleAnswer = (answer) => {
        if (answer === "CORRECT") {
            setScore(score + 1)
        }
        //gameover events
        if (cardCount === quizCards.length - 1) {

            dispatch(quizGameOver())
            setGameOver(true)
        }
        else {
            setCardCount(cardCount + 1)
            setShowingAnser(false)
        }
    }

    return gameOver
        ? <GameOver score={score} />
        : <>
            <Text>Score: {score}</Text>
            {showingAnswer
                ? <AnswerView answer={answer} handleAnswer={handleAnswer} />
                : <QuestionView question={question} setShowingAnser={setShowingAnser} />
            }
        </>

}

export default QuizScreen