import FirestoreDocument from '@utils/firestore/FirestoreDocument';
import { db } from '@express/express.main';
import { hasProps } from '@utils/essentials.utils';

/**
 * Template Schema
 */
export default class TemplateSchema extends FirestoreDocument {
  static props = ['parent', 'title', 'description', 'status'];
  static collectionName = 'template';

  info: string;

  constructor(info: string) {
    super(TemplateSchema.collectionName);
    this.info = info;
  }

  static hasProps(data: ITemplateSchema) {
    hasProps(this.props, data);
  }

  /**
   * Populates an object with data in a format that conforms to the schema.
   * @param id
   * @param data
   */
  static populateData(id: string, data: any): ITemplateSchema {
    this.hasProps(data);

    return {
      id: id,
      info: data.info
    };
  }

  /**
   * Returns sanitized data.
   * @param data
   */
  static getData(data: ITemplateSchema) {
    this.hasProps(data);

    return {
      id: data.id,
      info: data.info
    };
  }

  static async create(data: any) {
    this.hasProps(data);

    const templateRef = await db.collection(this.collectionName).add(data);
    const template = await templateRef.get();
    const templateData = template.data();

    // Check that the data created isn't undefined
    if (typeof templateData === 'undefined') {
      throw new Error('Undefined template created.');
    }

    return TemplateSchema.getData({
      id: templateRef.id,
      info: templateData.info
    });
  }

  static async read(templateId: string) {
    if (!templateId) {
      // Get all templates.
      const templateRef = db.collection(this.collectionName);

      const templates: object[] = [];

      // Loop all templates.
      return await templateRef
        .orderBy('info')
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const data = doc.data();

            // Format.
            const schemaData: ITemplateSchema = TemplateSchema.populateData(
              doc.id,
              data
            );

            templates.push(TemplateSchema.getData(schemaData));
          });

          // Respond.
          return templates;
        });
    } else {
      // Get a singular template.
      const templateRef = db.collection(this.collectionName).doc(templateId);

      return await templateRef.get().then(doc => {
        const data = doc.data();

        // Throw if not found.
        if (typeof data === 'undefined') {
          throw new Error('Document not found.');
        }

        // Format.
        const schemaData: ITemplateSchema = TemplateSchema.populateData(
          doc.id,
          data
        );

        // Respond.
        return TemplateSchema.getData(schemaData);
      });
    }
  }

  static async update(templateId: string, data: any): Promise<IV1Response> {
    const templateRef = db.collection(this.collectionName).doc(templateId);
    const success = await templateRef.update(data);

    // If it failed to update
    if (!success.isEqual) {
      throw new Error('Failed to update the template at ID: ' + templateId);
    }

    return { success: true };
  }

  static async delete(templateId: string): Promise<IV1Response> {
    const templateRef = db.collection(this.collectionName).doc(templateId);

    const success = await templateRef.delete();

    if (!success.isEqual) {
      throw new Error('Failed to delete the template at ID: ' + templateId);
    }

    return { success: true };
  }
}
