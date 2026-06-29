from ai.classifier import classify

tests = [
    "Garbage overflowing near Kothrud Market",
    "Huge pothole on FC Road",
    "Streetlight not working near MIT",
    "Water leakage in Baner",
    "Drain blocked in Hadapsar"
]

for complaint in tests:
    print(f"Complaint : {complaint}")
    print(f"Category  : {classify(complaint)}")
    print("-" * 40)