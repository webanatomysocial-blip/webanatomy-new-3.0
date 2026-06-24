"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "@/css/admin.css";

const API = process.env.NEXT_PUBLIC_API_URL || "";

const TABS = [
  { id: "all",      label: "All Posts" },
  { id: "blog",     label: "Blogs" },
  { id: "learning", label: "Learnings" },
  { id: "trash",    label: "Trash 🗑️" },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
      return;
    }
    fetchPosts();
  }, [activeTab]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const url =
        activeTab === "trash"
          ? `${API}/api/posts.php?include_trash=true&include_drafts=true`
          : `${API}/api/posts.php?include_drafts=true`;
      const res = await fetch(url, { credentials: "include" });
      const data = await res.json();
      if (data.status === "success") {
        setPosts(data.data);
      }
    } catch {
      console.error("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch(`${API}/api/logout.php`, { credentials: "include" });
    } catch {}
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_role");
    router.push("/admin");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Move this post to trash?")) return;
    try {
      const res = await fetch(`${API}/api/posts.php?id=${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (data.status === "success") fetchPosts();
      else alert(data.message || "Failed to delete");
    } catch { alert("Server error"); }
  };

  const handlePermDelete = async (id) => {
    if (!window.confirm("Permanently delete this post? This cannot be undone.")) return;
    try {
      const res = await fetch(`${API}/api/posts.php?id=${id}&permanent=true`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (data.status === "success") fetchPosts();
      else alert(data.message || "Failed to delete");
    } catch { alert("Server error"); }
  };

  const handleRestore = async (id) => {
    try {
      const res = await fetch(`${API}/api/posts.php`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id, restore: true }),
      });
      const data = await res.json();
      if (data.status === "success") fetchPosts();
      else alert(data.message || "Failed to restore");
    } catch { alert("Server error"); }
  };

  const filteredPosts =
    activeTab === "all" || activeTab === "trash"
      ? posts
      : posts.filter((p) => p.post_type === activeTab);

  return (
    <div className="admin-layout-container">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="admin-sidebar-brand">Webanatomy Admin</div>
        <div className="admin-sidebar-nav">
          <button className="admin-nav-item admin-nav-item-active">Posts</button>
        </div>
        <div style={{ marginTop: "auto" }}>
          <button onClick={handleLogout} className="admin-btn admin-btn-danger" style={{ width: "100%" }}>
            Logout
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="admin-main-content">
        <div className="admin-page" style={{ padding: 0 }}>
          <div className="admin-header">
            <h1>Posts Directory</h1>
            <div className="admin-header-actions">
              <Link href="/admin/editor" className="admin-btn admin-btn-primary">
                + Create New Post
              </Link>
            </div>
          </div>

          <div className="admin-tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`admin-tab ${activeTab === tab.id ? "admin-tab-active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {loading ? (
            <p style={{ padding: "40px" }}>Loading posts...</p>
          ) : (
            <div className="admin-card">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th style={{ width: "8%" }}>Image</th>
                    <th>Title</th>
                    {activeTab === "all" && <th style={{ width: "10%" }}>Type</th>}
                    <th style={{ width: "10%" }}>Status</th>
                    <th style={{ width: "10%" }}>Date</th>
                    <th style={{ width: "18%", textAlign: "right" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map((post) => (
                    <tr key={post.id}>
                      <td className="image-td">
                        {post.image_url ? (
                          <img src={post.image_url} alt="Preview" className="admin-img-preview" />
                        ) : (
                          <div className="admin-img-placeholder">No Img</div>
                        )}
                      </td>
                      <td className="title-td" style={{ fontWeight: 500 }}>{post.title}</td>
                      {activeTab === "all" && (
                        <td>
                          <span style={{ fontSize: "12px", background: "#f0f0f0", padding: "4px 8px", borderRadius: "4px", textTransform: "capitalize" }}>
                            {post.post_type}
                          </span>
                        </td>
                      )}
                      <td>
                        <span className={`admin-status-badge ${parseInt(post.is_published) === 1 ? "admin-status-live" : "admin-status-draft"}`}>
                          {parseInt(post.is_published) === 1 ? "• LIVE" : "• DRAFT"}
                        </span>
                      </td>
                      <td style={{ color: "#666", fontSize: "13px" }}>
                        {new Date(post.published_date).toLocaleDateString()}
                      </td>
                      <td className="admin-actions-cell" style={{ textAlign: "right" }}>
                        {activeTab === "trash" ? (
                          <>
                            <button onClick={() => handleRestore(post.id)} className="admin-btn-link" style={{ color: "#2c7a7b", marginRight: "12px" }}>
                              Restore
                            </button>
                            <button onClick={() => handlePermDelete(post.id)} className="admin-btn-link admin-btn-link-danger">
                              Delete
                            </button>
                          </>
                        ) : (
                          <>
                            <Link href={`/admin/editor?id=${post.id}`} className="admin-btn-link" style={{ marginRight: "12px" }}>
                              Edit
                            </Link>
                            <button onClick={() => handleDelete(post.id)} className="admin-btn-link admin-btn-link-danger">
                              Trash
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                  {filteredPosts.length === 0 && (
                    <tr>
                      <td colSpan={activeTab === "all" ? 6 : 5} style={{ padding: "40px", textAlign: "center", color: "#999" }}>
                        No posts found in this category.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
