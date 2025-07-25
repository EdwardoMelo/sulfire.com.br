
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { getAuth } from "firebase/auth";
import firebaseApp from "./firebaseConfig";

class FirebaseService {
  // Método estático para obter o Storage
  static getStorage() {
    return getStorage(firebaseApp);
  }

  // Método estático para obter a Autenticação
  static getAuth() {
    return getAuth(firebaseApp);
  }

  // Método estático para fazer upload de um arquivo
  static async upload(file: File, filename: string): Promise<string> {
    const storage = this.getStorage();
    const storageRef = ref(storage, `files/${filename}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  }

  // Método estático para deletar um arquivo
  static async delete(url: string): Promise<void> {
    const storage = this.getStorage();
    const storageRef = ref(storage, `${url}`);
    await deleteObject(storageRef);
  }

  // Método estático para obter a URL de um arquivo
  static async getFile(url: string): Promise<string> {
    try {
      const storage = this.getStorage();
      const storageRef = ref(storage, `${url}`);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (e: any) {
      return null;
    }
  }
}

export default FirebaseService;
