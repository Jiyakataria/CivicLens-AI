from ai.location_extractor import extract_location

tests = [
    "Garbage overflowing near Kothrud Market",
    "Water leakage near FC Road",
    "Huge pothole in Baner",
    "Streetlight not working near MIT College",
    "Traffic signal damaged at Shivajinagar"
]

for complaint in tests:
    print(complaint)
    print("Location:", extract_location(complaint))
    print("-" * 50)