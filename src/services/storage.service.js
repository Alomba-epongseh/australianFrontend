/* eslint-disable */
import * as CryptoJS from "crypto-js";
import { secretKeyEnvironment } from "@/environments";

class StorageService {
  encryptAnyIntoLocalStorage(key, data) {
    if (key == null || data == null) {
      return;
    }

    if (RegExp(/\s/).test(key)) {
      return;
    }

    if (!data) {
      return;
    }

    let encryptedData = "";

    switch (typeof data) {
      case "string":
        encryptedData = CryptoJS.AES.encrypt(
          data,
          secretKeyEnvironment.trim()
        ).toString();
        break;

      case "number":
      case "boolean":
        encryptedData = CryptoJS.AES.encrypt(
          data.toString(),
          secretKeyEnvironment.trim()
        ).toString();
        break;

      case "object":
        encryptedData = CryptoJS.AES.encrypt(
          JSON.stringify(data),
          secretKeyEnvironment.trim()
        ).toString();
        break;

      case "undefined":
      default:
        break;
    }

    localStorage.setItem(key, encryptedData);
  }

  decryptAnyFromLocalStorage(key, isObject = false) {
    if (!key) {
      return;
    }

    if (!localStorage.getItem(key) && !sessionStorage.getItem(key)) {
      return;
    }

    let data = localStorage.getItem(key);

    let bytes;
    let decryptedData;

    if (isObject) {
      bytes = CryptoJS.AES.decrypt(data, secretKeyEnvironment.trim());
      try {
        decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
      } catch (error) {
        console.error(
          bytes.toString(CryptoJS.enc.Utf8) + ": is not an object!"
        );
      }
    } else {
      bytes = CryptoJS.AES.decrypt(data, secretKeyEnvironment.trim());
      decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    }

    if (decryptedData === "true") {
      return true;
    } else if (decryptedData === "false") {
      return false;
    }

    if (this.isNumeric(decryptedData)) {
      return Number(decryptedData);
    }

    // If decryptedData is not bool or numeric then it's a normal string
    return decryptedData;
  }

  removeKey(key) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  }

  clearStorage() {
    localStorage.clear();
    sessionStorage.clear();
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}
export const storageService = {
  set: (key, data) =>
    new StorageService().encryptAnyIntoLocalStorage(key, data),
  get: (key, isObject = false) =>
    new StorageService().decryptAnyFromLocalStorage(key, isObject),
  remove: (key) => new StorageService().removeKey(key),
};
