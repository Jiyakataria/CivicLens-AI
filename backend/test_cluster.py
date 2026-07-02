from ai.embedding_generator import generate_embedding
from ai.cluster_engine import cluster_embeddings

complaints = [
    "Garbage overflowing near Kothrud",
    "Overflowing garbage at Kothrud",
    "Huge pothole on FC Road",
    "Road damaged near FC Road",
    "Streetlight not working in Baner"
]

embeddings = [generate_embedding(c) for c in complaints]

labels = cluster_embeddings(embeddings)

for complaint, label in zip(complaints, labels):
    print(label, complaint)