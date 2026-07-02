import random
import pandas as pd

locations = [
    "Kothrud", "Baner", "Hadapsar", "FC Road", "Shivajinagar",
    "Wakad", "Hinjewadi", "Pimpri", "Aundh", "Camp"
]

templates = {
    "Waste": [
        "Garbage overflowing near {}",
        "Waste dumped outside {}",
        "Dustbin overflowing in {}",
        "Garbage not collected in {}",
        "Huge garbage pile near {}"
    ],
    "Road": [
        "Large pothole on {}",
        "Road damaged near {}",
        "Broken road in {}",
        "Cracked road at {}",
        "Uneven road surface near {}"
    ],
    "Water": [
        "Water leakage near {}",
        "Pipeline burst in {}",
        "Water supply issue in {}",
        "Water overflowing near {}",
        "No drinking water in {}"
    ],
    "Electricity": [
        "Streetlight not working in {}",
        "Power outage near {}",
        "Electric pole damaged in {}",
        "Loose electric wire in {}",
        "Frequent power cuts in {}"
    ],
    "Drainage": [
        "Drain blocked near {}",
        "Sewage overflow in {}",
        "Drainage issue at {}",
        "Waterlogging due to blocked drain in {}",
        "Dirty drainage near {}"
    ],
    "Traffic": [
        "Heavy traffic near {}",
        "Traffic signal not working at {}",
        "Vehicle congestion in {}",
        "Traffic jam near {}",
        "Road blocked due to traffic in {}"
    ],
    "Flooding": [
        "Flooding reported in {}",
        "Area submerged in {}",
        "Waterlogging after rain in {}",
        "Flood near {}",
        "Rainwater accumulation in {}"
    ]
}

rows = []

for category, sentences in templates.items():
    for _ in range(400):
        sentence = random.choice(sentences).format(random.choice(locations))
        rows.append({
            "complaint": sentence,
            "category": category
        })

df = pd.DataFrame(rows)

df = df.sample(frac=1, random_state=42)

df.to_csv("complaints_generated.csv", index=False)

print(f"Dataset Generated Successfully! Total complaints: {len(df)}")