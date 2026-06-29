from ai.embedding_generator import generate_embedding
from ai.cluster_engine import cluster_complaints

complaints = [
    "Garbage near Kothrud bus stop",
    "Overflowing garbage at Kothrud bus stand",
    "Waste dumped near Kothrud stop",
    "Water leakage near FC Road",
    "Pipeline burst at FC Road"
]

embeddings = [generate_embedding(c) for c in complaints]

clusters = cluster_complaints(embeddings)

for complaint, cluster in zip(complaints, clusters):
    print(cluster, "->", complaint)