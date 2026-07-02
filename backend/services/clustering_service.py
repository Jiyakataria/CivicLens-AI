from database.connection import complaints_collection
from ai.cluster_engine import cluster_embeddings


async def update_clusters():

    complaints = []

    async for complaint in complaints_collection.find(
        {"embedding": {"$exists": True}}
    ):
        complaints.append(complaint)

    if len(complaints) < 2:
        return {
            "message": "Not enough complaints for clustering."
        }

    embeddings = [
        complaint["embedding"]
        for complaint in complaints
    ]

    labels = cluster_embeddings(embeddings)

    for complaint, label in zip(complaints, labels):

        await complaints_collection.update_one(
            {"_id": complaint["_id"]},
            {
                "$set": {
                    "cluster_id": int(label)
                }
            }
        )

    return {
        "message": "Clusters updated successfully.",
        "clusters_found": len(set(labels))
    }