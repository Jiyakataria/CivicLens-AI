from ai.pipeline import analyze_complaint
from pprint import pprint

test_cases = [
    "Garbage overflowing near Kothrud Market",
    "Huge pothole on FC Road",
    "Streetlight not working in Baner",
    "Water leakage near Hadapsar",
    "Drain blocked in Wakad",
    "Heavy traffic near Shivajinagar",
    "Flooding reported in Camp area"
]

for complaint in test_cases:
    print("=" * 70)
    print("Complaint:", complaint)
    pprint(analyze_complaint(complaint))