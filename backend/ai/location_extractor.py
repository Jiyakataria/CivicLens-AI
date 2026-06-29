import spacy

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

# Common Pune locations
KNOWN_LOCATIONS = [
    "Kothrud",
    "Baner",
    "Hadapsar",
    "Shivajinagar",
    "FC Road",
    "JM Road",
    "Katraj",
    "Wakad",
    "Hinjewadi",
    "Swargate",
    "Pune Station",
    "MIT College",
    "Viman Nagar",
    "Camp",
    "Aundh"
]


def extract_location(text: str):
    """
    Extract location from complaint.
    """

    doc = nlp(text)

    # First check spaCy entities
    for ent in doc.ents:
        if ent.label_ in ["GPE", "LOC", "FAC"]:
            return ent.text

    # Fallback: search known locations
    text_lower = text.lower()

    for location in KNOWN_LOCATIONS:
        if location.lower() in text_lower:
            return location

    return "Unknown"