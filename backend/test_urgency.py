from ai.urgency_detector import detect_urgency

tests = [
    "Electric shock near FC Road",
    "Garbage overflowing near Kothrud",
    "Huge pothole on JM Road",
    "Flood due to heavy rain in Baner",
    "Streetlight not working"
]

for complaint in tests:
    print(complaint)
    print(detect_urgency(complaint))
    print("-" * 50)