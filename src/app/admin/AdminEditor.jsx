"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import "@/css/admin.css";

const QuillEditor = dynamic(() => import("./QuillEditorWrapper"), { ssr: false });

const API = process.env.NEXT_PUBLIC_API_URL || "";

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function EditorInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    post_type: "blog",
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    meta_description: "",
    content: "",
    youtube_link: "",
    image_url: "",
    published_date: new Date().toISOString().split("T")[0],
    is_published: 0,
    initial_likes: 0,
  });

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) { router.push("/admin"); return; }
    setAuthorized(true);

    if (id) {
      fetch(`${API}/api/posts.php?post_id=${id}&include_drafts=true`, { credentials: "include" })
        .then((r) => r.json())
        .then((data) => {
          if (data.status === "success" && data.data) {
            const p = data.data;
            setFormData({
              post_type: p.post_type || "blog",
              title: p.title || "",
              slug: p.slug || "",
              category: p.category || "",
              excerpt: p.excerpt || "",
              meta_description: p.meta_description || "",
              content: p.content || "",
              youtube_link: p.youtube_link || "",
              image_url: p.image_url || "",
              published_date: p.published_date ? p.published_date.split(" ")[0] : "",
              is_published: parseInt(p.is_published) || 0,
              initial_likes: p.initial_likes || 0,
            });
          }
        })
        .catch(console.error);
    }
  }, [id]);

  const set = (key, val) => setFormData((prev) => ({ ...prev, [key]: val }));

  const handleFeaturedUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new window.Image();
    img.onload = async () => {
      URL.revokeObjectURL(img.src);
      const ratio = img.width / img.height;
      if (Math.abs(ratio - 4/3) > 0.02) {
        alert(`The featured image must have a 4:3 aspect ratio. Your image is ${img.width}x${img.height}. Please crop it before uploading.`);
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      setUploading(true);
      const body = new FormData();
      body.append("image", file);
      body.append("type", "featured");
      try {
        const res = await fetch(`${API}/api/upload_blog_image.php`, { method: "POST", credentials: "include", body });
        const data = await res.json();
        if (data.status === "success") set("image_url", data.path);
        else alert(data.message || "Upload failed");
      } catch { alert("Upload error"); }
      finally { setUploading(false); }
    };
    img.src = URL.createObjectURL(file);
  };

  const handleContentImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const body = new FormData();
    body.append("image", file);
    body.append("type", "content");
    try {
      const res = await fetch(`${API}/api/upload_blog_image.php`, { method: "POST", credentials: "include", body });
      const data = await res.json();
      if (data.status === "success") {
        const tag = `<br/><img src="${data.path}" alt="Content Image" style="max-width:100%;height:auto;" /><br/>`;
        set("content", formData.content + tag);
      } else alert(data.message || "Upload failed");
    } catch { alert("Upload error"); }
    finally { e.target.value = null; }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      // Fix bare links in content
      const parser = new DOMParser();
      const doc = parser.parseFromString(formData.content, "text/html");
      doc.querySelectorAll("a").forEach((a) => {
        const href = a.getAttribute("href");
        if (href && !/^(https?:\/\/|mailto:|tel:|\/|#)/i.test(href)) {
          a.setAttribute("href", "https://" + href);
        }
      });

      const payload = { ...formData, content: doc.body.innerHTML };
      if (id) payload.id = id;

      const res = await fetch(`${API}/api/posts.php`, {
        method: id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.status === "success") {
        alert("Post saved successfully!");
        if (!id && data.id) {
          router.push(`/admin/editor?id=${data.id}`);
        }
      } else {
        alert(data.message || "Failed to save");
      }
    } catch { alert("Server error"); }
    finally { setSaving(false); }
  };

  const getPreviewUrl = () => {
    const base = window.location.origin;
    if (formData.post_type === "learning") return `${base}/learnings/${formData.slug}`;
    return `${base}/blogs/${formData.slug}`;
  };

  if (!authorized) return null;

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link href="/admin/dashboard" className="admin-btn-link">← Dashboard</Link>
          <h1 style={{color : 'black'}}>{id ? "Edit Post" : "Create New Post"}</h1>
        </div>
        <div className="admin-header-actions">
          {id && formData.slug && (
            <a href={getPreviewUrl()} target="_blank" rel="noopener noreferrer" className="admin-preview-link">
              View Preview ↗
            </a>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="admin-form">

        {/* Top row: type, status, date, likes */}
        <div className="admin-input-group">
          <div>
            <label className="admin-label">Post Type</label>
            <select value={formData.post_type} onChange={(e) => set("post_type", e.target.value)} className="admin-select">
              <option value="blog">Blog</option>
              <option value="learning">Learning</option>
            </select>
          </div>
          <div>
            <label className="admin-label">Publication Status</label>
            <select
              value={formData.is_published}
              onChange={(e) => set("is_published", parseInt(e.target.value))}
              className="admin-select"
              style={{
                background: formData.is_published === 1 ? "#e6fffa" : "#fff5f5",
                color: formData.is_published === 1 ? "#2c7a7b" : "#c53030",
                fontWeight: "bold",
              }}
            >
              <option value={0}>DRAFT (Hidden from site)</option>
              <option value={1}>LIVE (Public on site)</option>
            </select>
          </div>
          <div>
            <label className="admin-label">Publication Date</label>
            <input
              type="date"
              value={formData.published_date}
              onChange={(e) => set("published_date", e.target.value)}
              className="admin-input"
            />
          </div>
        </div>

        {/* Title */}
        <label className="admin-label">Title *</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => {
            const t = e.target.value;
            const auto = slugify(formData.title);
            setFormData((prev) => ({
              ...prev,
              title: t,
              slug: !prev.slug || prev.slug === auto ? slugify(t) : prev.slug,
            }));
          }}
          required
          className="admin-input"
          placeholder="Post title..."
        />

        {/* Slug */}
        <label className="admin-label">Slug (URL) — auto-generated from title</label>
        <input
          type="text"
          value={formData.slug}
          onChange={(e) => set("slug", e.target.value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""))}
          className="admin-input"
          placeholder="my-post-slug"
        />

        {/* Category */}
        <label className="admin-label">Category (Optional)</label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) => set("category", e.target.value)}
          className="admin-input"
          placeholder="e.g. Design, Marketing..."
        />

        {/* Excerpt */}
        <label className="admin-label">Excerpt / Short Description</label>
        <textarea
          value={formData.excerpt}
          onChange={(e) => set("excerpt", e.target.value)}
          className="admin-textarea"
          placeholder="Brief summary shown on blog listing cards..."
        />

        {/* Meta description */}
        <label className="admin-label">SEO Meta Description</label>
        <textarea
          value={formData.meta_description}
          onChange={(e) => set("meta_description", e.target.value)}
          className="admin-textarea"
          placeholder="Brief description for search engines..."
        />

        {/* Featured image */}
        <label className="admin-label">Featured Image</label>
        {formData.image_url && (
          <div className="admin-image-preview">
            <img src={formData.image_url} alt="Preview" className="admin-image-preview-img" />
            <button
              type="button"
              className="admin-btn admin-btn-danger"
              onClick={() => { set("image_url", ""); if (fileInputRef.current) fileInputRef.current.value = ""; }}
              style={{ padding: "6px 12px", fontSize: "13px", marginTop: "8px" }}
            >
              Remove Image
            </button>
          </div>
        )}
        <input type="file" accept="image/*" onChange={handleFeaturedUpload} ref={fileInputRef} />
        {uploading && <span style={{ fontSize: "13px", color: "#888" }}>Uploading...</span>}


        {/* Rich text content */}
        <label className="admin-label">Content</label>
        <div className="admin-quill-wrapper">
          <QuillEditor
            value={formData.content}
            onChange={(val) => set("content", val || "")}
          />
        </div>

        {/* Content image insert */}
        <label className="admin-label">Insert Image into Content</label>
        <div className="admin-content-image-upload">
          <span className="admin-help-text">Upload an image to insert it directly into the content above.</span>
          <input type="file" accept="image/*" onChange={handleContentImageUpload} />
        </div>

        <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
          {saving ? "Saving..." : id ? "Update Post" : "Publish Post"}
        </button>
      </form>
    </div>
  );
}

export default function AdminEditor() {
  return (
    <Suspense fallback={<div style={{ padding: "80px", textAlign: "center" }}>Loading editor...</div>}>
      <EditorInner />
    </Suspense>
  );
}
