import re
import string
import spacy
from spacy.lang.en.stop_words import STOP_WORDS

# Load spaCy English model
nlp = spacy.load("en_core_web_sm")


def preprocess(text: str) -> str:
    """
    Cleans complaint text for AI processing.
    """

    # Convert to lowercase
    text = text.lower()

    # Remove punctuation
    text = text.translate(str.maketrans("", "", string.punctuation))

    # Remove numbers
    text = re.sub(r"\d+", "", text)

    # Remove extra spaces
    text = re.sub(r"\s+", " ", text).strip()

    # Process using spaCy
    doc = nlp(text)

    cleaned_words = []

    for token in doc:
        if token.text not in STOP_WORDS:
            cleaned_words.append(token.lemma_)

    return " ".join(cleaned_words)