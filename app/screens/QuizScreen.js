import { useState } from "react";
import { Text, Button } from "react-native";
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

const QuizScreen = ({ route, navigation }) => {
    const dispatch = useDispatch()
    const { deckId } = route.params
    const quizCards = useSelector((state) => currentDeck(state, deckId))
    const notificationStatus = useSelector(state => state.notifications.active)


    const [cardCount, setCardCount] = useState(0)
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [showingAnswer, setShowingAnser] = useState(false)

    const { question, answer } = quizCards[cardCount]

    //game loop
    const handleAnswer = (answer) => {
        if (answer === "CORRECT") {
            setScore(score + 1)
        }
        //gameover events
        if (cardCount === quizCards.length - 1) {

            dispatch(quizGameOver())
            //rescheduling notifications will reset next notification from today to tomorrow
            if (notificationStatus) dispatch(scheduleNotification())
            setGameOver(true)
        }
        else {
            setCardCount(cardCount + 1)
            setShowingAnser(false)
        }
    }

    const handleRestart = () => {
        setScore(0);
        setCardCount(0);
        setGameOver(false)
        setShowingAnser(false)
    }

    return (
        <>
            {!gameOver && <>
                <Text style={{
                    textAlign: "right",
                    backgroundColor: "black",
                    color: "white"
                }}>Current Score: {score}</Text>
                <Text style={{
                    textAlign: "right",
                    backgroundColor: "black",
                    color: "white"
                }}>Questions Remaining: {quizCards.length - cardCount}</Text></>
            }
            {gameOver
                ? <GameOver score={score} handleRestart={handleRestart} />
                : showingAnswer
                    ? <AnswerView answer={answer} handleAnswer={handleAnswer} />
                    : <QuestionView question={question} setShowingAnser={setShowingAnser} />}
            {gameOver && <Button title="BACK TO DECK" onPress={() => navigation.goBack()} />}

        </>
    )
}

export default QuizScreen