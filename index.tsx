import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from "react-native";

export default function App() {
  return (
    <ImageBackground 
      source={{ uri: "https://i.ibb.co/7jVY4td/home-repair-bg.jpg" }} // 🔹 replace with your own background image
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <Text style={styles.title}>🏠 FixItNow</Text>
        <Text style={styles.subtitle}>Your Trusted Home Repair Partner</Text>

        {/* Main Menu Buttons */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book a Service</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Technicians</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>My Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Payments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Support</Text>
        </TouchableOpacity>

        {/* Services Section */}
        <Text style={styles.sectionTitle}>Our Services</Text>
        <View style={styles.serviceCard}>
          <Text style={styles.serviceText}>🔧 Plumbing</Text>
        </View>
        <View style={styles.serviceCard}>
          <Text style={styles.serviceText}>💡 Electrical</Text>
        </View>
        <View style={styles.serviceCard}>
          <Text style={styles.serviceText}>🪚 Carpentry</Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>© 2025 FixItNow. All rights reserved.</Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: { 
    flexGrow: 1,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.85)", // semi-transparent overlay for readability
    borderRadius: 15,
    margin: 10,
  },
  title: { 
    fontSize: 32, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 5, 
    color: "#1a73e8" 
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
    color: "#444"
  },
  button: {
    backgroundColor: "#1a73e8",
    paddingVertical: 15,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    color: "#222"
  },
  serviceCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333"
  },
  footer: {
    textAlign: "center",
    marginTop: 30,
    color: "#555",
    fontSize: 14
  }
});
