from sklearn.cluster import DBSCAN
import numpy as np


def cluster_embeddings(embeddings):

    embeddings = np.array(embeddings)

    model = DBSCAN(
        eps=0.35,
        min_samples=2,
        metric="cosine"
    )

    labels = model.fit_predict(embeddings)

    return labels.tolist()