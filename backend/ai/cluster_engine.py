from sentence_transformers import util
import numpy as np

SIMILARITY_THRESHOLD = 0.80


def find_duplicate(embedding, stored_embeddings):
    """
    Compare a complaint embedding with existing complaint embeddings.
    """

    if len(stored_embeddings) == 0:
        return {
            "cluster_id": None,
            "duplicate": False,
            "similarity": 0
        }

    similarities = util.cos_sim(
        embedding,
        stored_embeddings
    )[0]

    max_similarity = similarities.max().item()

    if max_similarity >= SIMILARITY_THRESHOLD:

        cluster = int(np.argmax(similarities))

        return {
            "cluster_id": cluster,
            "duplicate": True,
            "similarity": round(max_similarity, 3)
        }

    return {
        "cluster_id": None,
        "duplicate": False,
        "similarity": round(max_similarity, 3)
    }