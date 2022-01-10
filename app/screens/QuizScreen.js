import { useState } from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";

const QuizScreen = ({ route }) => {
    // const { deckId } = route.params
    // const deck = useSelector(state => state.decks.byId[deckId])
    // const { cards } = deck

    // const [cardsLeft, setCardsLeft] = useState([...cards])
    // const [score, setScore] = useState(0)
    // const [gameOver, setGameOver] = useState(false)

    // const [showingAnswer, setShowingAnser] = useState(false)
    // const currentCardId = cardsLeft[0]
    // console.log(cardsLeft)
    // const currentCard = useSelector(state => state.cards.byId[currentCardId])
    // if (currentCard === undefined) return <GameOver score={score} />

    // const question = currentCard.question
    // const answer = currentCard.answer

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
const AnswerView = ({ answer, handleAnswer }) => {

    return (<>
        <View style={{ flex: 5 }}><Text style={{ fontSize: 30 }}>Answer:</Text></View>
        <View style={{ flex: 5 }}><Text style={{ fontSize: 30 }}>{answer}</Text></View>
        <View style={{ flex: 3 }}>
            <Button title="Correct" onPress={() => handleAnswer("CORRECT")} />
        </View>
        <View style={{ flex: 3 }}>
            <Button title="Wrong" color={"red"} onPress={() => handleAnswer("WRONG")} />
        </View>
    </>)
}

const QuestionView = ({ question, setShowingAnser }) => {
    return (
        <>
            <View style={{ flex: 5 }}><Text style={{ fontSize: 30 }}>Question:</Text></View>
            <View style={{ flex: 5 }}><Text style={{ fontSize: 30 }}>{question} </Text></View>
            <View style={{ flex: 3 }}>
                <Button title="Show Answer" onPress={() => setShowingAnser(true)} />
            </View>
        </>
    )
}
const GameOver = ({ score }) =>
    <>
        <View>
            <Text style={{ fontSize: 50 }}>Game Over</Text>
            <Text style={{ fontSize: 50 }}>Final Score: {score} </Text>

        </View>
    </>

export default QuizScreen;