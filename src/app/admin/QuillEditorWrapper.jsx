"use client";

import ReactQuill, { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const LinkFormat = Quill.import("formats/link");
class CustomLink extends LinkFormat {
  static create(value) {
    let url = value;
    if (url && !/^(https?:\/\/|mailto:|tel:|\/|#)/i.test(url)) {
      url = "https://" + url;
    }
    return super.create(url);
  }
}
Quill.register(CustomLink, true);

const TOOLBAR = [
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["blockquote", "code-block"],
  ["link", "image"],
  [{ color: [] }, { background: [] }],
  ["clean"],
];

export default function QuillEditorWrapper({ value, onChange }) {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      theme="snow"
      modules={{ toolbar: TOOLBAR }}
      className="admin-quill-editor"
    />
  );
}
