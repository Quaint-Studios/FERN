import { db } from '@express/express.main';

export default abstract class FirestoreDocument {
  collection: FirebaseFirestore.CollectionReference;
  static props: string[];

  constructor(collection: FirebaseFirestore.CollectionReference | string) {
    this.collection =
      collection instanceof FirebaseFirestore.CollectionReference
        ? collection
        : FirestoreDocument.createCollectionRef(collection);
  }

  static createCollectionRef(
    ref: string
  ): FirebaseFirestore.CollectionReference {
    return db.collection(ref);
  }

  static createDocumentRef(ref: string): FirebaseFirestore.DocumentReference {
    return db.doc(ref);
  }
}
