from sklearn.cluster import DBSCAN
import numpy as np


def cluster_complaints(embeddings):
    """
    Cluster similar complaints.
    """

    embeddings = np.array(embeddings)

    model = DBSCAN(
        eps=0.5,
        min_samples=2,
        metric="cosine"
    )

    labels = model.fit_predict(embeddings)

    return labels.tolist()