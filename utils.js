import { toast } from "react-toastify";

export function getUserAvatar(name, size = 128) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=random&size=${size}`;
}

export const today = new Date().getDay();

export function sentenceCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  });
}

export const alertBox = (message = "Something went wrong", type = "error") => {
  toast(message, { type: type });
};

export const exportToJson = (data) => {
  const file_name = data.name + "_" + data.group + "_" + data.version + ".json";
  const fileData = JSON.stringify(data);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = file_name;
  link.href = url;
  link.click();
};
