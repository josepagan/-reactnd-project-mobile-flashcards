import { useDispatch } from "react-redux";
import { deleteAll } from "../store/decksSlice";
import { Text } from "react-native";
import CustomButton from "./CustomButton";

const DeleteAll = () => {
    const dispatch = useDispatch();
    const handleButton = () => {
        dispatch(deleteAll());
    };
    return (
        <>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Delete All</Text>
            <Text>
                Reset the app to default settings, all cards and decks will be deleted
            </Text>
            {/* TODO: Modify customButton to offer some feedback when pressed */}
            <CustomButton title="Delete All Data" onPress={handleButton} />
        </>
    );
};

export default DeleteAll