import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/styles";

function Button({ children, onPress, mode, customStyle }) {
  return (
    <View style={customStyle}>
      <Pressable
        style={({ pressed }) => {
          return pressed && styles.pressed;
        }}
        onPress={onPress}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,

    margin: 4,
  },

  flat: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "white",
  },
  buttonText: {
    color: GlobalStyles.colors.primary500,
    textAlign: "center",
  },
  flatText: {
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
