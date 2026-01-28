import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 text-center mt-16 border-t border-gray-300">
      <p>© {new Date().getFullYear()} AK-GYM. All rights reserved.</p>
    </footer>
  );
}
