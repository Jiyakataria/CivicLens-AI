from ai.sentiment import analyze_sentiment

complaints = [
    "Garbage overflowing near Kothrud",
    "Streetlight fixed yesterday",
    "Road is clean now",
    "Huge pothole on FC Road",
]

for c in complaints:
    print(c)
    print(analyze_sentiment(c))
    print("-" * 40)