import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Exercise 1 — the Profile tab is the "Contact Us" screen.
 *
 * Controlled inputs: each field's value lives in useState, and onChangeText
 * writes the new text back into that state. Reading the value from state is
 * what lets us clear the form after sending.
 */

// Shared look for the three fields. Written as a literal string so Tailwind's
// scanner still finds every class name inside it.
const fieldClassName = "mt-2 rounded-lg border border-gray-200 bg-white p-3 text-gray-900";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = () => {
    const sender = name.trim();

    if (sender === "") {
      alert("Please enter your name first.");
      return;
    }

    // The template literal puts the typed name into the message.
    alert(
      `Thank you, ${sender}! We will reply to ${email.trim() || "your email"} shortly.`
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Lifts the content above the keyboard on iOS. */}
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}>
        {/* ScrollView so the form stays reachable on small screens. */}
        <ScrollView
          contentContainerClassName="p-4"
          keyboardShouldPersistTaps="handled">
          <Text className="text-2xl font-bold text-primary">Contact Us</Text>
          <Text className="mt-1 text-gray-500">
            Questions about a property? Send us a message.
          </Text>

          <Text className="mt-6 font-medium text-gray-700">Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Your name"
            placeholderTextColor="#9CA3AF"
            className={fieldClassName}
          />

          <Text className="mt-4 font-medium text-gray-700">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            className={fieldClassName}
          />

          <Text className="mt-4 font-medium text-gray-700">Message</Text>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="How can we help?"
            placeholderTextColor="#9CA3AF"
            multiline
            // textAlignVertical is the Android-only way to start typing at the top.
            textAlignVertical="top"
            className={`${fieldClassName} h-32`}
          />

          <TouchableOpacity
            onPress={send}
            className="mt-6 items-center rounded-xl bg-primary py-4">
            <Text className="font-bold text-white">Send</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
