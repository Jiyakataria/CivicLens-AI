from ai.embedding_generator import generate_embedding

complaint = "Garbage overflowing near Kothrud Market"

embedding = generate_embedding(complaint)

print("Vector Length:", len(embedding))
print()
print("First 10 Values:")
print(embedding[:10])