import { useState } from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

import { GameOver } from "../components/GameOver";
import { AnswerView } from "../components/AnswerView";
import { QuestionView } from "../components/QuestionView";

const QuizScreen = ({ route }) => {

    const { deckId } = route.params
    const deck = useSelector(state => state.decks.byId[deckId])
    const allCards = useSelector(state => state.cards.byId)
    const { cards } = deck
    const quizCards = cards.map(el => allCards[el])

    const [cardCount, setCardCount] = useState(0)
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [showingAnswer, setShowingAnser] = useState(false)

    const { question, answer } = quizCards[cardCount]

    const handleAnswer = (answer) => {
        // if (cardsLeft.length === 0) return <GameOver score={score}/>
        if (answer === "CORRECT") {
            setScore(score + 1)
        }
        if (cardCount === quizCards.length - 1) { setGameOver(true) }
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