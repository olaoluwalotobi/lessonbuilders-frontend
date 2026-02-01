// auth.js (front-end access gate + email sign-in)
//
// Requires backend endpoints from server-with-auth.js:
//   POST /api/auth/access-code  { code }
//   POST /api/auth/email        { email }
// Both should return JSON.
//

import { getApiBase } from "./api.js";

const LS_ACCESS_OK = "lb_access_ok";
const LS_AUTH_TOKEN = "lb_auth_token";

function $(id) {
  return document.getElementById(id);
}

function openGate() {
  const overlay = $("accessGateOverlay");
  if (!overlay) return;
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  // Prevent background scroll
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

function closeGate() {
  const overlay = $("accessGateOverlay");
  if (!overlay) return;
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

async function verifyAccessCode(code) {
  const base = getApiBase();
  const res = await fetch(`${base}/api/auth/access-code`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data?.error || `Access denied (${res.status})`);
  }
  return data;
}

async function requestEmailLink(email) {
  const base = getApiBase();
  const res = await fetch(`${base}/api/auth/email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data?.error || `Email request failed (${res.status})`);
  }
  return data;
}

export function initAccessGate() {
  // Only run on pages that include the overlay
  if (!$("accessGateOverlay")) return;

  const alreadyOk = localStorage.getItem(LS_ACCESS_OK) === "true";
  if (!alreadyOk) openGate();

  const codeInput = $("lbAccessCode");
  const codeBtn = $("lbAccessSubmit");
  const codeErr = $("lbAccessError");

  const emailInput = $("lbEmail");
  const emailBtn = $("lbEmailSubmit");
  const emailStatus = $("lbEmailStatus");

  function setCodeError(msg) {
    if (codeErr) codeErr.textContent = msg || "";
  }
  function setEmailStatus(msg, isError=false) {
    if (!emailStatus) return;
    emailStatus.textContent = msg || "";
    emailStatus.style.color = isError ? "#fca5a5" : "#a7f3d0";
  }

  async function onSubmitCode() {
    const code = (codeInput?.value || "").trim();
    if (!code) {
      setCodeError("Enter a code.");
      return;
    }
    setCodeError("Checking…");
    try {
      const data = await verifyAccessCode(code);
      localStorage.setItem(LS_ACCESS_OK, "true");
      if (data?.token) localStorage.setItem(LS_AUTH_TOKEN, String(data.token));
      setCodeError("");
      closeGate();
    } catch (e) {
      setCodeError(e?.message || "Incorrect code.");
      if (codeInput) codeInput.focus();
    }
  }

  async function onSubmitEmail() {
    const email = (emailInput?.value || "").trim();
    if (!email) {
      setEmailStatus("Enter an email.", true);
      return;
    }
    setEmailStatus("Sending…");
    try {
      const data = await requestEmailLink(email);
      setEmailStatus(data?.message || "Check your email for a sign-in link.");
    } catch (e) {
      setEmailStatus(e?.message || "Could not send email.", true);
    }
  }

  if (codeBtn) codeBtn.addEventListener("click", onSubmitCode);
  if (codeInput) codeInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") onSubmitCode();
  });

  if (emailBtn) emailBtn.addEventListener("click", onSubmitEmail);
  if (emailInput) emailInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") onSubmitEmail();
  });

  // If user hits Escape, keep it open (do nothing). This is intentional.
}
